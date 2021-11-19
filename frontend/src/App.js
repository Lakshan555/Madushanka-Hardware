import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import TopNav from './Components/SideNav/topNav';


// importing Components

import Dashboard from './Components/Dashboard';
import Sidebars from './Components/SideNav/sidebars';

function App() {
  return (
    <BrowserRouter>
    
    <Sidebars/>
    <TopNav/>

      <div className="container">
        <Route path="/" exact component={Dashboard}></Route>
       

      </div>

    </BrowserRouter>
  );
}

export default App;
