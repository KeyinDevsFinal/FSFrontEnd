import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Login from "./components/Login";
import Home from "./components/Home";
import {useState} from "react";

function App() {
    const [user, setUser] = useState({"username": "", "password": ""});

    App.backendURL = "http://fsbackend1-env.eba-p27fpvz4.us-east-1.elasticbeanstalk.com/";
    App.headers = {
        "Content-Type": "application/json",
        "Authorization": "Basic " + btoa("admin" + ":" + "admin")
    }

    return (
        <>
            <Router>
                <Routes>
                    <Route path={"/"} element={<Navigate to={"/home"} />}/>
                    <Route path={"/login"} element={<Login setUser={setUser}/>}/>
                    {user && <Route path={"/home"} element={<Home user={user}/>} />}
                </Routes>
            </Router>
        </>
    );
}

export default App;
