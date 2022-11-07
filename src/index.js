import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from "./components/app.jsx"
import Login from "./components/loginpage/login"
import Signup from "./components/signuppage/signup"

ReactDOM.render(
    <Router>
        <Routes>
            <Route path = "/" element = {<App />}/>
            <Route path = "/Login" element = {<Login />}/>
            <Route path = "/Signup" element = {<Signup/>}/>
        </Routes>
    </Router>


, document.getElementById("root"))
