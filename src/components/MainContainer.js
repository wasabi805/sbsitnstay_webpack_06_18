import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';

import {AppWrapper, AppHeroBanner, AppHeroParallax, AppSectionContentWrapper, AppSectionImage, AppSectionTextBox, AppBodyWrapper, ServiceTiles, FaContainer, ServiceTilesText} from '.././assets/js/styled-components/mainContainerStyle'

import styled from 'styled-components'
import {ThemeProvider} from 'styled-components';
import theme from 'styled-theme';

import HeaderNavigation from './layout/nav/HeaderNavigation'
import FontAwesome from 'react-fontawesome'

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




        // Define what props.theme will look like
        //THEMES : INSTANCES
        const aboutUsTheme = {
            bgColor: 'white',
            textAlignment: 'left',
            width: '50%',
            margin: '2em 0',
            padding: '4em 8em',
        };

        const servicesTheme ={
            bgColor:  '#f2f2f2',
            textAlignment: 'center',
            width: '50%',
            margin: '0 auto',
            padding: '1em 10em',
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
                           <h1 >About Us </h1>
                       </AppSectionTextBox>
                   </AppSectionContentWrapper>
               </ThemeProvider>

               {/*/!*  =====   Services =====   *!/*/}
               <ThemeProvider theme={servicesTheme}>
                   <AppSectionContentWrapper>

                       <AppSectionTextBox>
                           <h1>Services We Provide</h1>
                           <p> grew up on the crime side, the New York Times side
                               Staying alive was no jive
                               Had second hands, moms bounced on old men
                               So then we moved to Shaolin land</p>
                       </AppSectionTextBox>

                   </AppSectionContentWrapper>
               </ThemeProvider>

               <ThemeProvider theme={servicesTheme}>
               <AppSectionContentWrapper>
                   <ServiceTiles>
                       <FaContainer>
                           {/*<i className='fa fa-shoe-prints fa-8x'></i>*/}
                           <li><a href='#'><i className='fa fa-shoe-prints ' aria-hidden="true"></i></a></li>
                       </FaContainer>
                      <ServiceTilesText>
                          <h1>Walking</h1>
                      </ServiceTilesText>
                   </ServiceTiles>

                   <ServiceTiles>
                       <FaContainer>
                           <li><a href='#'><i className='fa fa-bone ' aria-hidden="true"></i></a></li>
                       </FaContainer>
                       <ServiceTilesText>
                           <h1>Feeding</h1>
                       </ServiceTilesText>
                   </ServiceTiles>
               </AppSectionContentWrapper>
               </ThemeProvider>

               <ThemeProvider theme={servicesTheme}>
               <AppSectionContentWrapper>
                   <ServiceTiles>
                       <FaContainer>
                           <li><a href='#'><i className='fa fa-moon ' aria-hidden="true"></i></a></li>
                       </FaContainer>
                       <ServiceTilesText>
                           <h1>Overnight and Drop-ins</h1>
                       </ServiceTilesText>
                   </ServiceTiles>

                   <ServiceTiles>
                       <FaContainer>
                           <li><a href='#'><i className='fa fa-tree ' aria-hidden="true"></i></a></li>
                       </FaContainer>
                       <ServiceTilesText>
                           <h1>Adventures</h1>
                       </ServiceTilesText>
                   </ServiceTiles>
               </AppSectionContentWrapper>
               </ThemeProvider>

               {/*Put the 2nd Parallax here*/}



               <ThemeProvider theme={aboutUsTheme}>
                   <AppSectionContentWrapper>
                       <h1>Hello?</h1>
                   </AppSectionContentWrapper>
               </ThemeProvider>


           </AppWrapper>

        )

    }
}

export default MainContainer