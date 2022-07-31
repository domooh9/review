import React, {useState, useEffect} from 'react';
import "./About.css";

const About = () => {
  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
  const response = await fetch(
      "http://localhost:8004/docs"
    );
   const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

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
    <button className='btn' type="submit" onClick={fetchPost}> Comment</button> 
</form>
<p>{posts.value}</p>
        </div>
        
      </div>
    </section>
  )
}

export default About
