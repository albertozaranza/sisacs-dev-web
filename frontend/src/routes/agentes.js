import React, { Component } from 'react'
import Header from '../componentes/header'
import List from '../componentes/list';

export default class Agentes extends Component {
  render() {
    return (
      <div>
        <Header name="Agentes"/>
        <List />
      </div>
    )
  }
}
