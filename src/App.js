import React , {Component}from 'react'
import {Link, Route, Switch} from 'react-router-dom';



require('./assets/css/main.css');


import Navbar from './components/layout/banner-and-nav/side-nav'


import BannerParent from './components/BannerParent'
import BodyParent from './components/BodyParent'
import Services from './components/layout/body/Services';
import Landing from './components/layout/body/Landing'


class App extends Component{

    render(){

        return(

            <div id="main">
                {/*<Route path='/' component={Navbar} />*/}
                <Route path='/' component={BannerParent} />

                {/*<Route exact path='/' component={BodyParent} />*/}

                <Route exact strict path='/location/:location' component={BodyParent}/>
                <Route exact strict path='/' component={BodyParent}/>
                {/*<Landing/>*/}

            </div>

        )
    }
}


export default App