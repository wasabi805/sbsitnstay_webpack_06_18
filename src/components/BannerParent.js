import React, {Component} from 'react';
import {Route, Link } from 'react-router-dom';


import Navbar from './layout/banner-and-nav/side-nav'
import BannerLanding from './layout/banner-and-nav/banner-landing'
import BannerGeneric from './layout/banner-and-nav/banner-generic'



class Banner extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){

        return(
                <div className='banner-parent'>
                    {/*<Navbar/>*/}
                    <BannerGeneric/>
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


