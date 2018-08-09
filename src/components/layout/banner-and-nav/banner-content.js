import React, {Component} from 'react';
import {Route, Link } from 'react-router-dom';

class BannerContent extends Component{
    render(){
        return(
            <div className='banner-content row'>

                <h1 className='row display-4 w-100'>
                    South bay sit n stay
                </h1>

                <div className='row w-100'>
                    <p className=''>Welcome, let's get aquainted</p>
                </div>

                {/*<div className='banner-btn-row row w-100 px-0 '>*/}

                       {/*<button className='btn banner-btn' type='button'>*/}
                           {/*<Link to='#'>Get Started</Link>*/}
                       {/*</button>*/}
                {/*</div>*/}

            </div>
        )
    }
}

export default BannerContent