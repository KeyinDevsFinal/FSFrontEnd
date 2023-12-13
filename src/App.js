import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path={"/"} element={<Navigate to={"/login"} replace />}/>
                <Route path={"/login"} element={<Login />}/>
                <Route path={"/home"} element={<Home />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
