import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import Landing from './layout/body/Landing'
import AboutUs from './layout/body/AboutUs'
import Services from './layout/body/Services'

class BodyParent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLandingVisible : false,
            isAboutUsVisible : false,
            isServicesVisible : false,

            currentLoc: [
                {id:0, value: '/'},
                {id:1, value: '/location/about-us'},
                {id:2, value: '/location/services'}]
        };

    }

    componentDidMount(){

        let location = this.props.location.pathname;
        let {currentLoc} = this.state;

        if(location === `${currentLoc[0].value}`){
            this.setState({
                isLandingVisible : true
            })
        }

        if(location === `${currentLoc[1].value}`){
            this.setState({
                isAboutUsVisible : true
            })
        }

        if(location === `${currentLoc[2].value}`){
            this.setState({
                isServicesVisible : true
            })
        }

        console.log(`${currentLoc[2].value}`);

    }

    render(){


        return(
            <div className='body-parent'>
                {/*{renderLocation}*/}

                {this.state.isLandingVisible &&  <Landing test='This is a test: frm body parent '/>}
                {this.state.isAboutUsVisible &&  <AboutUs test='This is a ABOUTUS test: frm body parent '/>}
                {this.state.isServicesVisible &&  <Services/>}
            </div>
        )

    }

}

export default BodyParent