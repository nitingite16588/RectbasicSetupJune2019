
import React, { Component } from 'react';

import { Route, Redirect } from 'react-router'
export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state={
            award_data:[
                {
                  id:1,  
                  name:"spot award",
                  team:"IB core",
                  status:"pending",
                  voted:"20",
                  vpending:"5"
                },
                 {
                    id:2,  
                  name:"Star of the month award",
                  team:"IB Tech",
                  status:"pending",
                  voted:"10",
                  vpending:"15"
                },
                {
                    id:3,  
                  name:"Yearly Award",
                  team:"Hr",
                  status:"pending",
                  voted:"8",
                  vpending:"9"
                }
              ]
            
        }
    }


        detailView(item){

            this.props.history.push({ pathname:"/awarddetails",state:{id:item}});
           
        }

    

    render() {
        return (
            <React.Fragment>
                <h5 class="page-header"> Dashboard</h5>
                <div class="card">
                    <div class="card-header card-header-tabs card-header-primary">
                        Award Summary
                    </div>
                    <div class="card-body">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Sr</th>
                                    <th scope="col">Award Name</th>
                                    <th scope="col">Team</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">voted</th>
                                    <th scope="col">voting pending</th>
                                   <th></th>
                                </tr>
                            </thead>
                            <tbody>

                            {this.state.award_data.map((item,i) =>{
                                 return(
                                    <tr>
                                        <td >{i+1}</td>
                                    <td >{item.name}</td>
                                    <td>{item.team}</td>
                                    <td>{item.status}</td>
                                    <td>{item.voted}</td>
                                    <td>{item.vpending}</td>
                                    <td>  <button onClick={this.detailView.bind(this,item.id)} class="btn btn-success btn-sm">Detail</button>  </td>
                                   </tr>

                                )
                            })}
                                
                            
                            </tbody>
                        </table>

                    </div>
                </div>

            </React.Fragment>

        )
    }

}