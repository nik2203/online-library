import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/";
import  Login  from "./pages/loginpage/login";
import  Register  from "./pages/signuppage/signup";
import { About } from "./pages/aboutpage/about";


function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
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
