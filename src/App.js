import React , {Component}from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Banner from './components/Banner'
import IndexMain from './components/IndexMain'
import NavBarMenu from './components/layout/nav-menu'
import Header from './components/layout/Header'
import TestMenu from './components/testComp'

import mainCss from './assets/css/main.scss';

class App extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }



    render(){

        return(

                <div>
                    <TestMenu/>

                    {/*<Header/>*/}
                    {/*<NavBarMenu/>*/}
                    <Banner/>
                    <IndexMain/>

                </div>

        )
    }
}



export default App