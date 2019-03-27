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
              <div className='d-inline-flex flex-column justify-content-center align-items-center rounded' style={{backgroundColor: '#28a745'}}>
                <div>
                  <i className="fa fa-home fa-5x" aria-hidden="true" style={{color: '#fff'}}></i>
                </div>
                <div>
                  <button style={{
                  maxWidth: 170,
                  backgroundColor: '#28a745',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#fff'}}>Ficha de Visita Domicilar e Territorial</button>
                </div>
              </div>
            </Link>
        </div>
    )
  }
}
