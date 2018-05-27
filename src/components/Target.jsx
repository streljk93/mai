import React from 'react';
import { Form, Input } from 'semantic-ui-react';

export default class Target extends React.Component {

    constructor(props) {
        super(props);

        this.target = this.props.entities.filter(e => e.type === 'target')[0];
    }

    render() {
        return (
            <Form.Field style={{paddingBottom: '150px'}}>
                <Input
                    id="target"
                    fluid
                    placeholder="Цель"
                    onChange={(e, { value }) => {
                        this.props.onEditEntity(this.target.id, value);
                    }}
                    value={this.target.name}
                />
            </Form.Field>
        );
    }
}