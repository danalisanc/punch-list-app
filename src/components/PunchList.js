
import React from 'react';
import { List, Segment } from 'semantic-ui-react';
import ListItemCard from '../components/shared/ListItemCard';
import '../styles/PunchList.css';

const PunchList = (props) => {

    const punchList = props.data.map( (item) => {
        return <ListItemCard key={item.id} data={item}/>
    });

    return (
        <Segment inverted className="punchList">
            <List divided inverted relaxed>
                {punchList}
            </List>
        </Segment>

    );
};

export default PunchList;