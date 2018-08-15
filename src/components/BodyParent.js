import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';

import LandingBody from './layout/body/Landing'
import AboutUsBody from './layout/body/AboutUs'
import ServicesBody from './layout/body/Services'


class BodyParent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            showLanding : false,
            showAbout   : false,
            showServices: false,
            showGallery : false,
            showContact : false,

            location: ['/', 'about-us', 'services', 'gallery', 'contact'],

            content: this.props.bodyReducer
        };
    }

    render(){

        console.log("I'm FROM BODY PARENT", this.props);

        return(
            <div className='body-parent'>
                {this.state.showLanding &&  <LandingBody />}
                {this.state.showAbout &&  <AboutUsBody />}
                {this.state.showServices &&  <ServicesBody />}
            </div>
        )

    }

}

export default BodyParent