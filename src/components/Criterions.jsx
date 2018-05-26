import React from 'react';
import { Form, Button, Input, Icon } from 'semantic-ui-react';

// own
import Criterion from './Criterion';
import drawline from '../ownlib/drawline';

class Criterions extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.entities.filter(e => e.type === 'criterion').map(cr => {
            drawline(
                document.querySelector('#line' + cr.id),
                document.querySelector('#target'),
                document.querySelector('#criterion' + cr.id),
                'silver',
                1
            );
        });

        this.props.entities.filter((e) => e.type === 'criterion').map(cr => {
            this.props.entities.filter((e) => e.type === 'alternative').map(alt => {
                drawline(
                    document.querySelector('#line' + alt.id + '' + cr.id),
                    document.querySelector('#alternative' + alt.id),
                    document.querySelector('#criterion' + cr.id),
                    'silver',
                    1
                );
            });
        })
    }

    componentDidUpdate(prevProps, prevState) {
        this.props.entities.filter((e) => e.type === 'criterion').map(cr => {
            drawline(
                document.querySelector('#line' + cr.id),
                document.querySelector('#target'),
                document.querySelector('#criterion' + cr.id),
                'silver',
                1
            );
        })
        this.props.entities.filter((e) => e.type === 'criterion').map(cr => {
            this.props.entities.filter((e) => e.type === 'alternative').map(alt => {
                drawline(
                    document.querySelector('#line' + alt.id + '' + cr.id),
                    document.querySelector('#alternative' + alt.id),
                    document.querySelector('#criterion' + cr.id),
                    'silver',
                    1
                );
            });
        })
    }

    render() {
        var {
            entities,
            onAddEntity,
            onEditEntity,
            onDeleteEntity
        } = this.props;

        return (
            <Form.Group widths={5} style={{paddingBottom: '150px', display: 'flex', justifyContent: 'center'}}>

                {entities.filter(e => e.type === 'criterion').map((cr, i) => 
                    <Form.Field key={cr.id}>
                        <Input
                            id={'criterion' + cr.id}
                            icon={<Icon name="cancel" color="red" circular link onClick={() => {
                                onDeleteEntity(cr.id);
                            }} />} 
                            placeholder={'Критерий ' + (i + 1)}
                            onChange={(e, { value }) => onEditEntity(cr.id, value)}
                            value={cr.name}
                        />
                        <div key={'line' + cr.id} id={'line' + cr.id} style={{visibility: 'hidden'}} />

                        {entities.filter(e => e.type === 'alternative').map(alt => 
                            <div key={'line' + alt.id + '' + cr.id} id={'line' + alt.id + '' + cr.id} style={{visibility: 'hidden'}} />
                        )}

                    </Form.Field>
                )}

                <Button onClick={(e) => onAddEntity('', 'criterion')} icon>
                    <Icon name="plus" />
                </Button>
            </Form.Group>
        );
        
    }
}

export default Criterions;