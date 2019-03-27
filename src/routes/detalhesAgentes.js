import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../componentes/header'
import Detalhes from '../componentes/detalhes'
import base64 from 'base-64'

export default class DetalhesAgentes extends Component {
  render() {
    return (
      <div style={{maxWidth: 1100, marginLeft: 'auto', marginRight: 'auto'}}>
        <header className="mt-2 mb-2 p-2 rounded border d-flex" style={{backgroundColor: '#F8F8F8'}}>
          <Link to={'/home'}>
            <div className="ml-2 mr-2" style={{color: 'black', hover: 'none'}}>
              Ficha de Visita Domicilar e Territorial
            </div>          
          </Link>
          >
          <Link to={'/agentes'}>
            <div className="ml-2 mr-2" style={{color: 'black', hover: 'none'}}>
              Agentes
            </div>   
          </Link>
          >
          <div className="ml-2 mr-2">
            {base64.decode(this.props.match.params.id)}
          </div>   
        </header>
        <Header name="Produção do agente"/>
        <Detalhes id={this.props.match.params.id}/>
      </div>
    )
  }
}
