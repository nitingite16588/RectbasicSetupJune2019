
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from 'react-router-dom';

import AwardForm from '../admin/AwardForm.jsx';

import AwardDetails from '../admin/AwardDetails.jsx';
import Dashboard from '../admin/Dashboard.jsx';
import UserDashboard from '../user/UserDashboard.jsx';
import UserAwardForm from '../user/UserAwardForm.jsx';
import UserAwardDetails from '../user/UserAwardDetails.jsx';
export default class Sidebar extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (

      <Router>

        <div class="nav-side-menu">
          <div class="brand">Brand Logo</div>
          <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

          <div class="menu-list mt30">

            <ul id="menu-content" class="menu-content collapse out">
              <NavLink to="/dashboard" activeClassName="selected">
                <li>
                  <a>
                    <i class="fas fa-tachometer-alt fa-lg"></i> Dashboard
                 </a>
                </li>
              </NavLink >
            
                <li>
                  <a >
                    <i class="fas fa-user fa-lg"></i> Me
                  </a>
                </li>
            
              
                <li>
                  <a >
                    <i class="fas fa-users fa-lg"></i> My Team
                  </a>
                </li>
             


              <NavLink to="/awardform" activeClassName="selected">
                <li>
                  <a >
                    
                    <i class="fas fa-trophy fa-lg"></i>
                    Create Award
                  </a>
                </li>
              </NavLink >

              <NavLink to="/userdashboard" activeClassName="selected">
                <li>
                  <a>
                    <i class="fas fa-tachometer-alt fa-lg"></i> User Dashboard
                 </a>
                </li>
              </NavLink >
            </ul>
          </div>
        </div>

        <div className="main-container">
          <div className="main-box">

            <Switch>

              <Route exact path="/dashboard" component={Dashboard} />
             >
              <Route path="/awardform" component={AwardForm} />
              <Route path="/awarddetails" component={AwardDetails} />

              <Route exact path="/userdashboard" component={UserDashboard} />

              <Route exact path="/userawarddetails" component={UserAwardDetails} />
              <Route exact path="/userawardform" component={UserAwardForm} />

              
              <Route component={Dashboard} />

              
            </Switch>

          </div>

        </div>



      </Router>


    )
  }

}