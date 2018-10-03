import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';

import {AppMainContainer,  SectionContainer, ImageBox, TextBox, AppBodyWrapper, ProfileImageWrapper, SecondaryParallaxBanner,Footer} from '../assets/js/styled-components/00-MainContainerStyle'
import {FormContainer,FormCol1, FormCol2, FormTextArea} from '../assets/js/styled-components/00-MainContainerStyle'
import {SectionTile,SectionTextWrapper} from '.././assets/js/styled-components/serviceStyle'

import {HeroBanner, HeroParallaxBg} from '../assets/js/styled-components/01-HeroParallaxStyled'
import {ServiceCards, ServiceCardText, ServiceTilesContainer, ServiceTilesWrapper, ServiceTile, FaContainer} from '../assets/js/styled-components/02-ServicesStyled'
import {PricingContainer, CardWrapper} from '../assets/js/styled-components/04-OurPricingPlanStyled'
import {Grid} from '../assets/js/styled-components/hoverEffectsStyled'

import MasonryGallery from './gallery-sub/MasonryGallery'
import MasonryModal from './gallery-sub/MasonryModal'


import styled from 'styled-components'
import {ThemeProvider} from 'styled-components';
import theme from 'styled-theme';

import HeaderNavigation from './layout/nav/HeaderNavigation'
import NavModal from './layout/nav/NavModal'



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

            masonryGallery: '',

            showNavModal: 'none',

            showImgModal: '',


            heroBannerImg : '',
            landingBodyVisible: false,
            aboutBodyVisible: false,

            redirectHome: false,
            redirectAbout: false,

            startAnimation: false,
            showValidationButton: false,


        };
        this.handleClick = this.handleClick.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);

        this.handleOpenNavModal = this.handleOpenNavModal.bind(this);
        this.openNavModal = this.openNavModal.bind(this)

        this.handleCloseNavModal = this.handleCloseNavModal.bind(this);
        this.closeNavModal = this.closeNavModal.bind(this)

        this.showModal = this.showModal.bind(this)

        this.handleImgClick = this.handleImgClick.bind(this)

    }

    handleImgClick(ref){
        console.log(ref.target.id, 'HOPEFULLY THIS WORKS');

        let imgID = ref.target.id;
        this.showModal(imgID)

    }


    showModal( imgID){

        // imgID needs to get stored in this.state


        let modal = document.getElementById('myModal');
        let img = document.getElementById(`${imgID}`);
        let modalImg = document.getElementById("img01");
        let captionText = document.getElementById("caption");
        let span = document.getElementsByClassName("close")[0];

        let {gallery} = this.props
        console.log(gallery[0].src, '1st test');

        let currentModalImage = gallery[`${imgID}`].src


        {/*  =====   Renders Modal =====   */}
        modal.style.display= 'block';
        modalImg.src = currentModalImage
        // modalImg.src = this.state.showModalPic[0].src
        captionText.innerHTML = 'Till All Are One'

        span.onclick = ()=>{
            modal.style.display = "none";
        }

        console.log(modal, 'modal id');
        console.log(img, 'img: the thumbnail');
        console.log(imgID, ' IMGID');
    }



    openNavModal(){
        this.setState({
            showNavModal: 'block'
        })
        console.log('openNav clicked ===> ', this.state.showNavModal);
    }

    closeNavModal(){
        this.setState({
            showNavModal: 'none'
        })
        console.log('closeModal() ran');
    }


    handleCloseNavModal(){
        this.closeNavModal()
    }

    handleOpenNavModal(){
        this.openNavModal()

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

        {/*  =====   Map images to send to Masonry Gallery Comp =====   */}
        let galleryPics =   this.props.gallery.map((img,index)=>{
            let pics =[];
            let pic =
                <figure className='m-0' key={index}>
                    <img id={index}  className='galleryThumb' ref={(ref)=>{index =ref}} onClick={(ref=index)=>{this.handleImgClick(ref)}} src={img.src} />
                </figure>

            pics.push(pic);
            return pics
        });

        {/*  =====   Extract img src's to pass to modal when called =====   */}

        this.setState({
            masonryGallery: galleryPics, //set mapped thumbs to state
        })




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

        const whyChooseTheme={

                bgColor: 'white',
                textAlignment: 'left',
                paddingLeft: '10em',
                paddingRight: '10em',

        };

        const servicesTheme ={
            bgColor:  '#f2f2f2',
            top: '6em',
            textAlignment: 'center',
            width: '100%',
            margin: '0 auto',
            padding: '1em 10em',
        };

        const darkThemeBanner ={
            bgColor:  '#0e0905',
            color: '#e5dcdc',

            border:'2px solid #0e0905',
            borderRadius: '10px',


            textAlignment: 'center',
            width: '75%',
            margin: '0 auto',
            padding: '1em',
        };

        const lightThemeBanner ={
            bgColor:  '#f5eee8',
            color: '#292b2c',

            border:'1px solid #d4cccc',
            borderRadius: '10px',

            textAlignment: 'center',
            width: '75%',
            margin: '0 auto',
            padding: '1em',
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

        console.log( this.props, 'TRANSFER HERE');


        return(
            <React.Fragment>
                <HeaderNavigation handleRedirect={this.handleRedirect} openNavModal={this.handleOpenNavModal} closeNavModal={this.handleCloseNavModal}  />
               <AppMainContainer className='app-main-container'>

                   {/*/!*  =====   HeroBannerParallax =====   *!/*/}

                   <HeroBanner className='hero-banner'/>
                   <HeroParallaxBg className='hero-parallax-bg'/>

                   {/*/!*  =====   AboutUs =====   *!/*/}
                   <ThemeProvider theme={aboutUsTheme}>
                       <SectionContainer className='AboutUsContainer'>
                           <div className='row p-3'>
                               <div className='col'>
                                   <ImageBox className='about-us-image-box'>
                                       <img src="https://res.cloudinary.com/ocampot/image/upload/v1535670369/erica-magugliani-446666-unsplash.jpg"/>
                                   </ImageBox>
                               </div>

                               <div className='col'>
                                   <TextBox className= 'about-text-box'>
                                       <h1 >About Us </h1>
                                       <p>South Bay Sit N’ Stay is a unique business offering a wide range of services aimed at the health and happiness of your pets.
                                           From overnight stays in our home to adventures to the beach to stop-in visits, we tailor each of our services
                                           to your pet so they come home with wagging tails and a big smile for you!
                                       </p>
                                   </TextBox>
                               </div>
                           </div>

                       </SectionContainer>
                   </ThemeProvider>


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


                    {/*NEW TILES*/}
                   <ServiceTilesContainer>
                       <ServiceTilesWrapper>
                           <ServiceTile>
                               <Grid>
                                   <figure className="effect-sarah">
                                       <img src=".././assets/images/servicesImg.jpg" alt="img13"/>
                                       <figcaption>
                                           <h2>Drop in &  <span> Overnight Care</span></h2>
                                           <p>Sarah likes to watch clouds. She's quite depressed.</p>
                                           <a href="#">View more</a>
                                       </figcaption>
                                   </figure>


                               </Grid>
                           </ServiceTile>

                           <ServiceTile>
                               <Grid>
                                   <figure className="effect-sarah">
                                       <img src=".././assets/images/serviceImg2.jpg" alt="img13"/>
                                       <figcaption>
                                           <h2>Dietary &  <span> Medical Needs</span></h2>
                                           <p>Sarah likes to watch clouds. She's quite depressed.</p>
                                           <a href="#">View more</a>
                                       </figcaption>
                                   </figure>


                               </Grid>
                           </ServiceTile>

                           <ServiceTile>
                               <Grid>
                                   <figure className="effect-sarah">
                                       <img src=".././assets/images/serviceImg4.jpg" alt="img13"/>
                                       <figcaption>
                                           <h2>Daily <span>Excercise</span></h2>
                                           <p>Sarah likes to watch clouds. She's quite depressed.</p>
                                           <a href="#">View more</a>
                                       </figcaption>
                                   </figure>


                               </Grid>
                           </ServiceTile>

                           <ServiceTile>
                               <Grid>
                                   {/**/}
                                   <figure className="effect-sarah">
                                       <img src=".././assets/images/serviceImg3.jpg" alt="img13"/>
                                       <figcaption>
                                           <h2>Field Trip  <span>Adventures </span></h2>
                                           <p>Sarah likes to watch clouds. She's quite depressed.</p>
                                           <a href="#">View more</a>
                                       </figcaption>
                                   </figure>
                               </Grid>
                           </ServiceTile>
                       </ServiceTilesWrapper>
                   </ServiceTilesContainer>



                   {/*/!*  =====   Why Choose Sb Sit N' Stay =====   *!/*/}

                   {/*Banner*/}
                   <ThemeProvider theme={darkThemeBanner}>
                       <SectionContainer className='why-choose-banner mb-4'>
                           <TextBox className='why-choose-text'>
                               <h1 >Why Choose South Bay Sit N Stay? </h1>
                               <p>South Bay Sit N’ Stay is a unique business offering a wide range of services aimed at the health and happiness of your pets.
                                   From overnight stays in our home to adventures to the beach to stop-in visits, we tailor each of our services
                                   to your pet so they come home with wagging tails and a big smile for you!
                               </p>
                           </TextBox>
                       </SectionContainer>
                   </ThemeProvider>

                   {/*Why Choose SECTION*/}
                   <ThemeProvider theme={aboutUsTheme}>
                       <SectionContainer className='WhyChoose-Container pb-5'>
                           <TextBox className='why-choose-text-box'>
                               <ul>
                                   <h2>Qualifications for sbsitnstay</h2>
                                   <li>drop down 1</li>
                                   <li>drop down 2</li>
                                   <li>drop down 3</li>
                                   <li>drop down 4</li>

                               </ul>
                           </TextBox>

                           <ImageBox className='why-choose-img-box'>
                               <img src="https://res.cloudinary.com/ocampot/image/upload/v1532397239/sbsitnstay/dog-leash-01.jpg"/>
                           </ImageBox>
                       </SectionContainer>
                   </ThemeProvider>


                   {/*=====   Our Pricing Plan =====  */}
                   <ThemeProvider theme={lightThemeBanner}>
                       <SectionContainer className='pricing-plan-banner p-5'>
                           <TextBox className='why-choose-text'>
                               <h1 >Our Pricing Plan </h1>
                               <p>South Bay Sit N’ Stay is a unique business offering a wide range of services aimed at the health and happiness of your pets.
                                   From overnight stays in our home to adventures to the beach to stop-in visits, we tailor each of our services
                                   to your pet so they come home with wagging tails and a big smile for you!
                               </p>
                           </TextBox>
                       </SectionContainer>
                   </ThemeProvider>

                    <PricingContainer className='PricingContainer p-5'>
                        <div className='row '>

                            {/*Standard Care*/}
                            <div className='col'>
                                <CardWrapper className="pricing-card ">

                                    <FaContainer>
                                        {/*<i className='fa fa-shoe-prints fa-8x'></i>*/}
                                        <li onClick={this.handleClick}>
                                            <a href='#'><i className='fa fa-shoe-prints ' aria-hidden="true"></i></a>
                                        </li>
                                    </FaContainer>



                                    <div className="card-body ">

                                        <h4 className="card-title">Standard Care</h4>
                                        <h1 className="card-subtitle text-muted">Stop in Visits</h1>
                                        <h6>Rate: $25 Per </h6>

                                        <p>This option is ideal for the homebody pet. We come to you and take care of your pet overnight in the comfort of their home.  Also offered for overnight stays: watering your indoor and outdoor plants, picking up your mail,
                                            accepting deliveries, and more!
                                        </p>


                                        <div className='btn-container '>
                                            <a className='button' href="#">Read More</a>
                                        </div>
                                    </div>
                                </CardWrapper>
                            </div>

                            {/*Overnight Care*/}
                            <div className='col'>
                                <CardWrapper className='card'>

                                    <FaContainer>
                                        <li><a href='#'><i className='fa fa-bone ' aria-hidden="true"></i></a></li>
                                    </FaContainer>


                                        <div className="card-body">
                                            <h4 className="card-title">Overnight Care</h4>
                                            <h1 className="card-subtitle text-muted">$40 <sub>/ per night</sub></h1>


                                            <p>Working late? Date night? We’ve got you covered with an hour stop in visit. We can feed, play, and spend quality time with your pet while you are out.
                                                Per visit can to multiple visits a day.
                                            </p>
                                            <h6>Rate: $40 Per night
                                            </h6>

                                            <div className='btn-container '>
                                                <a className='button' href="#">Read More</a>
                                            </div>

                                        </div>
                                </CardWrapper>
                            </div>

                            {/*VIP Care*/}
                            <div className='col'>
                                <CardWrapper className="card pricing-card">

                                    <FaContainer>
                                        <li><a href='#'><i className='fa fa-tree ' aria-hidden="true"></i></a></li>
                                    </FaContainer>


                                    <div className="card-body">
                                        <h4 className="card-title">VIP Care</h4>
                                        <h1 className="card-subtitle text-muted">Pawsome Adventures</h1>
                                        <p>
                                            Sometimes we just need to get away, and sometimes your pets do too! We offer adventures spanning from trips to the dog park, to off-leash parks at the beach,  to dog friendly hiking trails around the bay. Feel free to join us on these trips, or we can always accompany you on your dog adventures if your hands are full!
                                            Rates: Starting at $40 per trip

                                        </p>

                                        <h6>Rates: Starting at $40 per trip</h6>


                                        <div className='btn-container '>
                                            <a className='button' href="#">Read More</a>
                                        </div>
                                    </div>
                                </CardWrapper>
                            </div>
                        </div>
                    </PricingContainer>




                   {/*MEET THE CREW*/}
                   <ThemeProvider theme={meetTheCrewBanner}>
                       <SectionContainer className='test-yo'>

                           <TextBox>
                               <h1>Meet the Crew</h1>
                               <p> grew up on the crime side, the New York Times side
                                   Staying alive was no jive
                                   Had second hands, moms bounced on old men
                                   So then we moved to Shaolin land</p>
                           </TextBox>

                       </SectionContainer>
                   </ThemeProvider>

                   {/*KAYLA*/}
                   <SectionContainer >

                       {/*change this one*/}

                           <Grid>
                               <div className='figure-cont'>
                                   <figure className="effect-chico">
                                       <img src="https://res.cloudinary.com/ocampot/image/upload/v1533777073/kayla-portrait.jpg" alt="img15"/>
                                       <figcaption>

                                           <p>Kayla started South Bay Sit N’ Stay in 2013 after receiving her certifications in dog training, pet massage, pet nutrition, and pet boarding through Animal Behavior College. She has also spent over 100 hours working with dogs at the Humane Society- Silicon Valley as a volunteer. She loves taking her own dogs out for adventures to the beach and hiking throughout the South Bay.
                                           </p>
                                           <h2>Meet <span>Kayla</span></h2>
                                           <a href="#">View more</a>
                                       </figcaption>
                                   </figure>
                               </div>

                           </Grid>

                           <Grid>
                               <div className='figure-cont'>
                                   <figure className="effect-chico">
                                       <img src="https://res.cloudinary.com/ocampot/image/upload/v1532396286/sbsitnstay/catherine.jpg" alt="img15"/>
                                       <figcaption>

                                           <p>Catherine joined the South Bay Sit N’ Stay team after moving to California in 2016. Her volunteer work at the Humane Society and dog sitting in her home state of Wisconsin has developed her into an incredibly patient caregiver. It is a passion of hers to work with animals and provide them with the love and attention they need, especially when they are away from their owners.</p>
                                           <h2>Meet <span>Catherine</span></h2>
                                           <a href="#">View more</a>
                                       </figcaption>
                                   </figure>
                               </div>
                           </Grid>

                           <Grid>
                               <div className='figure-cont'>
                                   <figure className="effect-chico ">
                                       <img src=".././assets/images/tina.jpeg" alt="img15"/>
                                       <figcaption>

                                           <p>Yuko is the newest member of the South Bay Sit N’ Stay team. She specializes in cat care and is a proud cat mom of 5 herself. She has worked with cats for about 10 years and has completed a cat training course through Animal Behavior College. When she’s not snuggling with her kitties, Yuko enjoys exploring all the amazing food and adventures the bay has to offer. </p>
                                           <h2>Meet <span>Tina</span></h2>
                                           <a href="#">View more</a>
                                       </figcaption>
                                   </figure>
                               </div>
                           </Grid>



                   </SectionContainer>


                   {/*Gallery*/}
                   <ThemeProvider theme={galleryTheme}>
                       <SectionContainer>

                           <TextBox>
                               <h1>Check out the gallery of our latest Clients!</h1>
                               <p> grew up on the crime side, the New York Times side
                                   Staying alive was no jive
                                   Had second hands, moms bounced on old men
                                   So then we moved to Shaolin land</p>
                           </TextBox>

                       </SectionContainer>
                   </ThemeProvider>

                   {/*Parallax 2*/}
                   {/*<Gallery gallery={this.props.gallery}/>*/}

                   <MasonryGallery masonryGallery={this.state.masonryGallery}/>



                   <ThemeProvider theme={aboutUsTheme}>
                       <SectionContainer>

                           <TextBox>
                               <h1>We'd love to hear from you!</h1>
                               <p> grew up on the crime side, the New York Times side
                                   Staying alive was no jive
                                   Had second hands, moms bounced on old men
                                   So then we moved to Shaolin land</p>
                           </TextBox>

                       </SectionContainer>
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

               </AppMainContainer>


                <NavModal closeNavModal={this.handleCloseNavModal} toggleModal={this.state.showNavModal}/>
                <MasonryModal modal={this.showModal} />

            </React.Fragment>

        )

    }
}

export default MainContainer