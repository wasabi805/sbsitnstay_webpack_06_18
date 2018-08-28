import React, {Component} from 'react'
import { BrowserRouter } from 'react-router-dom'
import {Link, Route, Switch} from 'react-router-dom';

import './assets/css/main.css';
import './assets/sass/main.scss';

import Main from './components/Main'

import Banner from './components/BannerParent'
import TestComp02 from './components/testComp02'

// $("p").click(function(){
//     alert("The paragraph was clicked.");
// });

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
                <div className='bg-info'>
                    <p> WHATS THE BG?</p>
                </div>
                <Banner/>


            </div>
        )
    }
};

export default App