import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';


import test_imgs_srcs from '.././images/test-imgs-srcs';
import HomeAbout from './body/Home-About'
import AboutUs from './layout/body/AboutUs'
import Gallery from './layout/body/Gallery';

class BodyParent extends Component {

    constructor(props) {
        super(props);

        this.state={
            content : '',
            isLandingVisible : false,
            isAboutVisible : false,
            isGalleryVisible : false,

        }

    }

    componentWillMount(){
        let {pathname} =this.props.location;
        console.log(this.props.content, 'WUTANG');

        switch (pathname){
            case '/':
                this.setState({
                    content: this.props.content.landing,
                    isLandingVisible: true
                });
                break;

            case '/location/about-us':
                this.setState({
                    content: this.props.content.about,
                    isAboutVisible: true
                });
                break;

            case '/location/gallery':
                this.setState({
                    content: this.props.content.gallery,
                    isGalleryVisible: true
                });
                break;

        }

    }


    render(){

        console.log(this.state.content, 'body-parent');
        let {content} = this.state;

        return(
            <React.Fragment>
                { this.state.isLandingVisible && <HomeAbout content={content} />}
                { this.state.isAboutVisible && <AboutUs content={content} />}
                { this.state.isGalleryVisible && <Gallery content={content} />}

            </React.Fragment>
        )
    }

}

export default BodyParent