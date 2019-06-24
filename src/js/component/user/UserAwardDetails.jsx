
import React, { Component } from 'react';
import profile from '../../../img/profile.png';




export default class AwardDetails extends Component {
    constructor(props) {
        super(props);


    }


    render() {
        return (
            <React.Fragment>
                <h5 class="page-header">Award Details</h5>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="card card-stats">
                            <div class="card-header card-header-success card-header-icon">
                                <div class="card-icon">
                                    <i class="fas fa-thumbs-up"></i>

                                </div>
                                <p class="card-category">Voted</p>
                                <h3 class="card-title">$34,245</h3>
                            </div>
                            <div class="card-footer">
                                <div class="stats">
                                    <i class="material-icons">date_range</i> Last 24 Hours
                  </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="card card-stats">
                            <div class="card-header card-header-danger card-header-icon">
                                <div class="card-icon">
                                    <i class="fas fa-thumbs-up"></i>

                                </div>
                                <p class="card-category">Voting Pending</p>
                                <h3 class="card-title">$34,245</h3>
                            </div>
                            <div class="card-footer">
                                <div class="stats">
                                    <i class="material-icons">date_range</i> Last 24 Hours
                  </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="card card-stats">
                            <div class="card-header card-header-warning card-header-icon">
                                <div class="card-icon">
                                    <i class="fas fa-thumbs-up"></i>

                                </div>
                                <p class="card-category">Comments</p>
                                <h3 class="card-title">$34,245</h3>
                            </div>
                            <div class="card-footer">
                                <div class="stats">
                                    <i class="material-icons">date_range</i> Last 24 Hours
                  </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="card card-stats">
                            <div class="card-header card-header-info card-header-icon">
                                <div class="card-icon">
                                    <i class="fas fa-thumbs-up"></i>

                                </div>
                                <p class="card-category">Survery Status</p>
                                <h3 class="card-title">$34,245</h3>
                            </div>
                            <div class="card-footer">
                                <div class="stats">
                                    <i class="material-icons">date_range</i> Last 24 Hours
                  </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div class="row">
                    <div class="col-md-12 col-sm-12 close-survey">
                    <button  className="btn btn-lg btn-primary"  >Close Award</button>
                  
                        
                 </div>
                 </div>
                 <div class="row">

                 <div class="col-md-4">
              <div class="card card-profile">
                <div class="card-avatar">
                  <a >
                    <img class="img" src={profile}/>
                  </a>
                </div>
                <div class="card-body">
                  <h6 class="card-category text-gray">CEO / Co-Founder</h6>
                  <h4 class="card-title">16/20 points</h4>
                  <p class="card-description">
                    Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <a  class="btn btn-primary btn-round">Follow</a>
                </div>
                </div>
              </div>
            </div>

            </React.Fragment>

        )
    }

}