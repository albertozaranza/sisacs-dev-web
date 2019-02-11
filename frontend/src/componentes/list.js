import React, { Component } from 'react'
import firebase from 'firebase'

export default class List extends Component {
    renderRows = () => {
        let ids = []
        firebase.database().ref('/agentes').once('value', function(snapshot) {
            snapshot.forEach(function(keys) {
                ids.push(keys.key)
            })
        })
        return ids.map(item => (
            <tr>
                <td>{item}</td>
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
