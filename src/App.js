import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Auth/Login";
import Home from "./components/Home";
import Register from "./components/Auth/Register";
import { useAuth } from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard";

function App() {
  const { currentUser } = useAuth();
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {currentUser ? (
                <p>
                  You are Logged - <Link to="/dashboard">View Dashboard</Link>
                </p>
              ) : (
                <p>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/Login">Login</Link>
                  </li>
                </p>
              )}
            </ul>
          </nav>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
