import React from 'react';
import Fetch from './fetch';
import "./About.css";
import PostData from './PostData';



const About = () => {
  
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
          <p className='fs-17'>Search any book of your choice by inserting the title of the book in the Search and wait for response.</p>
          <p> You can leave a comment below to help us improve fuctionalities</p>
          
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
          
          </div>
         
        </div>
        <div className='formdata'>
 <PostData />
<Fetch />

  </div>
     
      </div>
    </section>
  )
}

export default About
