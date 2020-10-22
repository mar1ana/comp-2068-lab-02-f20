import React from 'react';
import Header from '../shared/Header'; 
import { Link } from 'react-router-dom';
import Styles from './styles';

const Home = () => {
  return (
    <> 
      <Header title="Home" />
      <Styles.Button>
        <Link to="../about"> About Page </Link>
      </Styles.Button>
    </>
  );
}
 
export default Home;
