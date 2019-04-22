import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import UseState from './exercises/UseState';
import UseEffect from './exercises/UseEffect';
import UseRef from './exercises/UseRef';

import logo from './logo.svg';
import './App.css';

const Home = () => <h3>Pick an exercise!</h3>;

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org/docs/hooks-overview.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Hooks
        </a>
      </header>
      <nav className="App-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/use-state">useState</Link>
          </li>
          <li>
            <Link to="/use-effect">useEffect</Link>
          </li>
          <li>
            <Link to="/use-ref">useRef</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/use-state" component={UseState} />
        <Route path="/use-effect" component={UseEffect} />
        <Route path="/use-ref" component={UseRef} />
      </Switch>
    </div>
  </Router>
);

export default App;
