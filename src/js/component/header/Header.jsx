
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route, Redirect, Switch,Link } from 'react-router-dom';
import Counter from '../counter/Counter.jsx';
import Home from '../home/Home.jsx';


export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

          
            <Router>
                
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#Home" ><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link  href="#Counter"><Link to="/Counter">Counter</Link></Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                   <Switch> 
                    <Route exact path="/" component={Home} />
                    <Route path="/Counter" component={Counter} />
                     <Route  component={Home} /> {/* default match if not any found*/ }
            



                </Switch>
            </Router>



        )
    }
}
