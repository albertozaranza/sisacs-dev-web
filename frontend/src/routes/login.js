import React, { Component } from 'react'
import background from '../resources/background.png'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            height: 0
        }
    }
    updateDimensions = () => {
        this.setState({height: window.innerHeight})
    }
    componentWillMount() {
        this.updateDimensions();
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
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
                        <input className='mt-2 mb-2 form-control' type='email' placeholder='E-mail' />
                        <input className='mt-2 mb-2 form-control' type='password' placeholder='Senha'/>
                        <button className='btn btn-success btn-block mt-4'>
                            Login
                        </button> 
                    </div>
            </div>
        )
    }
}
