import React from 'react';
import Header from '../shared/Header'; 
import Button from 'react-bootstrap/Button';

// You need to import your shared header...

const Home = () => {
  return (
    <>
      /* You need to use your shared header component... */
      <Header title="Home" />
      /* You need a link to your about page as a call to action */
      <Button href="/About" variant="primary"> About </Button>
    </>
  );
}
 
export default Home;
