
import React, { Component } from 'react';

import ReactStars from 'react-stars'



export default class UserAwardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRating:[
        {
          id: 1,
          name: "nitin gite",
          email: "nitin.gite@ubs.com",
          mob: "7838316020",
          location: "mumbai",
          rating: 3
        },
        {
          id: 2,
          name: "Ashu wagh",
          email: "ashu.wagh@ubs.com",
          mob: "7838316020",
          location: "mumbai",
          rating: 1
        },
        {
          id: 3,
          name: "max alex",
          email: "max.alex@ubs.com",
          mob: "7838316020",
          location: "mumbai",
          rating: 5
        }

      ]
    }


  }

  ratingChanged(newRating,item){
    console.log(newRating)
    console.log(item)

  }

  render() {
    return (
      <React.Fragment>
        <h5 class="page-header">Submit Award</h5>
        <div class="card">
          <div class="card-header card-header-tabs card-header-primary">
            Award
      </div>
          <div class="card-body">

            {this.state.userRating.map((item) => {
              return (

       <div class="row mt30">
                  <div class=" col-md-6 col-sm-6">
                    <div class="card card-stats">
                      <div class="card-header card-header-success card-header-icon alignl">
                        <div class="card-icon ">
                          <i class="fas fa-thumbs-up"></i>

                        </div>
                        <div class="user-details">
                          <h5>{item.name}</h5>
                          <ul>
                            <li> <i class="fas fa-envelope"></i> {item.email} <span>
                               nitin.gite@ubs.com</span>
                            </li>
                            <li> <i class="fas fa-phone-alt"></i>   <span>{item.mob}</span>
                            </li>
                            <li> <i class="fas fa-globe-asia"></i>   <span>{item.location}</span>
                            </li>

                          </ul>
                        </div>

                      </div>
                      <div class="card-footer">
                        <div class="stats">
                          <i class="material-icons">date_range</i>
                          <ReactStars onChange={this.ratingChanged.bind(this,item)} count={5} size={40} value={item.rating} color2={'#ffd700'} half={false} />
                        </div>
                      </div>
                    </div>
                  </div>


                </div>

              )
            })}
          </div>
        </div>

      </React.Fragment>

    )
  }

}