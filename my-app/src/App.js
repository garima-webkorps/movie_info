import React from "react";
import "./App.scss";
import Header from './components/header'
import CustomTabs from './components/customTabs'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <ul className="redirection">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
  }
  function Home() {
    return(
      <div>
        <Header />
        <CustomTabs />
      </div>
    )
  }
  
  function About() {
    return(
      <div>
        <Header />
        <h2>Its about page</h2>
        </div>
    )
  }
  
export default App;