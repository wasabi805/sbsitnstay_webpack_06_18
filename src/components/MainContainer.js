import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';

import {AppWrapper, AppHeroBanner, AppHeroParallax, AppSectionContentWrapper, AppSectionImage, AppSectionTextBox, AppBodyWrapper} from '.././assets/js/styled-components/mainContainerStyle'

import styled from 'styled-components'
import {ThemeProvider} from 'styled-components';
import theme from 'styled-theme';

import HeaderNavigation from './layout/nav/HeaderNavigation'

import LandingBody from './body/LandingBody'
import AboutBody from './body/AboutBody';


class MainContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            heading: '',
            small:'',
            tiles: [],

            heroBannerImg : '',
            landingBodyVisible: false,
            aboutBodyVisible: false,

            redirectHome: false,
            redirectAbout: false,
        };
        this.handleRedirect = this.handleRedirect.bind(this)
    }

    handleRedirect(e){
        console.log(e.target.id);
        let buttonId = e.target.id


        if(buttonId==='landingRoute'){
            this.setState({
                heroBannerImg: 'bgLanding',
                landingBodyVisible : true,
                redirectHome: true,
            })
        }

        if(buttonId==='aboutRoute'){
            this.setState({
                heroBannerImg: 'bgAbout1',
                landingBodyVisible : false
            })
        }

        if(buttonId==='servicesRoute'){
            this.setState({
                heroBannerImg: 'bgServices1',

            })
        }

        if(buttonId==='galleryRoute'){
            this.setState({
                heroBannerImg: 'bgGallery',

            })
        }

        if(buttonId==='contactRoute'){
            this.setState({
                heroBannerImg: 'bgContact',

            })
        }


    }

    componentWillMount(){
        let {pathname}=this.props.location;

        if(pathname==='/'){
            this.setState({
                heroBannerImg : 'bgLanding',
                landingBodyVisible: true
            })

        }

        if(pathname==='/location/about-us'){
            this.setState({heroBannerImg : 'bgAbout1'})
        }
    }

    render(){
        console.log(this.state.heroBannerImg, 'heroBannerImg', );

        // let {AppWrapper, AppHeroBanner, AppHeroParallax,
        //     AppSection, AppSectionContentWrapper, AppSectionTextBox, AppSectionImage,
        //     SectionServices, AppSecondaryParallaxBg} = mainContainerStyles;

        const classNames = require('classnames');
        let landingStyle = classNames('app-section-banner','app-parallax', 'bgLanding')
        if(this.state.redirectHome){
            return <Redirect push to ='/'/>
        }
        if(this.state.redirectAbout){
            return <Redirect push to ='/location/about-us'/>
        }
        if(this.state.redirectServices){
            return <Redirect push to ='/location/services'/>
        }
        if(this.state.redirectGallery){
            return <Redirect push to ='/location/gallery'/>
        }
        if(this.state.redirectContact){
            return <Redirect push to ='/location/contact'/>
        }

        //THEMES : DEFAULTS
        AppSectionContentWrapper.defaultProps = {
            theme: {
                bgColor: "purple"
            }
        };


        // Define what props.theme will look like
        //THEMES : INSTANCES
        const aboutUsTheme = {
            bgColor: '#edf1f9'
        };



        return(
           <AppWrapper>

               {/*/!*  =====   HeroBannerParallax =====   *!/*/}
               <HeaderNavigation handleRedirect={this.handleRedirect} />
               <AppHeroBanner/>
               <AppHeroParallax/>

               {/*/!*  =====   AboutUs =====   *!/*/}
               <ThemeProvider theme={aboutUsTheme}>
               <AppSectionContentWrapper>

                    <AppSectionImage>
                        <img src="https://res.cloudinary.com/ocampot/image/upload/v1535670369/erica-magugliani-446666-unsplash.jpg"/>
                    </AppSectionImage>

                   <AppSectionTextBox>
                       <h1>About US</h1>
                   </AppSectionTextBox>
               </AppSectionContentWrapper>
               </ThemeProvider>

               <AppSectionContentWrapper>

                   <AppSectionImage>
                       <img src="https://res.cloudinary.com/ocampot/image/upload/v1535670369/erica-magugliani-446666-unsplash.jpg"/>
                   </AppSectionImage>

                   <AppSectionTextBox>
                       <h1>About US</h1>
                   </AppSectionTextBox>

               </AppSectionContentWrapper>




           </AppWrapper>

        )

    }
}

export default MainContainer