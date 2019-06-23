
import React, { Component } from 'react';


export default class AwardForm extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <React.Fragment>
        <h5 class="page-header"> Create Award</h5>
        <div class="card">
          <div class="card-header card-header-tabs card-header-primary">
            Create Award
      </div>
          <div class="card-body">


            <form>
              <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Award Type</label>
                <div class="col-sm-6">
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Spot Award</option>
                    <option>Star of the Month Award</option>

                  </select>
                </div>
              </div>

              <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Team</label>
                <div class="col-sm-6">
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Spot Award</option>
                    <option>Star of the Month Award</option>

                  </select>
                </div>
              </div>

              <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Award Description</label>
                <div class="col-sm-6">
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              </div>

              <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Due Date</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" id="exampleFormControlTextarea1"></input>
                </div>
              </div>

              <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Attachemnt</label>
                <div class="col-sm-6">
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="validatedCustomFile" />
                    <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>

                  </div>  

                </div>
              </div>
<div class="form-group row">
                <div class="col-sm-6">
                  <button type="submit" class="btn btn-primary">Submit </button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </React.Fragment>

    )
  }

}