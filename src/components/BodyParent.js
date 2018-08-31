import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';


import test_imgs_srcs from '.././images/test-imgs-srcs';
import HomeAbout from './body/Home-About'

class BodyParent extends Component {

    constructor(props) {
        super(props);

        this.state={
            content : '',
            isLandingVisible : false

        }

    }

    componentWillMount(){
        let {pathname} =this.props.location;

        if(pathname === '/'){
            this.setState({
                content: this.props.content.landing,
                isLandingVisible: true
            })
        }
    }


    render(){

        console.log(this.state.content, 'body-parent');
        let {content} = this.state;

        return(
            <React.Fragment>
                { this.state.isLandingVisible && <HomeAbout content={content} />}
            </React.Fragment>
        )
    }

}

export default BodyParent