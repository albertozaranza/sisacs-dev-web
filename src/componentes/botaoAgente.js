import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import base64 from 'base-64'

export default class BotaoAgente extends Component {
    render() {
        return (
            <div className="d-flex flex-row align-items-center">
                <div className="flex-grow-1">
                    {this.props.id}
                </div>
                <div>
                    <Link to={`/detalhes/${base64.encode(this.props.id)}`}>
                        <button className="btn btn-secondary">
                            Detalhes
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}
