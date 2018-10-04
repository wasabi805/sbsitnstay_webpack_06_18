import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';

import {AppMainContainer,  SectionContainer, ImageBox, TextBox, AppBodyWrapper, ProfileImageWrapper, SecondaryParallaxBanner,Footer} from '../assets/js/styled-components/00-MainContainerStyle'
import {FormContainer,FormCol1, FormCol2, FormTextArea} from '../assets/js/styled-components/00-MainContainerStyle'
import {SectionTile,SectionTextWrapper} from '.././assets/js/styled-components/serviceStyle'

import {HeroBanner, HeroParallaxBg} from '../assets/js/styled-components/01-HeroParallaxStyled'
import {ServiceCards, ServiceCardText, FaContainer} from '../assets/js/styled-components/02-ServicesStyled'
import {PricingContainer, CardWrapper} from '../assets/js/styled-components/04-OurPricingPlanStyled'



import styled from 'styled-components'
import {ThemeProvider} from 'styled-components';
import theme from 'styled-theme';

import HeaderNavigation from './layout/nav/HeaderNavigation'

import ContactForm from './common/ContactForm'

import LandingBody from './body/LandingBody'



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

            startAnimation: false,
            showValidationButton: false,


        };
        this.handleClick = this.handleClick.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this)
    }

    handleClick() {
        this.setState({
            startAnimation: !this.state.startAnimation,
        })

        console.log(this.state.startAnimation, 'Value for startAnimation');

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
        console.log(this.props, 'REFACTORING' );
        const classNames = require('classnames');


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
        const textBoxCenter = {
            padding: '0 0 50px',
            textAlign: 'center,'

        }




        const aboutUsTheme = {
            bgColor: 'white',
            textAlignment: 'left',
            // margin: '2em 0',
            // padding: '2em 1em',
        };

        const servicesTheme ={
            bgColor:  '#f2f2f2',
            top: '6em',
            textAlignment: 'center',
            width: '50%',
            margin: '0 auto',
            padding: '1em 10em',
        };

        const darkThemeBanner ={
            bgColor:  '#0e0905',
            color: '#e5dcdc',

            textAlignment: 'center',
            width: '75%',
            margin: '0 auto',
            padding: '0',
        };

        const pricingBanner2 ={
            bgColor:  '#f2f2f2',
            textAlignment: 'center',
            width: '75%',
            margin: '0 auto',
            padding: '0',
        };

        const pricingTheme = {
            bgColor:  '#0e0905',
            textAlignment: 'center',
            width: '75%',
            margin: '0 auto',
            padding: '0',
        }

        const meetTheCrewBanner ={
            bgColor:  '#white',
            textAlignment: 'center',
            margin: '0 auto',
            padding: '0',

        };


        const meetTheCrewTheme ={
            bgColor:  'white',
            textAlignment: 'center',
            width: '50%',
            margin: '0 auto',
            padding: '0',

        };

        const galleryTheme ={
            bgColor:  '#f2f2f2',
            textAlignment: 'left',
            width: '50%',
            margin: '2em 0',
            padding: '4em 8em',
        }


        return(
                <React.Fragment>
                {/*/!*  =====   Services =====   *!/*/}
                <ThemeProvider theme={servicesTheme}>
                    <SectionContainer className='Service-Container'>
                        <TextBox className='service-text-box'>
                            <h1>Services We Provide</h1>
                            <p> grew up on the crime side, the New York Times side
                                Staying alive was no jive
                                Had second hands, moms bounced on old men
                                So then we moved to Shaolin land</p>
                        </TextBox>
                    </SectionContainer>
                </ThemeProvider>

                {/*SERVICE TILES*/}  {/*ROW 1 of 2 */}
                <ThemeProvider theme={servicesTheme}>
                    <SectionContainer className='ServiceCard-container'>
                        <ServiceCards className='service-cards'>
                            <FaContainer>
                                {/*<i className='fa fa-shoe-prints fa-8x'></i>*/}
                                <li onClick={this.handleClick}>
                                    <a href='#'><i className='fa fa-shoe-prints ' aria-hidden="true"></i></a>
                                </li>
                            </FaContainer>

                            <ServiceCardText className='service-card-text'>
                                <h1>Walking</h1>
                                <p>It was all a dream, I used to read Word Up! magazine
                                    Salt-n-Pepa and Heavy D up in the limousine
                                    Hangin' pictures on my wall
                                    Every Saturday Rap Attack, Mr. Magic, Marley Marl
                                    I let my tape rock 'til my tape popped
                                    Smokin' weed in Bambu, sippin' on Private Stock
                                    Way back, when I had the red and black lumberjack
                                    With the hat to match...
                                </p>
                            </ServiceCardText>
                        </ServiceCards>


                        <ServiceCards className='service-cards'>
                            <FaContainer>
                                <li><a href='#'><i className='fa fa-bone ' aria-hidden="true"></i></a></li>
                            </FaContainer>
                            <ServiceCardText className='service-card-text'>
                                <h1>Feeding</h1>
                                <p>Remember Rappin' Duke? Duh-ha, duh-ha
                                    You never thought that hip-hop would take it this far
                                    Now I'm in the limelight 'cause I rhyme tight
                                    Time to get paid, blow up like the World Trade</p>
                            </ServiceCardText>
                        </ServiceCards>
                    </SectionContainer>
                </ThemeProvider>

                {/*SERVICE TILES*/}  {/*ROW 2 of 2 */}
                <ThemeProvider theme={servicesTheme}>
                    <SectionContainer className='ServiceCard-container'>
                        <ServiceCards className='service-cards'>
                            <FaContainer>
                                <li><a href='#'><i className='fa fa-moon ' aria-hidden="true"></i></a></li>
                            </FaContainer>
                            <ServiceCardText className='service-card-text'>
                                <h1>Overnight and Drop-ins</h1>
                                <p> Born sinner, the opposite of a winner
                                    Remember when I used to eat sardines for dinner
                                    Peace to Ron G, Brucie B, Kid Capri
                                    Funkmaster Flex, Lovebug Starski
                                    I'm blowin' up like you thought I would
                                    Call the crib, same number, same hood
                                    It's all good (It's all good)
                                    And if you don't know, now you know,</p>
                            </ServiceCardText>
                        </ServiceCards>

                        <ServiceCards className='service-cards'>
                            <FaContainer>
                                <li><a href='#'><i className='fa fa-tree ' aria-hidden="true"></i></a></li>
                            </FaContainer>
                            <ServiceCardText className='service-card-text'>
                                <h1>Adventures</h1>
                                <p>I bomb atomically, Socrates' philosophies and hypotheses
                                    Can't define how I be dropping these mockeries
                                    Lyrically perform armed robbery
                                    Flee with the lottery, possibly they spotted me
                                    Battle-scarred Shogun, explosion when my pen hits tremendous
                                    Ultraviolet shine blind forensics</p>
                            </ServiceCardText>
                        </ServiceCards>
                    </SectionContainer>
                </ThemeProvider>

                </React.Fragment>
        )

    }
}

