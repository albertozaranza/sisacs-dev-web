import React, { Component } from 'react'

export default class BotaoAgente extends Component {
    
    render() {
        return (
            <div>
                <div className="container-fluid">
                    {this.props.nome}
                </div>
                <div>
                    <button>
                        Detalhes
                    </button>
                </div>
            </div>
        )
    }
}
