import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';

import {AppWrapper, AppHeroBanner, AppHeroParallax, AppSectionContentWrapper, AppSectionImage, AppSectionTextBox, AppBodyWrapper, ServiceTiles, FaContainer, ServiceTilesText, ProfileImageWrapper, SecondaryParallaxBanner,Footer} from '.././assets/js/styled-components/mainContainerStyle'
import {FormContainer,FormCol1, FormCol2, FormTextArea} from '.././assets/js/styled-components/mainContainerStyle'



import styled from 'styled-components'
import {ThemeProvider} from 'styled-components';
import theme from 'styled-theme';

import HeaderNavigation from './layout/nav/HeaderNavigation'
import Gallery from './Gallery';
import ContactForm from './common/ContactForm'

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
        const aboutUsTheme = {
            bgColor: 'white',
            textAlignment: 'left',
            width: '50%',
            margin: '2em 0',
            padding: '4em 8em',
        };

        const servicesTheme ={
            bgColor:  '#f2f2f2',
            top: '14em',
            textAlignment: 'center',
            width: '50%',
            margin: '0 auto',
            padding: '1em 10em',
        };

        const meetTheCrewTheme ={
            bgColor:  '#f2f2f2',
            textAlignment: 'center',
            width: '50%',
            margin: '0 auto',
            padding: '0',

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

               {/*/!*  =====   AboutUs =====   *!/*/}
               <ThemeProvider theme={aboutUsTheme}>
                   <AppSectionContentWrapper>


                       <AppSectionTextBox>
                           <h1 >Why SB Sit 'N Stay? </h1>
                           <ul>
                               <h2>Qualifications for sbsitnstay</h2>
                               <li>drop down 1</li>
                               <li>drop down 2</li>
                               <li>drop down 3</li>
                               <li>drop down 4</li>

                           </ul>
                       </AppSectionTextBox>

                       <AppSectionImage>
                           <img src="https://res.cloudinary.com/ocampot/image/upload/v1532397239/sbsitnstay/dog-leash-01.jpg"/>
                       </AppSectionImage>
                   </AppSectionContentWrapper>
               </ThemeProvider>

               {/*MEET THE CREW*/}
               <ThemeProvider theme={servicesTheme}>
                   <AppSectionContentWrapper>

                       <AppSectionTextBox>
                           <h1>Meet the Crew</h1>
                           <p> grew up on the crime side, the New York Times side
                               Staying alive was no jive
                               Had second hands, moms bounced on old men
                               So then we moved to Shaolin land</p>
                       </AppSectionTextBox>

                   </AppSectionContentWrapper>
               </ThemeProvider>

               {/*KAYLA*/}
               <ThemeProvider theme={meetTheCrewTheme}>
                   <AppSectionContentWrapper>
                       <ServiceTiles>

                           <ProfileImageWrapper>
                              <img src='https://res.cloudinary.com/ocampot/image/upload/v1533777073/kayla-portrait.jpg'/>
                           </ProfileImageWrapper>

                           <ServiceTilesText>
                               <h1>Kayla</h1>
                           </ServiceTilesText>
                     </ServiceTiles>


                       {/*Catherine*/}
                       <ServiceTiles>

                           <ProfileImageWrapper>
                               <img src='https://res.cloudinary.com/ocampot/image/upload/v1532396286/sbsitnstay/catherine.jpg'/>
                           </ProfileImageWrapper>

                           <ServiceTilesText>
                               <h1>Catherine</h1>
                           </ServiceTilesText>
                       </ServiceTiles>

                       {/*Yuko*/}
                       <ServiceTiles>

                           <ProfileImageWrapper>
                               <img src='.././assets/images/tina.jpeg'/>
                           </ProfileImageWrapper>

                           <ServiceTilesText>
                               <h1>Tina</h1>
                           </ServiceTilesText>
                       </ServiceTiles>


                   </AppSectionContentWrapper>
               </ThemeProvider>


               {/*Gallery*/}
               <ThemeProvider theme={aboutUsTheme}>
                   <AppSectionContentWrapper>

                       <AppSectionTextBox>
                           <h1>Check out the gallery of our latest Clients!</h1>
                           <p> grew up on the crime side, the New York Times side
                               Staying alive was no jive
                               Had second hands, moms bounced on old men
                               So then we moved to Shaolin land</p>
                       </AppSectionTextBox>

                   </AppSectionContentWrapper>
               </ThemeProvider>

               {/*Parallax 2*/}
               <Gallery gallery={this.props.gallery}/>



               <ThemeProvider theme={aboutUsTheme}>
                   <AppSectionContentWrapper>

                       <AppSectionTextBox>
                           <h1>We'd love to hear from you!</h1>
                           <p> grew up on the crime side, the New York Times side
                               Staying alive was no jive
                               Had second hands, moms bounced on old men
                               So then we moved to Shaolin land</p>
                       </AppSectionTextBox>

                   </AppSectionContentWrapper>
               </ThemeProvider>




               <SecondaryParallaxBanner>
                   {/*<ContactForm/>*/}

                   <FormContainer>
                       <FormCol1>

                           <p>Phone: 650-123-4567</p>
                           <p>Email: timothy.j.ocampo@gmail.com</p>
                       </FormCol1>

                       <div className='x'></div>
                       <FormCol2>
                           <table className='tableF'>
                               <tr>
                                   <td className='pt-2 pl-2 pr-2'><input className='inputF w-100' type='text' placeholder='first name:'/></td>
                                   <td className='pt-2 pl-2 pr-2'><input className='inputF w-100' type='text' placeholder='last name:'/></td>
                               </tr>
                               <tr>
                                   <td className='pb-2 pt-2 pl-2 pr-2'><input className='inputF w-100' type='text' placeholder='phone:'/></td>
                                   <td className='pb-2 pt-2 pl-2 pr-2'><input className='inputF w-100' type='text' placeholder='email:'/></td>
                               </tr>
                           </table>

                           <table className='w-100'>
                               <td className='pl-2 pr-2 pt-3 '> <textarea className='w-100 h-auto ' rows='10' placeholder='comments'></textarea></td>
                           </table>

                           <div className='buttonFCont'>
                               <button className='btn buttonF' value="Submit">Submit</button>
                           </div>



                       </FormCol2>

                   </FormContainer>
               </SecondaryParallaxBanner>





               <Footer>
                   THIS IS THE FOOTER
               </Footer>

           </AppWrapper>


        )

    }
}

export default MainContainer