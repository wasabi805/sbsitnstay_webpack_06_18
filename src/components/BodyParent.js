import React, {Component} from 'react';
import {connect} from 'react-redux'

import {Link, Route, Switch} from 'react-router-dom';
import {loadLanding} from "../actions/body-parent-actions";



import LandingBody from './layout/body/Landing'
import AboutUsBody from './layout/body/AboutUs'
import ServicesBody from './layout/body/Services'

class BodyParent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLandingVisible : false,
            isAboutUsVisible : false,
            isServicesVisible : false,
            isGalleryVisible : false,
            isContactVisible : false,

            currentLoc: ['/', 'about-us', 'services', 'gallery', 'contact']
        };
    }

    componentDidMount(){
        let index = this.props.match.path;
        let location = this.props.match.params.location;
        let {currentLoc} = this.state;


        this.props.handleLoadBodySection();


        if(index === '/'){
           this.setState({
               isLandingVisible : true
           })
        }

        switch (location){
            case `${currentLoc[1]}`:
                this.setState({isAboutUsVisible: this.props.bodyParent.toggle});
                break;

            case `${currentLoc[2]}`:
                this.setState({isServicesVisible: this.props.bodyParent.toggle});
                break;

            case `${currentLoc[3]}`:
                this.setState({isGalleryVisible: this.props.bodyParent.toggle});
                break;

            case `${currentLoc[4]}`:
                this.setState({isContactVisible: this.props.bodyParent.toggle});
                break;

        }

        // console.log(location);
        // console.log(`${currentLoc[1]}`);
        // console.log(this.props.match.params.location, 'the params');

    }

    render(){

        const landingContent = this.props.bodyParent.landing;

        let landingMapper = landingContent.map(obj=>{
            let mappedImg =[];
            mappedImg.key = obj.id;
            mappedImg.name = obj.name;
            mappedImg.src = obj.src;
            mappedImg.small= obj.small;
            return mappedImg
        });


        return(
            <div className='body-parent'>
                {this.state.isLandingVisible &&  <LandingBody content={landingMapper}/>}

                {this.state.isAboutUsVisible &&  <AboutUsBody test='This is a ABOUTUS test: frm body parent '/>}
                {this.state.isServicesVisible &&  <ServicesBody/>}
            </div>
        )

    }

}

//remember that the VALUES are from the root reducer
const mapStateToProps = (state)=>({
    bodyParent: state.bodyParent
});


export default connect(mapStateToProps, {handleLoadBodySection: loadLanding} )(BodyParent)