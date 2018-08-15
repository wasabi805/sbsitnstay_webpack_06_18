import React , {Component}from 'react'
import {Link, Route, Switch} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import store from './store';




require('./assets/css/main.css');


import BannerParent from './components/BannerParent'
import BodyParent from './components/BodyParent'
import Services from './components/layout/body/Services';
import Landing from './components/layout/body/Landing'



class App extends Component{

    render(){



        return(

            <Provider store={store}>
                <BrowserRouter>

                    <div id="main">
                        {/*<Route path='/' component={Navbar} />*/}


                        <Route exact path='/'>
                            <BodyParent/>
                        </Route>


                        {/*<Route exact strict path='/location/:location' component={BodyParent}/>*/}
                        {/*<Route exact strict path='/' component={BodyParent}/>*/}
                        {/*<Landing/>*/}

                    </div>

                </BrowserRouter>
            </Provider>

        )
    }
}


export default App