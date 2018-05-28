import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import BranchesEditor from '../containers/BranchesEditor';
import TablesEditor from '../containers/TablesEditor';
import ViewAnalysis from '../containers/ViewAnalysis';

export default function (props) {
    return (
        <Container>
            <Route exact path="/" component={BranchesEditor} />
            <Route exact path="/tables" component={TablesEditor} />
            <Route exact path="/tables/:id" component={TablesEditor} />
            <Route exact path="/analysis" component={ViewAnalysis} />
        </Container>
    );
}