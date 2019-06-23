
import React, { Component } from 'react';


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
                                <p class="card-category">Revenue</p>
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

            </React.Fragment>

        )
    }

}