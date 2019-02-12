import React, { Component } from 'react'
import firebase from 'firebase'
var agentes = []

// BUGA AO SER ACESSADO DIRETAMENTE VIA URL

export default class List extends Component {
    componentDidMount() {
        agentes = []
        firebase.database().ref('/agentes').once('value').then(snapshot => {
            snapshot.forEach(keys => {
                agentes.push({key: keys.key})
            })
        })
    }
    renderRows = () => {
        return agentes.map((item, index) => (
            <tr key={index}>
                <td>{item.key}</td>
            </tr>
        ))
    }
    render() {
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
    }
}
