import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from "./App";
import LandingMain from "./components/landing/LandingMain";
import Header from "./components/layout/Header"

import NavBarMenu from "./components/layout/nav-menu";
import SubContentMain from "./components/landing/subContent/SubContentMain";
import TextFieldGroup from "./components/common/TextFieldGroup"

import TestMenu from './components/testComp'

export default (

    <Router>
        <div>
            {/*<Route path='/' component = {Header} />*/}
            {/*<Route path='/' component = { NavBarMenu } />*/}

            <Route path = '/test' component={TestMenu}/>

                <Route exact path='/' component = { App } />

                <Switch>
                    {/*<Route exact path='/landing/:id' component ={LandingMain}/>*/}
                    <Route exact path='/landing' component ={LandingMain}/>
                    <Route exact path='/contact' component ={TextFieldGroup}/>
                    <Route exact path ='/:id' component={LandingMain}/>



                    <Route path='/landing/sub' component={SubContentMain}/>
                </Switch>

        </div>
    </Router>
)