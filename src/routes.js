import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from "./App";
import LandingMain from "./components/landing/LandingMain";
import Header from "./components/layout/Header"
import Menu from "./components/landing/Menu";
import Banner from "./components/Banner";
import SubContentMain from "./components/landing/subContent/SubContentMain";
import TextFieldGroup from "./components/common/TextFieldGroup"
// import NavMenu from "./components/layout/nav-menu";
import TestComp from './components/testComp'

export default (

    <Router>
        <div>
            {/*<Route path='/' component = { Header } />*/}
            <Route path='/' component = { Menu } />
            <Route exact path = '/test' component={TestComp}/>

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