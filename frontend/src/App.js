import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import TopNav from './Components/SideNav/topNav';


// importing Components

import Dashboard from './Components/Dashboard';
import Sidebars from './Components/SideNav/sidebars';
import AddSupplier from './Components/Supllier/AddSupplier';
import SupplierHome from './Components/Supllier/SupplierHome';

function App() {
  return (
    <BrowserRouter>
    
    <Sidebars/>
    <TopNav/>

      <div className="container">
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/add_suppliers" exact component={AddSupplier}></Route>
        <Route path="/suppliers_Home" exact component={SupplierHome}></Route>
        {/* <Route path="/update_supplier/:id" exact component={UpdateSupplier}></Route> */}
      </div>

    </BrowserRouter>
  );
}

export default App;
