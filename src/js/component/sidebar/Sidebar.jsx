
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import Counter from '../counter/Counter.jsx';
import Home from '../home/Home.jsx';
export default class Sidebar extends  Component{
    constructor (props){
        super(props);


    }

    render(){
        return(
        <Router>
   <div class="nav-side-menu">
    <div class="brand">Brand Logo</div>
    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
  
        <div class="menu-list">
  
            <ul id="menu-content" class="menu-content collapse out">
                
                <li>
                  <a href="#">
                  <i class="fas fa-tachometer-alt fa-lg"></i> Dashboard
                
                  </a>
                </li>

                <li>
                  <a href="#">
                  <i class="fas fa-user fa-lg"></i> Me
                 
                  </a>
                </li>

                <li>
                  <a href="#">
                  <i class="fas fa-users fa-lg"></i> My Team
                
                  </a>
                </li>

             
            </ul>
     </div>
</div>

</Router>


        )
    }

}