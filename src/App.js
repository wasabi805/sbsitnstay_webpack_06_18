import React , {Component}from 'react'
// import Landing from './components/Landing/Landing'
import Header from './components/Header'
import Menu from './components/Menu'
import Banner from './components/Banner'
import IndexMain from './components/IndexMain'
// import Landing from './components/landing/LandingMain'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import mainCss from './assets/css/main.scss';

class App extends Component{
    render(){

        return(

                <div id="wrapper">

                    {/*<Header />*/}
                    {/*<Menu/>*/}
                    <Banner/>
                    <IndexMain/>

                </div>

        )
    }
}



export default App