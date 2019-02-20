import React, { Component } from 'react'
import BotaoAgente from './botaoAgente'
import firebase from 'firebase'

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agentes: null
        };
    }
    componentWillMount() {
        let agentes = []
        firebase.database().ref('/agentes').once('value').then(snapshot => {
            snapshot.forEach(keys => {
                agentes.push({key: keys.key})
            })
            this.setState({agentes})
        })
    }
    renderRows = () => {
        return this.state.agentes.map((item, index) => (
            <tr key={index}>
                <td>
                    <BotaoAgente nome={item.key} />
                </td>
            </tr>
        ))
    }
    render() {
        if(this.state.agentes != null)
            return (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            )
        else
            return <h1>Loading</h1>
    }
}
