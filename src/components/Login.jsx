import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        switch (event.target.name) {
            case 'username':
                setUsername(event.target.value);
                break;
            case 'password':
                setPassword(event.target.value);
                break;
            default:
                break;
        }
    }

    const login = () => {
        // TODO: Implement login logic
        props.setUser({username: username, password: password})
        navigate('/home');

    }

    return (
        <div className={"login"}>
            <form onSubmit={login}>
                <div className={"userName-input"}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={username} onChange={handleChange} />
                </div>

                <div className={"password-input"}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
