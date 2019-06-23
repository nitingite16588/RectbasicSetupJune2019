

import React, { Component } from "react";
import Header from "./component/header/Header.jsx";

import Layout from "./component/layout/Layout.jsx";


export default class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Layout />
        )

    }

}