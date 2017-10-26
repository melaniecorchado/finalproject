import React from 'react';
import Nav from "../component/Nav";
import Header from "../component/Header";

const Home = () => 
     <div>
       <Nav />
       <Header />
      
       <h3> Welcome </h3>

     <p> This site has been created to assist everyone that is about to experience or is going thru a natural disaster. It is divided into two sections: Community & Storm. In the Community section you will find links to resources to help out in your local area as well as a forum for you to post about whats going in your area. </p>

      <h3> Newsletter Sign Up </h3>
 
    <p>Sign up to recieve emails with updates with whats going on in the areas being affected by a natural disaster.</p>
      
     <form>
      <label>
       <p> Email: </p>
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>

        <h3> Chat </h3>
<p>In order to access the chat you would need to create a login account.</p>

<h4>Create Account</h4>
    
      
      </div>

export default Home;