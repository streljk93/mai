import React from 'react';
import { Form, Input, Button, Icon } from 'semantic-ui-react';

export default class Alternatives extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form.Group widths={5} style={{paddingBottom: '15px', display: 'flex', justifyContent: 'center'}}>

                {this.props.entities.filter(e => e.type === 'alternative').map((alt, i) => 
                    <Form.Field key={alt.id}>
                        <Input
                            id={'alternative' + alt.id}
                            icon={<Icon name="cancel" color="red" circular link onClick={() => {
                                this.props.onDeleteEntity(alt.id);
                            }} />}
                            placeholder={'Альтернатива ' + (i + 1)}
                            onChange={(e, { value }) => this.props.onEditEntity(alt.id, value)}
                            value={alt.name}
                        />
                    </Form.Field>
                )}
                
                {(this.props.entities.filter(e => e.type === 'criterion').length > 0) && (
                    <Button onClick={(e) => {
                        this.props.onAddEntity('', 'alternative');
                    }} icon>
                        <Icon name="plus" />
                    </Button>
                )}
            </Form.Group>
        );
    }
}