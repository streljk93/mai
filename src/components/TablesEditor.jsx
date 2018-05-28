import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Segment, Menu, Icon } from 'semantic-ui-react';

import TableEditor from './TableEditor';

export default class TablesEditor extends React.Component {

    constructor(props) {
        super(props);
        this.target = this.props.entities.filter(e => e.type === 'target')[0];
        this.criterions = this.props.entities.filter(e => e.type === 'criterion');
        this.alternatives = this.props.entities.filter(e => e.type === 'alternative');
    }

    render() {
        const path = this.props.match.url;
        return (
            <div>
                <Menu attached='top' tabular>
                    {(this.criterions.length > 0) && (
                        <Menu.Item
                            key={this.target.id}
                            icon='file outline'
                            name={this.target.name.slice(0, 10) || 'Цель'}
                            active={path === '/tables/' + this.target.id}
                            onClick={e => this.props.history.push('/tables/' + this.target.id)}
                        />
                    )}
                    {this.criterions.map(criterion => {
                        const item = (
                            <Menu.Item
                                key={criterion.id}
                                icon='file outline'
                                name={criterion.name.slice(0, 10)}
                                active={path === '/tables/' + criterion.id}
                                onClick={e => this.props.history.push('/tables/' + criterion.id)}
                            />
                        );

                        if (criterion.name !== '') return item;
                    })}
                </Menu>

                <Segment attached='bottom'>

                    {(this.props.match.params.id) && (
                        <TableEditor
                            data={this.props.tables.filter(t => t.source === this.props.match.params.id)[0]}
                            entities={this.props.entities}
                            edges={this.props.edges}
                            onEditMatrix={this.props.onEditMatrix.bind(this)}
                            onCalculationGM = {this.props.onCalculationGM.bind(this)}
                            onCalculationSGM = {this.props.onCalculationSGM.bind(this)}
                            onCalculationNVP = {this.props.onCalculationNVP.bind(this)}
                            onCalculationLMAX = {this.props.onCalculationLMAX.bind(this)}
                            onCalculationCI = {this.props.onCalculationCI.bind(this)}
                            onCalculationCR = {this.props.onCalculationCR.bind(this)}
                        />
                    )}

                    {(!this.props.match.params.id) && (
                        <div>Выбирите сверху таблицу <Icon name='file' /> для заполнения! или вернитесь и создайте структуру <Icon name='sitemap' /></div>
                    )}
                    
                </Segment>
            </div>
        );
    }
}