import React, { Component } from 'react'
import BotaoAgente from './botaoAgente'
import firebase from 'firebase'
import ReactLoading from 'react-loading'
import base64 from 'base-64'

export default class ListaAgentes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            agentes: null,
            search: ''
        }
    }
    componentWillMount() {
        let agentes = []
        firebase.database().ref('/agentes').on('value', snapshot => {
            agentes = []
            snapshot.forEach(ids => {
                agentes.push({id: base64.decode(ids.key)})
            })
            this.setState({agentes})
        })
    }
    renderItems = () => {
        let agentesFiltrados = this.state.agentes.filter(agente => {
            return agente.id.indexOf(this.state.search) !== -1
        })
        if(agentesFiltrados.length === 0){
            return 'Nenhum resultado foi encontrado'
        }
        else {
            return agentesFiltrados.map((item, index) => (
                <li key={index} className="list-group-item rounded m-1">
                    <BotaoAgente id={item.id}/>
                </li>
            ))
        }
        
    }
    searchHandler = event => {
        this.setState({search: event.target.value.substr(0, 20)})
    }
    render() {
        if(this.state.agentes != null)
            return (
                <div>
                    <div>
                        <div className="p-2 m-2 rounded border d-flex d-column align-items-center" style={{backgroundColor: '#F8F8F8'}}>
                            <i className="fa fa-search ml-3 mr-3" aria-hidden="true"></i>
                            <input className='form-control rounded m-1' placeholder='Buscar agente' 
                                onChange={this.searchHandler}
                                value={this.state.search}/>
                        </div>
                    </div>
                    <div className="p-2 m-2 rounded border" style={{backgroundColor: '#F8F8F8'}}>
                        <ul className="list-group">
                            {this.renderItems()}
                        </ul>
                    </div>
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
