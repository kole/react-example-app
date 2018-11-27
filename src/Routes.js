import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import Intro from '~/components/ViewIntro';
import Questions from '~/components/ViewQuestions';
import Results from '~/components/ViewResults';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route component={Intro} exact path="/" />
            <Route component={Questions} path="/question/:num" />
            <Route component={Results} path="/results" />

            {/* Catch-all */}
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
);

export default Routes;
