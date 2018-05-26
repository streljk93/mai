import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import BranchesEditor from '../containers/BranchesEditor';
import TablesEditor from './TablesEditor';

export default function (props) {
    return (
        <Container>
            <Route exact path="/" component={BranchesEditor} />
            <Route exact path="/tables" component={TablesEditor} />
        </Container>
    );
}