import React, { Component } from 'react'
import BotaoAgente from './botaoAgente'
import firebase from 'firebase'
import loading from '../resources/loading.gif'

export default class ListaAgentes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agentes: null
        };
    }
    componentWillMount() {
        let agentes = []
        firebase.database().ref('/agentes').once('value').then(snapshot => {
            snapshot.forEach(ids => {
                agentes.push({id: ids.key})
            })
            this.setState({agentes})
        })
    }
    renderItems = () => {
        return this.state.agentes.map((item, index) => (
            <li key={index} className="list-group-item rounded m-1">
                <BotaoAgente id={item.id}/>
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
                <div className='d-flex justify-content-center'>
                    <img src={loading} alt='Loading...'/>
                </div>
            )
    }
}
