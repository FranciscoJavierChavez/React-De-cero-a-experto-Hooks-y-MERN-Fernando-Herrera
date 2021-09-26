import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './Home';
import Intro from './Contenido/01-INTRO-REACT';

export default function Routes(){
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/01intro">
                <Intro />
            </Route>
        </Switch>
    );
}