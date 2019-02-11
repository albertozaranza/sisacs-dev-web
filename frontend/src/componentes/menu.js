import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#689F38"}}>
            <div className="container-fluid">
                <a className='navbar-brand' href='#'>
                    <i className="fa fa-hospital-o mr-2"></i>
                    SISACS
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div id='navbar-menu' className='navbar-collapse collapse'>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className='nav-item'>
                        <a className='nav-link' href='#/home'>Sair</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
  }
}
