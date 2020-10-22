import React from 'react';

// You're likely missing some imports...
import {
  BrowserRouter as Router,
  Switch,  
  Link, 
  Route
} from 'react-router-dom';

import Styles from './styles';

// Don't forget to import your components
import Home from '../Home';
import About from '../About';


const Nav = () => {
  return (
    <Router>
      <Styles.Nav>
        <ul>
          <li>
            /* Your link to home here */
            <Link to="/">Home</Link>
          </li>
          <li>
            /* Your link to about here */
            <Link to="/About">About</Link>
          </li>
        </ul>
      </Styles.Nav>

      <Switch>
        /* Your Routes Here */
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/About">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default Nav;
