import React from 'react';
import { connect } from 'react-redux';
import { Segment, Container, Input, Menu, Icon, Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { saveAs } from 'file-saver';
import {
    uploadEntities,
    uploadEdges,
    uploadTables
} from '../actions';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    exportStore() {
        const data = new Blob([JSON.stringify({
            entities: this.props.entities,
            edges: this.props.edges,
            tables: this.props.tables
        })], { type: "text/plain;charset=utf-8" });
        saveAs(data, 'maiStore.txt');
    }

    showImportStoreView() {

    }

    importStore(event) {
        const reader = new FileReader();
        let store;

        reader.readAsText(event.target.files[0]);
        reader.onload = (e) => {
            store = JSON.parse(e.target.result);

            if (
                store.entities && store.entities.length > 0 &&
                store.edges && store.edges.length > 0 &&
                store.tables && store.tables.length > 0
            ) {
                this.props.onUploadEntities(store.entities);
                this.props.onUploadEdges(store.edges);
                this.props.onUploadTables(store.tables);
            } else {
                alert('В импортируемых данных была найдена ошибка.');
            }
        };
    }

    render() {
        const activeItem = '/' + window.location.pathname.slice(1).split('/')[0];
        return (
            <Segment style={{
                background: '#F2F2F2',
                borderRadius: '0',
                boxShadow: 'none',
                marginBottom: '50px',
            }}>
                <Container>
                    <Menu secondary>
                        <Menu.Item>
                            <i>" метод анализа иерархий "</i>
                        </Menu.Item>
                        <Link to="/">
                            <Menu.Item
                                icon='sitemap'
                                name='Структура'
                                active={activeItem === '/'}
                            />
                        </Link>
                        <Link to="/tables/_23asdj38ldd">
                            <Menu.Item
                                icon='table'
                                name='Таблицы'
                                active={activeItem === '/tables'}
                            />
                        </Link>
                        <Link to="/analysis">
                            <Menu.Item
                                icon='pie graph'
                                name='Анализ'
                                active={activeItem === '/analysis'}
                            />
                        </Link>
                        <Menu.Menu position='right'>
                            <label>
                                <Menu.Item
                                    icon='download'
                                    onClick={() => this.exportStore()}
                                />
                            </label>
                            <label>
                                <Menu.Item onClick={() => console.log('upload start')}>
                                    <Icon name='upload' />
                                    <Form.Input
                                        type='file'
                                        style={{ display: 'none' }}
                                        onChange={(e, d) => this.importStore(e)}
                                    />
                                </Menu.Item>
                            </label>
                        </Menu.Menu>
                    </Menu>
                </Container>

            </Segment>
        );
    }
}

export default connect(
    state => ({
        entities: state.entities,
        edges: state.edges,
        tables: state.tables,
        routing: state.routing
    }),
    dispatch => ({
        onUploadEntities: (data) => {
            dispatch(uploadEntities(data));
        },
        onUploadEdges: (data) => {
            dispatch(uploadEdges(data));
        },
        onUploadTables: (data) => {
            dispatch(uploadTables(data));
        },
    })
)(Header);