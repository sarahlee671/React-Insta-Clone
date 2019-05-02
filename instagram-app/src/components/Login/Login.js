import React from 'react'

class Login extends React.Component {
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
        localStorage.setItem ('username', this.state.username);
        
    }


    render() {
        return (
            <div className="login">
                <form onSubmit={this.login}>
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
                    <button onClick={this.login}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;