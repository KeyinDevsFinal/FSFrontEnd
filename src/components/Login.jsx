import React from 'react';
import {Component} from "react";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // bro how do i get this to redirect to the /home path
    userLogin(props) {
        alert('Username: ' + this.state.username + ' Password: ' + this.state.password);
    };

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        this.userLogin(this.props)
        event.preventDefault();
    }

    render() {
        const {username, password} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={"userName-input"}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={username} onChange={this.handleChange} />
                </div>

                <div className={"password-input"}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={this.handleChange} />
                </div>

                <button type="submit">Login</button>
            </form>
        );
    }
}

export default Login;
