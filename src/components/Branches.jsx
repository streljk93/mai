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
                    onEditEntity={props.onEditEntity.bind(this)}
                />
                <Criterions
                    entities={props.entities}
                    onAddEntity={props.onAddEntity.bind(this)}
                    onEditEntity={props.onEditEntity.bind(this)}
                    onDeleteEntity={props.onDeleteEntity.bind(this)}

                    edges={props.edges}
                    onAddAllEdges={props.onAddAllEdges.bind(this)}
                    onDeleteAllEdges={props.onDeleteAllEdges.bind(this)}

                    tables={props.tables}
                    onAddTable={props.onAddTable.bind(this)}
                    onDeleteAllTables={props.onDeleteAllTables.bind(this)}
                />
                <Alternatives
                    entities={props.entities}
                    onAddEntity={props.onAddEntity.bind(this)}
                    onEditEntity={props.onEditEntity.bind(this)}
                    onDeleteEntity={props.onDeleteEntity.bind(this)}
                />
            </Form>
        </div>
    );
}