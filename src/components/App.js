import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import * as punchListData from '../data/mockPunchList.json';

import Header from './shared/Header';
import Footer from './shared/Footer';
import PunchList from './PunchList';
import PunchListModal from './PunchListModal';

export class MapContainer extends Component {

  state = {
    punchListItems: punchListData.default.list,
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {},
    modalOpen: false
  };

  onMarkerClick = item => (props, marker, e) =>{
      this.setState({
        selectedPlace: item,
        activeMarker: marker,
        showingInfoWindow: true
      });
    }

  openFormModal(e, map, coord) {
      this.onClose();
      this.setState({ modalOpen: true,  activeMarker: coord})
   }

   addMarker = data => {
      if(this.state){
          const newPlace = {
            id: this.state.punchListItems.length + 1,
            discipline: data.discipline,
            status: data.status,
            description: data.description,
            assignee: data.assignee,
            coordinates: [this.state.activeMarker.latLng.lat(), this.state.activeMarker.latLng.lng()]
          };

        this.setState(previousState => {
          return {
            punchListItems: [
              ...previousState.punchListItems,
              newPlace
              ]
          }});
      }
  }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: {}
      });
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <Grid>
            <Grid.Column width={12}>
                  <Map
                      google={this.props.google}
                      onClick={this.openFormModal.bind(this)}
                      zoom={14}
                      className="mapStyle"
                      initialCenter={{
                      lat: 32.7791,
                      lng: -96.808891
                      }}
                    >
                      {this.state.punchListItems.map(item => {
                      return( <Marker
                          key={item.id}
                          position= {{lat:item.coordinates[0], lng:item.coordinates[1]}}
                          onClick={this.onMarkerClick(item)}
                      />)}
                    )}

                    <InfoWindow
                      marker={this.state.activeMarker}
                      visible={this.state.showingInfoWindow}
                      onClose={this.onClose}>
                      <div>
                      <h3>{this.state.selectedPlace.discipline} / {this.state.selectedPlace.status}</h3>
                        <h4>{this.state.selectedPlace.description}</h4>
                        <h5>Assigned - {this.state.selectedPlace.assignee}</h5>
                      </div>
                    </InfoWindow>
                </Map>

            </Grid.Column>
            <Grid.Column width={4}>
                  <PunchList data={this.state.punchListItems}/>
                  <PunchListModal
                    key='modal'
                    modalOpen={this.state.modalOpen}
                    handleClose={
                      () => {
                        this.setState({ modalOpen: false })
                      }
                    }
                    triggerParentsUpdate={this.addMarker}
                  />
                  <Footer/>
            </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCwE_lYdxDTEJJZ38Zfx3gkYxHLmkQz09o'
})(MapContainer);