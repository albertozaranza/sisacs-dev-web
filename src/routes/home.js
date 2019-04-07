import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../componentes/header'
import firebase from 'firebase'
import base64 from 'base-64'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      values: null,
      usuarioValido: false,
      dadosCarregados: false
    }
  }
  componentWillMount() {
    firebase.database().ref(`/usuarios/digitador`).on('value', snapshot => {
        snapshot.forEach(ids => {
            if(ids.key === base64.encode(firebase.auth().currentUser.email)){
              this.setState({usuarioValido: true, values: ids.val()})
            }
        })
        this.setState({dadosCarregados: true})
    })
  }
  render() {
    if(this.state.usuarioValido === true && this.state.dadosCarregados === true)
      return (
          <div style={{maxWidth: 1100, marginLeft: 'auto', marginRight: 'auto', paddingRight: 'auto', paddingLeft: 'auto'}}>
              <Header name={`Bem vindo, ${this.state.values.nome}`}/>
              <div className='container'>
                <div className="row">
                  <div className="col-sm">
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
    else if(this.state.usuarioValido === false && this.state.dadosCarregados === true) {
      return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h2>
            Usuário sem permissões para acessar o sistema. <br></br>
            Favor entrar em contato com os administradores.
          </h2>
        </div>
      )
    }                              
    else {
      return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h2>Carregando informações</h2>
        </div>
      )
    }
      
  }
}
