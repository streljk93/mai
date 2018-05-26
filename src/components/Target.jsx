import React from 'react';
import { Form, Input } from 'semantic-ui-react';

export default class Target extends React.Component {

    constructor(props) {
        super(props);
    }

    syncEdges() {
        this.autoAddEdge();
        this.autoDeleteEdge();
    }

    autoAddEdge() {
        const target = this.props.entities.filter(e => e.type === 'target')[0];
        let hasEdge;
        this.props.entities.filter(e => e.type === 'criterion').forEach(criterion => {
            hasEdge = false;
            this.props.edges.forEach(edge => {
                if (target.id === edge.source && criterion.id === edge.target) {
                    hasEdge = true;
                }
            });

            if (!hasEdge) {
                this.props.onAddEdge(target.id, criterion.id);
            }
        });
    }

    autoDeleteEdge() {
        const target = this.props.entities.filter(e => e.type === 'target')[0];
        let hasEdge;
        this.props.edges.forEach(edge => {
            hasEdge = false;
            this.props.entities.filter(e => e.type === 'criterion').forEach(criterion => {
                if (target.id === edge.source && criterion.id === edge.target) {
                    hasEdge = true;
                }
            });

            if (!hasEdge) {
                this.props.onDeleteEdge(edge.id);
            }
        });
    }

    render() {
        const { onEditEntity, onAddEdge, edges, onDeleteEdge, entities } = this.props;
        const target = entities.filter(e => e.type === 'target')[0];
        this.syncEdges();
        
        return (
            <Form.Field style={{paddingBottom: '150px'}}>
                <Input
                    id="target"
                    fluid
                    placeholder="Цель"
                    onChange={(e, { value }) => {
                        onEditEntity(target.id, value);
                    }}
                    value={target.name}
                />
            </Form.Field>
        );
    }
}