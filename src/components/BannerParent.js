import React, {Component} from 'react';
import {Route, Link } from 'react-router-dom';

import BannerLanding from './layout/banner-and-nav/banner-landing'



class Banner extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){

        return(
                <div className='banner-parent'>
                    <BannerLanding/>
                </div>

        )
    }
}



// &::before{
//     content: '';
//     height: 300px;
//     width: 300px;
//     background-color: red;
// }

export default Banner


