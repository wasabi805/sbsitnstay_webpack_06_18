import React , {Component}from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from './routes'
import mainCss from './assets/css/main.scss';

import IndexMain from './components/IndexMain'
import NavBarMenu from "./components/layout/nav-menu";
import Banner from './components/Banner'
import BannerType from './components/layout/banner-type'

import AboutUs from './components/landing/about-us'
import Services from './components/landing/services'



import dogLeash from './images/dog-leash.jpg'
import dogWithLeash002 from './images/dog-leash-002.jpg'
import TextFieldGroup from "./components/common/TextFieldGroup";


import TestMenu from "./components/testComp";


class App extends Component{

    constructor(props){
        super(props);
        this.state={
            test: 'this is a test'
        }
    }



    render(){


        return(
                <Router>
                    <div>
                        {/*<IndexMain/>*/}


                        <NavBarMenu/>

                        <Route exact path='/' component = { Banner} />

                        <Route exact path='/:id' component = { BannerType} />



                        <Route exact path ='/' component={IndexMain}/>
                        <Route exact path ='/about-us' component={AboutUs}/>
                        <Route exact path ='/services' component={Services}/>



                        <Route path = '/test' component={TestMenu}/>

                        {/*<Route exact path='/' component = { App } />*/}

                        {/*<Switch>*/}
                            {/*<Route exact path='/landing/:id' component ={LandingMain}/>*/}
                            {/*<Route exact path='/landing' component ={LandingMain}/>*/}
                            {/*<Route exact path='/contact' component ={TextFieldGroup}/>*/}



                        {/*</Switch>*/}



                    </div>
                </Router>

        )
    }
}



export default App