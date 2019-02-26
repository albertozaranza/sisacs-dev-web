import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'font-awesome/css/font-awesome.min.css'

import React, { Component } from 'react'
import Routes from './routes/routes'

import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAYnCZO2kPYfQa7A29_BoPPQuRvZFgR1Cc",
    authDomain: "sisacs-tcc.firebaseapp.com",
    databaseURL: "https://sisacs-tcc.firebaseio.com",
    projectId: "sisacs-tcc",
    storageBucket: "sisacs-tcc.appspot.com",
    messagingSenderId: "549791658870"
}

firebase.initializeApp(config);

class App extends Component {
  render() {
      return (
          <Routes />
      )
  }
}

export default App
