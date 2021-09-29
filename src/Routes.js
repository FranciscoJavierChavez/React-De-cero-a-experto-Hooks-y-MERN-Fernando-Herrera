import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './Home';
import Intro from './Contenido/01-INTRO-REACT';
import IntroJavascript from './Contenido/02-intro-javascript/bases/01-const-let';

export default function Routes(){
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/01intro">
                <Intro />
            </Route>
            <Route exact path="/02intro">
                <IntroJavascript />
            </Route>
        </Switch>
    );
}