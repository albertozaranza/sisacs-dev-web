import React, { Component } from 'react'
import { Link } from 'react-router-dom';

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
                    <Link to={`/detalhes/${this.props.id}`}>
                        <button className="btn btn-secondary" onClick={() => this.copiar(this.props.id)}>
                            Copiar
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}
