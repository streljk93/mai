import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import BranchesEditor from '../containers/BranchesEditor';
import TablesEditor from '../containers/TablesEditor';

export default function (props) {
    return (
        <Container>
            <Route exact path="/" component={BranchesEditor} />
            <Route exact path="/tables" component={TablesEditor} />
            <Route exact path="/tables/:id" component={TablesEditor} />
        </Container>
    );
}