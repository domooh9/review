import React from 'react';
import Fetch from './fetch';
import "./About.css";



const About = () => {
  
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
          <p className='fs-17'>Search any book of your choice by inserting the title of the book in the Search and wait for response.</p>
          
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
          
          </div>
         
        </div>
        <div className='formdata'>
        <form>
  <input className='inpt' type="text" name="name" />
    <button className='btn' type="submit" > Comment</button> 
</form>
<Fetch />
  </div>
     
      </div>
    </section>
  )
}

export default About
