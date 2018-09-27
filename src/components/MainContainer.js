import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';

import {AppWrapper, AppHeroBanner, AppHeroParallax, AppSectionContentWrapper, AppSectionImage, AppSectionTextBox, AppBodyWrapper, ServiceTiles, FaContainer, ServiceTilesText, ProfileImageWrapper, SecondaryParallaxBanner,Footer} from '.././assets/js/styled-components/mainContainerStyle'
import {FormContainer,FormCol1, FormCol2, FormTextArea} from '.././assets/js/styled-components/mainContainerStyle'
import {SectionTile,SectionTextWrapper} from '.././assets/js/styled-components/serviceStyle'


import styled from 'styled-components'
import {ThemeProvider} from 'styled-components';
import theme from 'styled-theme';

import HeaderNavigation from './layout/nav/HeaderNavigation'
import Gallery from './Gallery';
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
            width: '50%',
            margin: '2em 0',
            padding: '4em 8em',
        };

        const servicesTheme ={
            bgColor:  '#f2f2f2',
            top: '6em',
            textAlignment: 'center',
            width: '50%',
            margin: '0 auto',
            padding: '1em 10em',
        };

        const pricingBannerr ={
            bgColor:  '#0e0905',
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
                           <p>South Bay Sit N’ Stay is a unique business offering a wide range of services aimed at the health and happiness of your pets.
                               From overnight stays in our home to adventures to the beach to stop-in visits, we tailor each of our services
                               to your pet so they come home with wagging tails and a big smile for you!
                           </p>
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



               {/*SERVICE TILES*/}
               <ThemeProvider theme={servicesTheme}>
               <AppSectionContentWrapper>
                   <ServiceTiles>
                       <FaContainer>
                           {/*<i className='fa fa-shoe-prints fa-8x'></i>*/}
                           <li onClick={this.handleClick}>
                               <a href='#'><i className='fa fa-shoe-prints ' aria-hidden="true"></i></a>
                           </li>
                       </FaContainer>


                       <ServiceTilesText>
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
                       </ServiceTilesText>




                   </ServiceTiles>


                   <ServiceTiles>
                       <FaContainer>
                           <li><a href='#'><i className='fa fa-bone ' aria-hidden="true"></i></a></li>
                       </FaContainer>
                       <ServiceTilesText>
                           <h1>Feeding</h1>
                           <p>Remember Rappin' Duke? Duh-ha, duh-ha
                               You never thought that hip-hop would take it this far
                               Now I'm in the limelight 'cause I rhyme tight
                               Time to get paid, blow up like the World Trade</p>
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
                           <p> Born sinner, the opposite of a winner
                               Remember when I used to eat sardines for dinner
                               Peace to Ron G, Brucie B, Kid Capri
                               Funkmaster Flex, Lovebug Starski
                               I'm blowin' up like you thought I would
                               Call the crib, same number, same hood
                               It's all good (It's all good)
                               And if you don't know, now you know,</p>
                       </ServiceTilesText>
                   </ServiceTiles>

                   <ServiceTiles>
                       <FaContainer>
                           <li><a href='#'><i className='fa fa-tree ' aria-hidden="true"></i></a></li>
                       </FaContainer>
                       <ServiceTilesText>
                           <h1>Adventures</h1>
                           <p>I bomb atomically, Socrates' philosophies and hypotheses
                               Can't define how I be dropping these mockeries
                               Lyrically perform armed robbery
                               Flee with the lottery, possibly they spotted me
                               Battle-scarred Shogun, explosion when my pen hits tremendous
                               Ultraviolet shine blind forensics</p>
                       </ServiceTilesText>
                   </ServiceTiles>
               </AppSectionContentWrapper>
               </ThemeProvider>






               {/*/!*  =====   AboutUs =====   *!/*/}
               <ThemeProvider theme={pricingBannerr}>
                   <AppSectionContentWrapper>

                       <AppSectionTextBox>
                           <h1 >Why Choose South Bay Sit N Stay? </h1>
                           <p>South Bay Sit N’ Stay is a unique business offering a wide range of services aimed at the health and happiness of your pets.
                               From overnight stays in our home to adventures to the beach to stop-in visits, we tailor each of our services
                               to your pet so they come home with wagging tails and a big smile for you!
                           </p>
                       </AppSectionTextBox>
                   </AppSectionContentWrapper>
               </ThemeProvider>

               <ThemeProvider theme={aboutUsTheme}>
                   <AppSectionContentWrapper>


                       <AppSectionTextBox>

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


               {/*START CARDS HERE*/}
               {/*<ThemeProvider theme={pricingTheme}>*/}
                   <div className='pricing-container'>

                       <ThemeProvider theme={pricingBanner2}>
                           <AppSectionContentWrapper>

                               <AppSectionTextBox>
                                   <h1 >Our Pricing Plan </h1>
                               </AppSectionTextBox>
                           </AppSectionContentWrapper>
                       </ThemeProvider>


                        <div className='row bg-info '>
                            <div className='col'>
                                <div className="card pricing-card">
                                    <div className="card-body pb-3">

                                        <h4 className="card-title">Standard Care</h4>
                                        <h1 className="card-subtitle text-muted">Stop in Visits</h1>
                                        <h6>Rate: $25 Per </h6>

                                        <p>This option is ideal for the homebody pet. We come to you and take care of your pet overnight in the comfort of their home.  Also offered for overnight stays: watering your indoor and outdoor plants, picking up your mail,
                                            accepting deliveries, and more!
                                        </p>
                                        <div className='btn-container'>
                                            <a className='btn btn-outline-primary' href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col'>
                                <div className="card pricing-card">
                                    <div className="card-body">

                                        <h4 className="card-title">Overnight Care</h4>
                                        <h1 className="card-subtitle text-muted">$40 <sub>/ per night</sub></h1>


                                        <p>Working late? Date night? We’ve got you covered with an hour stop in visit. We can feed, play, and spend quality time with your pet while you are out.
                                            Per visit can to multiple visits a day.
                                        </p>
                                        <h6>Rate: $40 Per night
                                        </h6>

                                        <div className='btn-container'>
                                            <a className='btn btn-outline-primary' href="#">Read More</a>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='col'>
                                <div className="card pricing-card">
                                    <div className="card-body">

                                        <h4 className="card-title">VIP Care</h4>
                                        <h1 className="card-subtitle text-muted">Pawsome Adventures</h1>

                                        <p>
                                            Sometimes we just need to get away, and sometimes your pets do too! We offer adventures spanning from trips to the dog park, to off-leash parks at the beach,  to dog friendly hiking trails around the bay. Feel free to join us on these trips, or we can always accompany you on your dog adventures if your hands are full!
                                            Rates: Starting at $40 per trip

                                        </p>

                                        <h6>Rates: Starting at $40 per trip</h6>


                                        <div className='btn-container'>
                                            <a className='btn btn-outline-primary' href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                   </div>
               {/*</ThemeProvider>*/}



               {/*MEET THE CREW*/}
               <ThemeProvider theme={meetTheCrewBanner}>
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
               <ThemeProvider theme={galleryTheme}>
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
                   <ContactForm/>

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
                               <td className='pl-2 pr-2 pt-3 '>
                                   <textarea className='w-100 h-auto ' rows='10' placeholder='comments'/>
                               </td>
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