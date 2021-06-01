import React from 'react'
import Cards from './Cards'
import './Navbar.css'
const Navbar = () => {
 
    return (
        <body>
        
        <nav class="nav">
        <div class="container">
          <h1 class="logo">SCOOP WHOOP</h1>
          <ul>
            <li><a href="#" class="current">TRENDINGS</a></li>
            <li><a href="#">VIDEOS</a></li>
            <li><a href="#">STORIES</a></li>
            <li><a href="#">QUIZZES</a></li>
            <li><a href="#">MEMES</a></li>
            <li><a href="#">SPOTLIGHT</a></li>
            
          </ul>
        </div>
      </nav>
  
      <div class="hero">
        <div class="container">
          <h8>ENTERTAINMENT</h8>
          <p>
            16 Fan Favourite Cult Movies That You Didn't Know Were 
          </p>
          <small>Read Article</small>
        </div>
        
      </div>
  
      <section class="container content">
       <h2 class="semi">FRESH | HOT </h2>
       <hr class="solid"></hr>
       
       <Cards/>
        
      </section>
      </body>
    )
}
export default Navbar