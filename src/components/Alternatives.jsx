import React from 'react';
import { Form, Input, Button, Icon } from 'semantic-ui-react';

export default function ({
    entities,
    onAddEntity,
    onEditEntity,
    onDeleteEntity
}) {
    return (
        <Form.Group widths={5} style={{paddingBottom: '15px', display: 'flex', justifyContent: 'center'}}>

            {entities.map((alt, i) => 
                <Form.Field key={alt.id}>
                    <Input
                        id={'alternative' + alt.id}
                        icon={<Icon name="cancel" color="red" circular link onClick={() => {
                            onDeleteEntity(alt.id);
                        }} />}
                        placeholder={'Альтернатива ' + (i + 1)}
                        onChange={(e, { value }) => onEditEntity(alt.id, value)}
                        value={alt.name}
                    />
                </Form.Field>
            )}
            
            <Button onClick={(e) => onAddEntity('', 'alternative')} icon>
                <Icon name="plus" />
            </Button>
        </Form.Group>
    );
}