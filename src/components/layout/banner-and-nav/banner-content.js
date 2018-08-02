import React, {Component} from 'react';
import {Route, Link } from 'react-router-dom';

class BannerContent extends Component{
    render(){
        return(
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
        )
    }
}

export default BannerContent