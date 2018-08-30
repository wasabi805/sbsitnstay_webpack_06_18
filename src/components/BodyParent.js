import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';


import test_imgs_srcs from '.././images/test-imgs-srcs';
import HomeAbout from './body/Home-About'

class BodyParent extends Component {

    constructor(props) {
        super(props);


    }


    render(){

        return(
            <HomeAbout/>
        )
    }

}

export default BodyParent