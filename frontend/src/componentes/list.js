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
    renderItems = () => {
        return this.state.agentes.map((item, index) => (
            <li className="list-group-item rounded m-1">
                <BotaoAgente nome={item.key}/>
            </li>
        ))
    }
    render() {
        if(this.state.agentes != null)
            return (
                <div className="p-2 m-2 rounded border" style={{backgroundColor: '#F8F8F8'}}>
                    <ul className="list-group">
                        {this.renderItems()}
                    </ul>
                </div>
            )
        else
            return (
                <div>
                    <h1>Loading</h1>
                </div>
            )
    }
}
