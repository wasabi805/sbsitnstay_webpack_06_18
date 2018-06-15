import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from "./App";
import Landing from "./components/Landing/Landing";

export default (

    <Router>
        <div>
            <Route exact path='/' component = { App } />
            <Route exact path='/landing' component = { Landing } />
        </div>
    </Router>
)