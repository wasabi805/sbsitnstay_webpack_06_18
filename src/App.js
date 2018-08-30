import React, {Component} from 'react'
import { BrowserRouter } from 'react-router-dom'
import {Link, Route, Switch} from 'react-router-dom';

import './assets/css/main.css';
import './assets/sass/main.scss';

import Main from './components/Main'

import Banner from './components/BannerParent'
import Body from './components/BodyParent'
import TestComp02 from './components/testComp02'



class App extends Component{

    constructor(props) {
        super(props);

        this.state = {

        }

        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick(e){


    }

    render(){
        return(
            <div>
                <Banner/>
                <Body/>


            </div>
        )
    }
};

export default App