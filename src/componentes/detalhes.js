import React, { Component } from 'react'
import BotaoDetalhes from './botaoDetalhes'
import BotaoArquivado from './botaoArquivado'
import firebase from 'firebase'
import ReactLoading from 'react-loading'

export default class Detalhes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visitas: null,
            arquivados: null,
            keysVisitas: null,
            keysArquivados: null,
            loading: false
        }
    }
    componentWillMount() {
        firebase.database().ref(`/agentes/${this.props.id}`).on('value', snapshot => {
            let visitas = [], arquivados = [], keysVisitas = [], keysArquivados = []
            snapshot.forEach(ids => {
                if(ids.val().arquivado === true){
                    arquivados.push(ids.val())
                    keysArquivados.push(ids.key)
                }
                else {
                    visitas.push(ids.val())
                    keysVisitas.push(ids.key)
                }
            })
            this.setState({visitas, arquivados, keysVisitas, keysArquivados, loading: true})
        })
    }
    renderItems = () => {
        return this.state.visitas.map((item, index) => (
            <li key={index} className="list-group-item rounded m-1">
                <BotaoDetalhes horario={item.horario_visita} id={this.state.keysVisitas[index]} email={this.props.id}/>
            </li>
        ))
        
    }
    renderArquivados = () => {
        return this.state.arquivados.map((item, index) => (
            <li key={index} className="list-group-item rounded m-1">
                <BotaoArquivado horario={item.horario_visita} id={this.state.keysArquivados[index]} email={this.props.id}/>
            </li>
        ))
    }
    render() {
        if(this.state.loading !== false)
            return (
                <div>
                    <div className="p-2 m-2 rounded border" style={{backgroundColor: '#F8F8F8'}}>
                        <h6>Produção com cadastro pendente</h6>
                        <ul className="list-group">
                            {this.renderItems()}
                        </ul>
                    </div>            
                    <div className="p-2 m-2 rounded border" style={{backgroundColor: '#F8F8F8'}}>
                        <div data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" style={{cursor: 'pointer'}}>
                            <h6>Arquivados</h6>
                        </div>                        
                        <div className='collapse' id='collapseExample'>
                            <ul className="list-group">
                                {this.renderArquivados()}
                            </ul>
                        </div>
                        
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
