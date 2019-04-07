import React, { Component } from 'react'
import firebase from 'firebase'

export default class BotaoDetalhes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            values: null
        }
    }
    componentWillMount() {
        firebase.database().ref(`/agentes/${this.props.email}/${this.props.id}`).on('value', snapshot => {
            this.setState({values: snapshot.val()})
        })
    }
    desarquivar = () => {
        firebase.database().ref(`/agentes/${this.props.email}/${this.props.id}`).update({arquivado: false})
        alert('Item desarquivado')
    }
    render() {
        return (
            <div className="d-flex flex-row align-items-center">
                <div className="flex-grow-1">
                    {this.props.horario}
                </div>
                <div>
                    <button className="btn btn-secondary ml-1" onClick={() => this.desarquivar()}>
                        Desarquivar
                    </button>
                </div>
            </div>
        )
    }
}
