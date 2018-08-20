import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';

import LandingBody from './layout/body/Landing'
import AboutUsBody from './layout/body/AboutUs'
import ServicesBody from './layout/body/Services'
import GalleryBody from './layout/body/Gallery'
import TestComp01 from './testComp01'
import test_imgs_srcs from '.././images/test-imgs-srcs';


class BodyParent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            showLanding:false, showAbout:false, showServices:false, showGallery:false, showContact:false,
            content: this.props.content,


        };
    }

    componentWillMount(){

        let pathname = this.props.location.pathname;

        switch(pathname){

            case '/':
                this.setState({content : this.props.content.landing, isLoading: false, showLanding : true, });
                break;

            case '/location/about-us':
                this.setState({content : this.props.content.about, isLoading: false, showAbout : true, });
                break;

            case '/location/services':
                this.setState({content : this.props.content.services, isLoading: false, showServices : true, });
                break;

            case '/location/gallery':

                this.setState({
                    content : this.props.content.gallery, isLoading: false, showGallery : true, });
                break;

            case '/location/contact':
                this.setState({content : this.props.content.contact, isLoading: false, showContact : true, });
                break;
        }
    }

    render(){


        return(
            <div className='body-parent container-fluid'>
                {this.state.showLanding &&  <LandingBody content={this.state.content}/>}
                {this.state.showAbout &&  <AboutUsBody content={this.state.content} />}
                {this.state.showServices &&  <ServicesBody content={this.state.content}/>}
                {this.state.showGallery &&  <GalleryBody content={this.state.content} />}
                {/*{this.state.showContact &&  <ContactBody content={this.state.content}/>}*/}



            </div>
        )

    }

}

export default BodyParent