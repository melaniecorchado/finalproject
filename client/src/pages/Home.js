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
      
     <form>
      <label>
        Email:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    
      
      </div>

export default Home;