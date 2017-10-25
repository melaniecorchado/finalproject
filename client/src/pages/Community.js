import React from 'react';
import Nav from "../component/Nav";
import Header from "../component/Header";
import Volunteer from "../component/Volunteer";
import Forum from "../component/Forum";
import Resource from "../component/Resource";


const Community = () => 
     <div>
       <Nav />
       <Header />
      
    <h3 className="h3">Volunteer</h3>
 <Volunteer />
    <h3 className="h3">Resource</h3>
<Resource />
    <h3 className="h3">Forum</h3>
<Forum />      
      
      </div>

export default Community;