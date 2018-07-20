import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from "./App";



import NavBarMenu from "./components/layout/nav-container";
import Banner from './components/Banner'

import TextFieldGroup from "./components/common/TextFieldGroup"

import TestMenu from './components/testComp'

// export default (
//
//     <Router>
//         <div className='theseAreMyRoutes'>
//
//             <Route path='/' component = { NavBarMenu } />
//             {/*<Route path='/' component = { Banner} />*/}
//
//             <Route path = '/test' component={TestMenu}/>
//
//                 <Route exact path='/' component = { App } />
//
//                 <Switch>
//
//                     <Route exact path='/landing' component ={LandingMain}/>
//                     <Route exact path='/contact' component ={TextFieldGroup}/>
//
//                     <Route path ='/:id' component={LandingMain}/>
//
//                 </Switch>
//
//         </div>
//     </Router>
// )