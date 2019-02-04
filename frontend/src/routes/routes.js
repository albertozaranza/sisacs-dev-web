import React, { Component } from 'react';
import { Route, Redirect, HashRouter, Switch } from 'react-router-dom'

import Home from '../componentes/home'

export default class Routes extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Redirect from='*' to='/home' />
                </Switch>
            </HashRouter>
        )
    }
}