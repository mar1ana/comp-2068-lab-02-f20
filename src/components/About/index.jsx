import React from 'react';
import Header from '../shared/Header';
import './styles.css'

const About = () => {
  return (
    <>
      <Header title="About Me" />
      <div id="funfact">
      <p> Fun fact: </p>
      <p> I was born in Sao Paulo, Brazil, and I moved to Canada when I was 11 years old. </p>
      </div>
    </>
  );
}
 
export default About;
