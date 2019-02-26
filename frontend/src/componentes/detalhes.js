import React, { Component } from 'react'
import BotaoDetalhes from './botaoDetalhes'
import firebase from 'firebase'
import ReactLoading from 'react-loading'

export default class Detalhes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visitas: null
        }
    }
    componentWillMount() {
        let visitas = []
        firebase.database().ref(`/agentes/${this.props.id}`).once('value').then(snapshot => {
            snapshot.forEach(ids => {
                visitas.push({id: ids.key})
            })
            this.setState({visitas})
        })
    }
    renderItems = () => {
        return this.state.visitas.map((item, index) => (
            <li key={index} className="list-group-item rounded m-1">
                <BotaoDetalhes id={atob(item.id)} />
            </li>
        ))
    }
    render() {
        if(this.state.visitas != null)
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
                    <ReactLoading type={'spinningBubbles'} color={'#28a745'} />
                </div>
            )
    }
}
