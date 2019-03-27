import React, { Component } from 'react'

export default class BotaoDetalhes extends Component {
    copiar = id => {
        alert(id)
    }
    render() {
        return (
            <div className="d-flex flex-row align-items-center">
                <div className="flex-grow-1">
                    {this.props.id}
                </div>
                <div>
                    <button className="btn btn-secondary" onClick={() => this.copiar(this.props.id)}>
                        Copiar
                    </button>
                </div>
            </div>
        )
    }
}
