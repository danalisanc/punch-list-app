import React from 'react';
import { List } from 'semantic-ui-react';
import '../../styles/PunchList.css';

class ListItemCard extends React.Component {

    render(){
            const {discipline, status, description, assignee} = this.props.data;

            return(
                <List.Item>
                  <List.Content>
                    <List.Header>{discipline} / <span className={"status " + status}>{status}</span></List.Header>
                      <h4>{description}</h4>
                      <h5 className="ui header">Assigned - {assignee}</h5>
                  </List.Content>
              </List.Item>

        );
    }
}

export default ListItemCard;