import React from 'react';
import Fetch from './fetch';
import "./About.css";




const About = () => {
  
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
          <p>Search any book of your choice by inserting the title of the in the Search and wait for response.You can leave a comment
            below to help us improve
            functionalities</p>
          
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
          
          </div>
         
        </div>
        <div  className='formdata'>
 
<Fetch />

  </div>
     
      </div>
    </section>
  )
}

export default About
