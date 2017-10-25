import React from 'react';
import Nav from "../component/Nav";
import Header from "../component/Header";

const Home = () => 
     <div>
       <Nav />
       <Header />
      
       <h3> Welcome </h3>

     <p> This site has been created to assist everyone that is about to experience or is going thru a natural disaster. </p>

      <h3> Newsletter Sign Up </h3>
 
    <p>Sign up to recieve emails with updates with whats going on in the areas being affected by a natural disaster.</p>
      
     <form>
      <label>
        Email:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    
      
      </div>

export default Home;