import React from 'react';
import {useNavigate} from "react-router-dom";

const userLogin =(username, password) => {
    console.log("username: " + username + " password: " + password)
    useNavigate().navigate("/home");
};

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const {username, password} = this.state;
        const {onSubmit} = this.props;
        userLogin(username, password)
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
