import React , {Component}from 'react'
import { BrowserRouter } from 'react-router-dom'
import {Link, Route, Switch} from 'react-router-dom';




require('./assets/css/main.css');

import Main from './components/layout/Main'

import BannerParent from './components/BannerParent'
import BodyParent from './components/BodyParent'
import Services from './components/layout/body/Services';
import Landing from './components/layout/body/Landing'



class App extends Component{

    render(){



        return(



                    <div id="main">
                        {/*<Route path='/' component={Navbar} />*/}


                        {/*<Route path='/' component={BodyParent}/>*/}
                        <Route path='/' component={Main}/>




                        {/*<Route exact strict path='/location/:location' component={BodyParent}/>*/}
                        {/*<Route exact strict path='/' component={BodyParent}/>*/}
                        {/*<Landing/>*/}

                    </div>



        )
    }
}


export default App