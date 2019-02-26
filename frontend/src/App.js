import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'font-awesome/css/font-awesome.min.css'
import React, { Component } from 'react'
import { Route, Redirect, HashRouter, Switch } from 'react-router-dom'
import Routes from './routes/routes'
import Login from './routes/login'
import firebase from 'firebase'
import {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID
} from './firebaseConfig'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            auth: false,
        }
    }
    componentWillMount() {
        const config = {
            apiKey: API_KEY,
            authDomain: AUTH_DOMAIN,
            databaseURL: DATABASE_URL,
            projectId: PROJECT_ID,
            storageBucket: STORAGE_BUCKET,
            messagingSenderId: MESSAGING_SENDER_ID
        }
        firebase.initializeApp(config)
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loading: false, authenticated: true })
            } else {
                this.setState({ loading: false, authenticated: false })
            }
        })
    }
    render() {
        if (this.state.loading)  return null
        if (!this.state.authenticated) {
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
        return (
            <Routes />
        )
    }
}

export default App
