import React, {Component} from 'react';
import {connect} from 'react-redux';


import {loadLanding} from '.././actions/body-parent-actions';


import {Route, Link} from 'react-router-dom';


import LandingBody from './layout/body/Landing'
import AboutUsBody from './layout/body/AboutUs'
import ServicesBody from './layout/body/Services'
// import index from "../reducers";

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

        this.bodyMapper= this.bodyMapper.bind(this)

    }

    bodyMapper(){
        let {content} = this.state

        console.log(this.props);






        console.log(content, 'test00s');
    }


    componentDidMount(){
        this.props.loadLanding();
        this.bodyMapper();

        this.setState(
            {isLoading: false, showLanding:true})
    }

    render(){
        console.log(this.props);
        //
        // let {landing} = this.state.content;
        //
        // // //LANDING PROPS
        // let landingMapper = landing.map(obj=>{
        //
        //     let mappedContent =[];
        //     mappedContent.key = obj.id; mappedContent.name = obj.name; mappedContent.src = obj.src; mappedContent.small= obj.small;
        //     return mappedContent
        // });
        //
        // console.log(landingMapper);



        // //About Us Props
        // let aboutUsMapper = aboutUs.map(obj=>{
        //     let mappedContent =[];
        //     mappedContent.key = obj.id; mappedContent.name = obj.name; mappedContent.src = obj.src; mappedContent.small= obj.small;
        //     return mappedContent
        // });
        //
        // //Services Props
        // let servicesMapper = services.map(obj=>{
        //     let mappedContent =[];
        //     mappedContent.key = obj.id; mappedContent.name = obj.name; mappedContent.src = obj.src; mappedContent.small= obj.small;
        //     return mappedContent
        // });


        return(
            <div className='body-parent'>




                {this.state.showLanding &&  <LandingBody />}
                {this.state.showAbout &&  <AboutUsBody />}
                {this.state.showServices &&  <ServicesBody />}
            </div>
        )

    }

}

//remember that the VALUES are from the root reducer
const mapStateToProps = (state)=>{
    return{
        bodyReducer: state.bodyReducer
    }
};



export default connect(mapStateToProps,{loadLanding} )(BodyParent)