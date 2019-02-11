import React, { Component } from 'react';
import Header from '../componentes/header'

export default class Menu extends Component {
  render() {
    return (
        <div>
            <Header name="Bem vindo"/>
            <button onClick={() => this.props.history.push('/agentes')}>Form1</button>
        </div>
    )
  }
}
