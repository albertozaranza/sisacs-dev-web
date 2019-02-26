import React, { Component } from 'react'
import background from '../resources/background.png'
import ReactLoading from 'react-loading'

import firebase from 'firebase'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            height: 0,
            email: '',
            senha: '',
            erroLogin: '',
            loadingLogin: false
        }
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
    }
    updateDimensions = () => {
        this.setState({height: window.innerHeight})
    }
    componentWillMount() {
        this.updateDimensions()
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions)
    }
    autenticarUsuario() {
        this.setState({loadingLogin: true})
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
            .catch(erroLogin => this.setState({erroLogin, loadingLogin: false}))
    }
    renderBotaoLogin = () => {
        if(this.state.loadingLogin === true){
            return(
                <div className='d-flex flex-column justify-content-center align-items-center mt-4'>
                    <ReactLoading type={'spinningBubbles'} color={'#28a745'} />
                </div>                
            )
        }
        if(this.state.erroLogin !== ''){
            return(
                <div>
                    <div className='alert alert-danger' role='alert'>
                        {this.state.erroLogin.toString()}
                    </div>
                    <button className='btn btn-success btn-block mt-4' onClick={() => this.autenticarUsuario()}>
                        Login
                    </button> 
                </div>
            )
        }
        return(
            <button className='btn btn-success btn-block mt-4' onClick={() => this.autenticarUsuario()}>
                Login
            </button> 
        )
    }
    handleEmail = event => {
        this.setState({email: event.target.value})
    }
    handlePassword = event => {
        this.setState({senha: event.target.value})
    }
    render() {
        return (
            <div className='d-flex flex-column justify-content-center align-items-center'
                style={{
                    backgroundImage: `url(${background})`, 
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: this.state.height}}>
                    <h1 className='mb-4'>SISACS</h1>                    
                    <div className='d-flex flex-column border p-4 m-4 rounded' style={{backgroundColor: '#F8F8F8'}}>
                        <h1 className='h3 mb-3 font-weight-normal'>Por favor, faça o login</h1>
                        <input className='mt-2 mb-2 form-control' 
                            type='email' placeholder='E-mail'
                            value={this.state.email}
                            onChange={this.handleEmail} />
                        <input className='mt-2 mb-2 form-control' 
                            type='password' placeholder='Senha'
                            value={this.state.senha}
                            onChange={this.handlePassword}/>
                        {this.renderBotaoLogin()}
                    </div>
            </div>
        )
    }
}
