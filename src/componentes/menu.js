import React, { Component } from 'react'
import firebase from 'firebase'

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <a className='navbar-brand' href='/'>
                        <i className="fa fa-hospital-o mr-2"></i>
                        SISACS
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div id='navbar-menu' className='navbar-collapse collapse'>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className='nav-item'>
                            <a className='nav-link' href='/' onClick={() => firebase.auth().signOut()}>Sair</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
  }
}