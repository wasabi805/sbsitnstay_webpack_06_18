import React, {Component} from 'react';
import {Route, Link } from 'react-router-dom';


import {Button} from 'reactstrap'

import SideNav from './layout/side-nav'
import HeaderNav from './layout/header-nav'


const dog_leash_01 = 'https://res.cloudinary.com/ocampot/image/upload/v1532397239/sbsitnstay/dog-leash-01.jpg'
const dogs_on_leash = 'https://res.cloudinary.com/ocampot/image/upload/v1532397698/sbsitnstay/dogs_on_leash.jpg'

// const bannerBgImg = {
//     backgroundImage: [`url(${dogOnLeash01})`]
// };


class Banner extends Component{

    constructor(props){
        super(props);
        this.state={

            thisPath: '',

            bannerBgData:[
                {title: "South Bay Sit N' Stay!!", backgroundImage: dog_leash_01},
                {title: "Who We Are!!!", backgroundImage: dog_leash_01}
            ]
        }
    }


    render(){

        const bannerBgImg01={
            backgroundImage: `url(${dog_leash_01})`
        };

        return(

                <div className='banner col p-0'>

                    <span className='overlay'></span>

                        {/*THE NAVBAR HEADER*/}
                        <div className="row banner-top-menu no-gutters">
                            <div className='col-1'>
                                <SideNav/>
                            </div>

                            {/*THE Hamburger Menu*/}
                            <div className='col-11 '>
                                <HeaderNav/>
                            </div>
                        </div>


                        <div className='banner-content row '>
                            <div className='banner-column col'>
                                <div className='banner-title row'>
                                    <h1 className='display-4'>
                                        South bay sit n stay
                                    </h1>
                                </div>

                                <div className='banner-text row'>
                                    <p className=''>Welcome, let's get aquainted</p>
                                </div>

                                <div className='banner-btn-row row'>
                                    <button className='banner-btn col' type='button'>
                                        <Link to='#'>Get Started</Link>
                                    </button>
                                </div>

                            </div>

                        </div>


                        {/* -----      -----        -----       -----       ----    */}




                        {/*contents inside banner*/}
                        {/*<div className='col banner-content'>*/}

                                {/**/}

                        {/*</div>*/}
                </div>
        )
    }
}

export default Banner


