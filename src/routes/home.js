import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../componentes/header'
import firebase from 'firebase'

export default class Home extends Component {
  render() {
    return (
        <div style={{maxWidth: 1100, marginLeft: 'auto', marginRight: 'auto', paddingRight: 'auto', paddingLeft: 'auto'}}>
            <Header name={`Bem vindo, ${firebase.auth().currentUser.email}`}/>
            <div className='container'>
              <div class="row">
                <div class="col-sm">
                  <Link to={'/agentes'}>
                    <div className='rounded m-2 p-2' style={{backgroundColor: '#28a745'}}>
                      <div className='d-flex flex-column justify-content-center align-items-center'>
                        <div>
                          <i className="fa fa-home fa-5x" aria-hidden="true" style={{color: '#fff'}}></i>
                        </div>
                        <div>
                          <button className='rounded'
                          style={{
                            backgroundColor: '#28a745',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#fff'}}>Ficha de Visita Domicilar e Territorial</button>
                        </div>
                      </div>                      
                    </div>
                  </Link>
                </div>
              </div>
            </div>       
        </div>
    )
  }
}
