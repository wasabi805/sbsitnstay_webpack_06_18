import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from "./App";
import LandingMain from "./components/landing/LandingMain";
import Header from "./components/landing/Header";
import Menu from "./components/landing/Menu";
import Banner from "./components/Banner";
import SubContentMain from "./components/landing/subContent/SubContentMain";


export default (

    <Router>
        <div>
            <Route path='/' component = { Header } />
            <Route path='/' component = { Menu } />


                <Route exact path='/' component = { App } />

                <Switch>
                    <Route exact path='/landing/:id' component ={LandingMain}/>



                    <Route path='/landing/sub' component={SubContentMain}/>
                </Switch>

        </div>
    </Router>
)