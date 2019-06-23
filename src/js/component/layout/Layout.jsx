
import React, { Component } from 'react';
import NavHeader from '../navheader/NavHeader.jsx';
import Sidebar from "../sidebar/Sidebar.jsx";


export default class Layout extends  Component{
    constructor (props){
        super(props);


    }

    render(){
        return(
            <React.Fragment>
            <NavHeader/>
            <Sidebar/>
            </React.Fragment>
             


        )
    }

}