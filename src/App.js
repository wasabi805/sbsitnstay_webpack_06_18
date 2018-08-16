import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {Link, Route, Switch} from 'react-router-dom';

require('./assets/css/main.css');

import Main from './components/Main'

const App=(props)=>{

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
};

export default App