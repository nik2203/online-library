import "./app.css";
import NavBar from "./Navbar/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dash" component={Dash}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/about" component={About} />
          </Switch>

        </div>
      </Router>
    </>
  );
}

export default App;
