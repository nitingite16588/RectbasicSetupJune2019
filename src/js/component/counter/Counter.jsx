
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button'
export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            nitin:"gite"
        };
    }

    // change code below this line

    increment() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    };

    decrement() {
        this.setState(prevState => ({
            count: prevState.count - 1
        }));
    };


    reset() {
        this.setState({
            count: 0
        });
    };

    // change code above this line
    render() {
        return (

            <div>
                <Button variant="primary">Primary</Button>
                <button className='inc' onClick={this.increment.bind(this)}>Increment!</button>
                <button className='dec' onClick={this.decrement.bind(this)}>Decrement!</button>
                <button className='reset' onClick={this.reset.bind(this)}>Reset</button>
                
                <h1>Current count: {this.state.count}</h1>
            </div>
        );
    }
};

