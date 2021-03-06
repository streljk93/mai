import React, { Component } from 'react';
import { Container, Icon, Label } from 'semantic-ui-react';
import Header from './Header';
import Content from './Content';

class App extends Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <div>
        <Header />
        <Content />
        <Container style={{ marginTop: '80px', fontSize: '12px' }}>
            <div style={{ marginBottom: '10px' }}>
                <Label>
                    <Icon name='code' />
                    Версия
                    <Label.Detail>0.0.1</Label.Detail>
                </Label>
                &nbsp;
                &nbsp;
                <Label>
                    <Icon name='calendar' />
                    Дата
                    <Label.Detail>
                        2018{(currentYear === 2018) ? '' : ' - ' + currentYear }
                    </Label.Detail>
                </Label>
            </div>
        </Container>
      </div>
    );
  }
}

export default App;
