import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../componentes/header'
import firebase from 'firebase'

export default class Home extends Component {
  render() {
    return (
        <div style={{maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto'}}>
            <Header name={`Bem vindo, ${firebase.auth().currentUser.email}`}/>
            <Link to={'/agentes'}>
              <div className='d-inline-flex flex-column justify-content-center align-items-center rounded m-4' style={{backgroundColor: '#28a745'}}>
                <div>
                  <i className="fa fa-home fa-5x" aria-hidden="true" style={{color: '#fff'}}></i>
                </div>
                <div>
                  <button className='rounded' 
                  style={{
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
