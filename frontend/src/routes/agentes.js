import React, { Component } from 'react'
import Header from '../componentes/header'
import ListaAgentes from '../componentes/listaAgentes';

export default class Agentes extends Component {
  render() {
    return (
      <div>
        <Header name="Agentes"/>
        <ListaAgentes />
      </div>
    )
  }
}
