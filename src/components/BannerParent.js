import React, {Component} from 'react';




import {Route, Link } from 'react-router-dom';


import Navbar from './layout/banner-and-nav/side-nav'
import BannerLanding from './layout/banner-and-nav/banner-landing'
import BannerGeneric from './layout/banner-and-nav/banner-generic'



class BannerParent extends Component{

    constructor(props){
        super(props);
        this.state={

            isVisibleBannerLanding : false,
            isVisibleBannerGeneric: true

        }
    }

    componentDidMount(){

    }

    render(){

       console.log(this.props, 'banner-parent');

        return(
                <div className='banner-parent'>
                    {this.state.isVisibleBannerGeneric && <BannerGeneric/>}
                </div>

        )
    }
}

export default BannerParent


