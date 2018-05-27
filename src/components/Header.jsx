import React from 'react';
import { Segment, Container, Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function (props) {
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
                        <i>" методы анализа иерархий "</i>
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
                        <Menu.Item
                            icon='download'
                            onClick={() => console.log('ok')}
                        />
                        <Menu.Item
                            icon='upload'
                            onClick={() => console.log('ok')}
                        />
                    </Menu.Menu>
                </Menu>
            </Container>
        </Segment>
    );
}