import React , {Component}from 'react'
import {Link, Route, Switch} from 'react-router-dom';
import routes from './routes'
require('./assets/css/main.css');
import TestComp from './components/testComp'


import Banner from './components/Banner'

//THIS IS THE SASS FIX Branch

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


                <div>
                    {/*site map for routes*/}
                    {/*<Route path='/test' component={TestComp}/>*/}

                    <Route path='/' component={Banner} />
                </div>


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




            </div>

        )
    }
}



export default App