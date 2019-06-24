
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';

import HederName from '../staticJson/HeaderName.json'

export default class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            ""
            // <Router>
            //     <Navbar className="main-header" bg="primary" expand="lg" variant="dark" fixed="top">
            //         <Navbar.Brand>Logo</Navbar.Brand>
            //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //         <Navbar.Collapse id="basic-navbar-nav">
            //             <Nav className="mr-auto">
            //                 {
            //                     HederName.map((item) => {
            //                         return <Nav.Link href={"#"+item.name} eventkey={item.name}><Link to={"/" +item.name}>{item.name}</Link></Nav.Link>
            //                     })
            //                 }
            //             </Nav>

            //         </Navbar.Collapse>
            //     </Navbar>
            //     <div className="main-container">
            //         <Switch>

            //             <Route exact path="" component={} />
            //             <Route path="" component={} />
            //             <Route component={} /> {/* default match if not any found*/}
            //        </Switch>
            //     </div>
            // </Router>



        )
    }
}
