import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../componentes/header'
import firebase from 'firebase'

export default class Menu extends Component {
  render() {
    return (
        <div>
            <Header name={`Bem vindo, ${firebase.auth().currentUser.email}`}/>
            <Link to={'/agentes'}>
              <button>Form1</button>
            </Link>
        </div>
    )
  }
}
