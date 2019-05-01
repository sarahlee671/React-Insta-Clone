import React from 'react'

class Login extends Component {
    constructor() {
        super();
        this.state= {
            username: '',
            password: '',
        }
    }
    handleUserName = e => {
        this.setState({username: e.target.value})
    }

    handlePassword = e => {
        this.setState({password: e.target.value})
    }

    login = e => {
        e.preventDefault();
        username
    }


    render() {
        return (
            <div className="login">
                <form>
                    <input
                        className="login-input"
                        value={this.state.username} 
                        type="text" 
                        placeholder="username"
                        onChange={this.handleUserName}
                    />
                    <input
                        className="password"
                        value={this.state.password}
                        placeholder="password"
                        onChange={this.handlePassword}
                    />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;