import React, {Component} from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../../styles/App.css';
export default class Footer extends Component {
    render(){
        return (
        <footer className="footer">
            <Grid columns='equal' divided inverted padded>
                <Grid.Row color='black' textAlign='center'>
                <Grid.Column>
                    <Segment className="copyright" color='black' inverted>
                        Danali Sanchez Romo © 2020. All Rights Reserved.
                    </Segment>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </footer>
        )
    }
}