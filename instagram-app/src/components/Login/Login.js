import React from 'react'
import styled from 'styled-components';
// import { Button } from "reactstrap";
// import './Login.css';

const WrapperDiv = styled.div`
    font-family: sans-serif;
    width: 500px;
    margin: auto;
`;

const Button = styled.button`
    padding: 5px 10px;
    margin: 10px;
    border-radius: 3px;
    color: white;
    background-color: #17a2b8;
    border-radius: 5px;
  
`;

const Input = styled.input`
    border: 1px solid #17a2b8;
    background-color: #17a2b8;
    color: white;
    border-radius: 5px;
    margin: 0;
    margin-top: 10px;
`;



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
        window.location.reload();
        
    }


    render() {
        return (
            <WrapperDiv>
                <form onSubmit={this.login}>
                    <h1>React-Insta-Clone</h1>
                    <div>
                        <Input
                            className="input"
                            value={this.state.username}
                            type="text"
                            placeholder="username"
                            onChange={this.handleUserName}
                        />
                    </div>
                    <div>
                        <Input
                            className="input"
                            value={this.state.password}
                            placeholder="password"
                            onChange={this.handlePassword}
                        />
                    </div>
                    <Button color="info" onClick={this.login}>Login</Button>
                </form>
            </WrapperDiv>
        )
    }
}

export default Login;