// Lib
import React from 'react';
import { Form, Divider, Segment } from 'semantic-ui-react';

// Own
import Target from './Target';
import Criterions from './Criterions';
import Alternatives from './Alternatives';

export default function (props) {
    return (
        <div>
            <Form style={{textAlign: 'center', marginBottom: '50px'}}>
                <Target
                    entities={props.entities}
                    edges={props.edges}
                    onEditEntity={props.onEditEntity.bind(this)}
                    onAddEdge={props.onAddEdge.bind(this)}
                    onDeleteEdge={props.onDeleteEdge.bind(this)}
                />
                <Criterions
                    entities={props.entities.filter((e) => e.type === 'criterion' || e.type === 'alternative')}
                    onAddEntity={props.onAddEntity.bind(this)}
                    onEditEntity={props.onEditEntity.bind(this)}
                    onDeleteEntity={props.onDeleteEntity.bind(this)}
                    onAddEdge={props.onAddEdge.bind(this)}
                    onDeleteEdge={props.onDeleteEdge.bind(this)}
                    onDeleteGroupEdge={props.onDeleteGroupEdge.bind(this)}
                />
                <Alternatives
                    entities={props.entities.filter((e) => e.type === 'alternative')}
                    onAddEntity={props.onAddEntity.bind(this)}
                    onEditEntity={props.onEditEntity.bind(this)}
                    onDeleteEntity={props.onDeleteEntity.bind(this)}
                    onAddEdge={props.onAddEdge.bind(this)}
                    onDeleteEdge={props.onDeleteEdge.bind(this)}
                />
            </Form>
        </div>
    );
}