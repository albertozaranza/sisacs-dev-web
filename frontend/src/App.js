import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'font-awesome/css/font-awesome.min.css'

import React, { Component } from 'react';
import Menu from './componentes/menu'
import Routes from './routes/routes'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Routes />
      </div>
    );
  }
}

export default App;
