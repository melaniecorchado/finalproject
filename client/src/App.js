import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Community from "./pages/Community";
import Storm from "./pages/Storm";
import Home from "./pages/Home";
import Volunteer from "./pages/Volunteer";




const App = () => 

 <Router>
      <div>
           <Route exact path="/" component={Main} />
           <Route exact path="/home" component={Home} />
           <Route exact path="/community" component={Community} />
           <Route exact path="/storm" component={Storm} />
           <Route exact path="/volunteer" component= {Volunteer} />
                
      
    </div>  
 </Router>      
      












export default App;

