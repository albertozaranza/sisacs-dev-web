import React, { Component } from 'react'
import Header from '../componentes/header'
import Detalhes from '../componentes/detalhes'

export default class DetalhesAgentes extends Component {
  render() {
    return (
      <div style={{maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto'}}>
        <Header name="Detalhes do agente"/>
        <Detalhes id={this.props.match.params.id}/>
      </div>
    )
  }
}
