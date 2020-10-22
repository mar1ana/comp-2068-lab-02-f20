import React from 'react';
import Header from '../shared/Header';
import './styles.css'

const About = () => {
  return (
    <>
      <Header title="About Me" />
      <div id="funfact">
      <p> Fun facts: </p>
      <p> I was born in Sao Paulo, Brazil, and I moved to Canada when I was 11 years old. </p>
      <p> I used to perform a Brazilian dance called Samba professionally when I lived in Toronto. </p>
      <p> I'm married and have two young daughters. </p>
      <p> I've only been programming for the past two years. </p>
      </div>
    </>
  );
}
 
export default About;
