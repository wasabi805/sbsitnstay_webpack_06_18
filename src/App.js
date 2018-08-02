import React , {Component}from 'react'
import {Link, Route, Switch} from 'react-router-dom';
import routes from './routes'
require('./assets/css/main.css');
import TestComp from './components/testComp'

import BannerParent from './components/BannerParent'
import BodyParent from './components/BodyParent'


class App extends Component{

    constructor(props){
        super(props);
        this.state={
            test: 'this is a test'
        }
    }

    render(){

        return(

            <div id='main'>
                <Route path='/' component={BannerParent} />
                <Route path='/' component={BodyParent}/>

            <small className='im-hidden-in-appjs'>
                {/*<div className='info'>*/}
                    {/*<h4>*/}
                        {/*Don't delete me: I'm coming from app.js*/}
                    {/*</h4>*/}
                    {/*<small className='bg-info'>*/}
                        {/*body color pink is in the _normalize partial : yellow is the #main div*/}
                    {/*</small>*/}
                {/*</div>*/}

                {/*<div>*/}
                    {/*<small className='bg-info'>*/}
                        {/*yellow is coming from the #main div*/}
                    {/*</small>*/}
                {/*</div>*/}
            </small>
            </div>

        )
    }
}


export default App