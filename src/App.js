import React , {Component}from 'react'
import {Link, Route, Switch} from 'react-router-dom';
import routes from './routes'
require('./assets/css/main.css');


import Navbar from './components/layout/banner-and-nav/side-nav'


import BannerParent from './components/BannerParent'
import BodyParent from './components/BodyParent'
import GenericBodyComp from './components/layout/body/GenericBodyComp'


class App extends Component{

    constructor(props){
        super(props);
        this.state={
            test: 'this is a test'
        }
    }

    render(){

        return(

            <div id="main">
                <Route path='/' component={Navbar} />
                <Route path='/' component={BannerParent} />


                <Route exact strict path='/location/:location' component={BodyParent}/>




            </div>

        )
    }
}


export default App