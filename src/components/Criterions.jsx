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
        this.syncEdges();
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
        if (prevProps.entities.length !== this.props.entities.length) {
            this.syncEdges();
        }

        if (prevProps.edges.length !== this.props.edges.length) {
            this.syncTables();
        }

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

    // makeMatrix(entity) {
    //     let length = 0;
    //     let count = 0;
    //     const matrix = [];

    //     this.props.edges.map(edge => {
    //         if (edge.source === entity.id) {
    //             length++;
    //         }
    //     });

    //     for (let row = 0; row < length; row++) {
    //         matrix[row] = [];
    //         for (let col = 0; col < length; col++) {
    //             if (count === col) {
    //                 matrix[row][col] = 1;
    //             } else {
    //                 matrix[row][col] = 0;
    //             }
    //         }

    //         count++;
    //     }

    //     return matrix;
    // }

    makeTablesWithLength() {
        let tables = [];
        let hasTable;
        this.props.edges.map(edge => {
            hasTable = false;

            if (tables.length > 0) {
                tables.map(t => {
                    if (t.source === edge.source) {
                        hasTable = true;
                    } 
                });
            }

            if (hasTable) {
                tables.map(t => {
                    if (t.source === edge.source) {
                        t.length++;
                    }
                })
            } else {
                tables.push({
                    source: edge.source,
                    length: 1,
                });
            }
        });

        return tables;
    }

    makeMatrix(table) {
        let count = 0;
        const matrix = [];
        const savedTable = this.props.tables.filter(t => t.source === table.source);
        let savedMatrix;
        if (savedTable.length > 0) savedMatrix = savedTable[0].matrix;

        for (let row = 0; row < table.length; row++) {

            matrix[row] = [];
            for (let col = 0; col < table.length; col++) {
                if (count === col) {

                    if (savedMatrix && savedMatrix.length > 0) {
                        if (savedMatrix[row] && savedMatrix[row][col]) {
                            matrix[row][col] = savedMatrix[row][col];
                        } else {
                            matrix[row][col] = 1;
                        }
                    } else {
                        matrix[row][col] = 1;
                    }

                } else {

                    if (savedMatrix && savedMatrix.length > 0) {
                        if (savedMatrix[row] && savedMatrix[row][col]) {
                            matrix[row][col] = savedMatrix[row][col];
                        } else {
                            matrix[row][col] = 0;
                        }
                    } else {
                        matrix[row][col] = 0;
                    }
                }
            }

            count++;
        }

        return matrix;
    }

    syncTables() {
        this.props.onDeleteAllTables();
        const tables = this.makeTablesWithLength();

        tables.map(t => {
            this.props.onAddTable(t.source, this.makeMatrix(t))
        })
    }

    syncEdges() {
        const target = this.props.entities.filter(e => e.type === 'target')[0];
        const edges = [];

        this.props.onDeleteAllEdges();
        this.props.entities.filter(e => e.type === 'criterion').map(criterion => {
            edges.push({
                source: target.id,
                target: criterion.id
            });
            this.props.entities.filter(e => e.type === 'alternative').map(alternative => {
                edges.push({
                    source: criterion.id,
                    target: alternative.id,
                });
            })
        });

        this.props.onAddAllEdges(edges);
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

                <Button onClick={(e) => {
                    const entity = onAddEntity('', 'criterion');
                    // this.props.onAddTable(entity.id, this.makeMatrix(entity));

                    // this.makeTablesWithLength().map(table => {
                    //     console.log(entity, table);
                    //     if (entity.id === table.source) {
                    //         console.log(this.props.onAddTable(entity.id, this.makeMatrix(table)));
                    //     }
                    // });
                }} icon>
                    <Icon name="plus" />
                </Button>
            </Form.Group>
        );
        
    }
}

export default Criterions;