import React, { Component } from 'react'

export default class BotaoAgente extends Component {
    
    render() {
        return (
            <div className="d-flex flex-row align-items-center">
                <div className="flex-grow-1">
                    {this.props.nome}
                </div>
                <div>
                    <button className="btn btn-secondary">
                        Detalhes
                    </button>
                </div>
            </div>
        )
    }
}
