import React, { Component } from 'react';
import { Route, Redirect, HashRouter, Switch } from 'react-router-dom'

import Home from './home'
import Agentes from './agentes'
import DetalhesAgentes from './detalhesAgentes'
import Login from './login';
import Menu from '../componentes/menu'

export default class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false
        };
    }
    render() {
        if(this.state.auth === true){
            return (
                <div>
                    <Menu />
                    <HashRouter>
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/agentes' component={Agentes} />                    
                            <Route path='/detalhes/:id' component={DetalhesAgentes} />               
                            <Redirect from='*' to='/home' />
                        </Switch>
                    </HashRouter>
                </div>
            )
        }
        else
            return (
                <div>
                    <HashRouter>
                        <Switch>
                            <Route path='/login' component={Login} />            
                            <Redirect from='*' to='/login' />
                        </Switch>
                    </HashRouter>
                </div>
            )
    }
}