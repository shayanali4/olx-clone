import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Home from '../components/Home'

export default class Routers extends Component {
       render() {
        return (
            <Router>
                    <Route path='/' exact component={Home} />
            </Router>
       )
    }
}
