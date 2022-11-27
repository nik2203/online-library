import "./app.css";
import NavBar from "./Navbar/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home.jsx";
import  Login  from "./pages/loginpage/login";
import  Register  from "./pages/signuppage/signup";
import About from "./pages/aboutpage/about"
import Dash from "./pages/home/home2";


function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dash" element={<Dash/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/about" element={<About/>} />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
