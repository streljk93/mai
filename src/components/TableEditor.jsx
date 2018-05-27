import React from 'react';
import { Table, Dropdown, Icon } from 'semantic-ui-react';

export default class TableEditor extends React.Component {

    constructor(props) {
        super(props);

        this.options = [
            { key: 1, text: 1, value: 1, content: '1 - Равная' },
            { key: 2, text: 2, value: 2, content: '2 - Слабая степень' },
            { key: 3, text: 3, value: 3, content: '3 - Средняя степень' },
            { key: 4, text: 4, value: 4, content: '4 - Выше среднего' },
            { key: 5, text: 5, value: 5, content: '5 - Умеренно сильное' },
            { key: 6, text: 6, value: 6, content: '6 - Сильное' },
            { key: 7, text: 7, value: 7, content: '7 - Очень сильное(очевидное)' },
            { key: 8, text: 8, value: 8, content: '8 - Очень, очень сильное' },
            { key: 9, text: 9, value: 9, content: '9 - Абсолютное' },
            { key: 1/2, text: '1/2', value: 1/2, content: '1/2 - противоположно 2' },
            { key: 1/3, text: '1/3', value: 1/3, content: '1/3 - противоположно 3' },
            { key: 1/4, text: '1/4', value: 1/4, content: '1/4 - противоположно 4' },
            { key: 1/5, text: '1/5', value: 1/5, content: '1/5 - противоположно 5' },
            { key: 1/6, text: '1/6', value: 1/6, content: '1/6 - противоположно 6' },
            { key: 1/7, text: '1/7', value: 1/7, content: '1/7 - противоположно 7' },
            { key: 1/8, text: '1/8', value: 1/8, content: '1/8 - противоположно 8' },
            { key: 1/9, text: '1/9', value: 1/9, content: '1/9 - противоположно 9' },
        ];
    }

    initialize() {
        this.entity = this.props.entities.filter(e => e.id === this.props.data.source)[0];
        this.entities = [];
        this.edges = this.props.edges.filter(edge => edge.source === this.entity.id);
        this.props.entities.map(e => {
            this.edges.map(ed => {
                if (ed.target === e.id) {
                    this.entities.push(e);
                }
            })
        });
    }

    render() {
        this.initialize();
        let count = 0;
        return (
            <Table celled definition>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            {this.entity ? this.entity.name : ''}
                        </Table.HeaderCell>
                        {this.entities.map(e => 
                            <Table.HeaderCell key={e.id} textAlign='center'>
                                {e.name}
                            </Table.HeaderCell>
                        )}
                    </Table.Row>
                </Table.Header>
                <Table.Body>

                    {this.entities.map((entityRow, indexRow) => {
                        this.count++;
                        return (
                            <Table.Row key={'row_' + entityRow.id}>
                                <Table.Cell collapsing>{entityRow.name}</Table.Cell>

                                {this.entities.map((entityCol, indexCol) => {
                                    let v = this.props.data.matrix[indexRow][indexCol];
                                    return (
                                        <Table.Cell key={'cell_' + entityCol.id} textAlign='center'>
                                            <Dropdown
                                                scrolling
                                                options={this.options}
                                                value={v}
                                                onChange={(e, { value }) => {
                                                    this.props.onEditMatrix(
                                                        this.props.data.source,
                                                        indexRow,
                                                        indexCol,
                                                        value
                                                    );
                                                }}
                                                disabled={v === 1}
                                            />
                                        </Table.Cell>
                                    );
                                })}

                            </Table.Row>
                        );
                    })}

                </Table.Body>
            </Table>
        );
        
    }

}