import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../componentes/header'

export default class Menu extends Component {
  render() {
    return (
        <div>
            <Header name="Bem vindo"/>
            <Link to={`/agentes`}>
              <button>Form1</button>
            </Link>
        </div>
    )
  }
}
