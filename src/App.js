import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Auth/Login";
import Home from "./components/Home";
import Register from "./components/Auth/Register";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/Login">Login</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/Dashboard" component={Dashboard} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
