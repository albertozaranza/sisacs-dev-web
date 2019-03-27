import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../componentes/header'
import ListaAgentes from '../componentes/listaAgentes'

export default class Agentes extends Component {
  render() {
    return (
      <div style={{maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto'}}>
        <header className="mt-2 mb-2 p-2 rounded border d-flex" style={{backgroundColor: '#F8F8F8'}}>
          <Link to='/home'>
            <div className="ml-2 mr-2" style={{color: 'black', hover: 'none'}}>
              Ficha de Visita Domicilar e Territorial
            </div> 
          </Link>          
          >
          <div className="ml-2 mr-2" style={{color: 'black', hover: 'none'}}>
            Agentes
          </div>            
        </header>
        <Header name="Agentes"/>
        <ListaAgentes />
      </div>
    )
  }
}
