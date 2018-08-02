import React, {Component} from 'react';
import {Route, Link } from 'react-router-dom';

import SideNav from './layout/banner-and-nav/side-nav'
import HeaderNav from './layout/banner-and-nav/header-nav'
import BannerContent from './layout/banner-and-nav/banner-content'


const dog_leash_01 = 'https://res.cloudinary.com/ocampot/image/upload/v1532397239/sbsitnstay/dog-leash-01.jpg'
const dogs_on_leash = 'https://res.cloudinary.com/ocampot/image/upload/v1532397698/sbsitnstay/dogs_on_leash.jpg'


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

                            {/*THE Hamburger icon/ Hides slide menu*/}
                            <div className='col-11 '>
                                <HeaderNav/>
                            </div>
                        </div>

                        {/*BANNER's TITLE , TEXT, BUTTONS*/}
                        <div className='banner-content row '>
                            <BannerContent/>
                        </div>


                        {/* -----      -----        -----       -----       ----    */}

                </div>
        )
    }
}

export default Banner


