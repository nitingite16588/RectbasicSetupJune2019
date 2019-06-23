
import React, { Component } from 'react';


export default class NavHeader extends  Component{
    constructor (props){
        super(props);


    }

    render(){
        return(

            <nav class="navbar navbar-expand-lg navbar-light">
            <i class="fas fa-user"></i> 
         
            <a class="navbar-brand" href="#">Kudos   </a>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
          
            <div class="collapse navbar-collapse  justify-content-end " id="navbarSupportedContent">
              <ul class="navbar-nav ">
                <li class="nav-item">
                  <a class="nav-link" ><i class="far fa-bell"></i> <span class="tag tag-pill tag-default tag-info tag-default tag-up">8</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" >  <i class="far fa-envelope"></i> <span class="tag tag-pill  tag-danger tag-default tag-up">5</span></a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="far fa-user-circle"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item"> <i class="far fa-user"></i>Edit Profile</a>
                    <a class="dropdown-item "> <i class="fas fa-cog"></i>Setting</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" > <i class="fas fa-power-off"></i>Logout</a>
                  </div>
                </li>
                
              </ul>
              
            </div>
          </nav>



        )
    }

}