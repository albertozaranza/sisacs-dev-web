import React, { Component } from 'react';
import { Route, Redirect, HashRouter, Switch } from 'react-router-dom'

import Home from './home'
import Agentes from './agentes'

export default class Routes extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/agentes' component={Agentes} />                    
                    <Redirect from='*' to='/home' />
                </Switch>
            </HashRouter>
        )
    }
}