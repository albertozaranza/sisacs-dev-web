import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className="pb-2 pt-2 mt-2 mb-2 border-bottom border-top">
        <h2 className="ml-3 mr-3">{this.props.name}</h2>
      </header>
    )
  }
}
