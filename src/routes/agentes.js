import React, { Component } from 'react'
import Header from '../componentes/header'
import ListaAgentes from '../componentes/listaAgentes'

export default class Agentes extends Component {
  render() {
    return (
      <div style={{maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto'}}>
        <Header name="Agentes"/>
        <ListaAgentes />
      </div>
    )
  }
}
