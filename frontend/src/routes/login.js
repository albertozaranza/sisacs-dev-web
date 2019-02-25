import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div d-flex flex-column>
                <form>
                    E-mail
                    <input>
                    </input>
                    Senha
                    <input>
                    </input>
                    <button>
                        Login
                    </button>
                </form>
            </div>
        )
    }
}
