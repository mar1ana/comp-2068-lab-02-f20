import React from 'react';

import {
  BrowserRouter as Router,
  Switch,  
  Link, 
  Route
} from 'react-router-dom';

import Styles from './styles';
import Home from '../Home';
import About from '../About';


const Nav = () => {
  return (
    <Router>
      <Styles.Nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </Styles.Nav>

      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default Nav;
