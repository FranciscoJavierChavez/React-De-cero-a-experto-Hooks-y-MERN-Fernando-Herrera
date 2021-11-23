import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './Home';
import Intro from './Contenido/01-INTRO-REACT';
import IntroJavascript from './Contenido/02-intro-javascript/bases/01-const-let';
import Actual from './Contenido/index';
import TemplateString from './Contenido/02-intro-javascript/bases/02-template-string'
import ObjetosLiterales from './Contenido/02-intro-javascript/bases/03-objetos-literales'
import Arreglos from './Contenido/02-intro-javascript/bases/04-arreglos'

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
            <Route exact path="/02templatestring">
                <TemplateString />
            </Route>
            <Route exact path="/03objetosliterales">
                <ObjetosLiterales />
            </Route>
            <Route exact path="/04arreglos">
                <Arreglos />
            </Route>

            <Route exact path="/actual">
                <Actual />
            </Route>
        </Switch>
    );
}