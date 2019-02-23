import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class BotaoAgente extends Component {
    render() {
        return (
            <div className="d-flex flex-row align-items-center">
                <div className="flex-grow-1">
                    {this.props.id}
                </div>
                <div>
                    <Link to={`/detalhes/${this.props.id}`}>
                        <button className="btn btn-secondary">
                            Detalhes
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}
