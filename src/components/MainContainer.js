import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';

import {connect} from 'react-redux';
import {testTheMain, openNavModal, closeNavModal } from '.././actions/main-container-actions'
import {textBoxCenter, aboutUsTheme, servicesTheme, darkThemeBanner, lightThemeBanner, meetTheCrewBanner, galleryTheme } from '.././assets/js/styled-components/Themes'



import {AppMainContainer,  SectionContainer, ImageBox, TextBox, AppBodyWrapper, ProfileImageWrapper, SecondaryParallaxBanner,Footer} from '../assets/js/styled-components/00-MainContainerStyle'
import {FormContainer,FormCol1, FormCol2, FormTextArea} from '../assets/js/styled-components/00-MainContainerStyle'
import {SectionTile,SectionTextWrapper} from '.././assets/js/styled-components/serviceStyle'

import {HeroBanner, HeroParallaxBg} from '../assets/js/styled-components/01-HeroParallaxStyled'
import {ServiceCards, ServiceCardText, ServiceTilesContainer, ServiceTilesWrapper, ServiceTile, FaContainer} from '../assets/js/styled-components/02-ServicesStyled'
import {PricingContainer, CardWrapper} from '../assets/js/styled-components/04-OurPricingPlanStyled'
import {Grid} from '../assets/js/styled-components/hoverEffectsStyled'

import MasonryGallery from './gallery-sub/MasonryGallery'
import MasonryModal from './gallery-sub/MasonryModal'

import {ThemeProvider} from 'styled-components';


import HeaderNavigation from './layout/nav/HeaderNavigation'
import NavModal from './layout/nav/NavModal'

import ContactForm from './common/ContactForm'


import AboutUsSection from './sections/01-AboutUsSection';
import ServicesWeProvideSection from './sections/02-ServicesWeProvideSection';
import WhyChooseSection from './sections/03-WhyChooseSection';
import OurPricingPlan from './sections/04-OurPricingPlan';
import MeetTheCrew from './sections/05-MeetTheCrew';
import GallerySection from './sections/06-Gallery';

class MainContainer extends Component{
    constructor(props){
        super(props);
        this.state={

            toggleNavModal: this.props.mainReducer.toggleNavModal,

            masonryGallery: '',
            showNavModal: '',
            showImgModal: '',

            ourPricingContent : [],
            meetTheCrewContent: [],



        };

        this.handleOpenNavModal = this.handleOpenNavModal.bind(this);
        this.openNavModal = this.openNavModal.bind(this)

        this.handleCloseNavModal = this.handleCloseNavModal.bind(this);
        this.closeNavModal = this.closeNavModal.bind(this)
        this.showModal = this.showModal.bind(this)
        this.handleImgClick = this.handleImgClick.bind(this)

    }

    handleImgClick(ref){
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
        });
        console.log('closeModal() ran');
    }

    handleCloseNavModal(){
        this.closeNavModal()
    }

    handleOpenNavModal(){
        this.openNavModal()
    }

    componentWillMount(){
        //ROUTE props to it's component
        let {ourPricingContent, meetTheCrewContent} = this.props.mainReducer;

        this.setState({
            ourPricingContent: ourPricingContent,
            meetTheCrewContent: meetTheCrewContent,

        });

        //INITIALIZE
        let {toggleNavModal} = this.props.mainReducer
        console.log(toggleNavModal, 'PLEASE BE A STRING');
        this.setState({
            toggleNavModal: toggleNavModal
        });


        {/*  =====   Map images to send to Masonry Gallery Comp =====   */}
        let galleryPics =   this.props.gallery.map((img,index)=>{
            let pics =[];
            let pic =
                <figure className='m-0' key={index}>
                    <img id={index}  className='galleryThumb'
                         ref={(ref)=>{index =ref}} onClick={(ref=index)=>{this.handleImgClick(ref)}}
                         src={img.src}
                    />
                </figure>;

            pics.push(pic);
            return pics
        });

        {/*  =====   Extract img src's to pass to modal when called =====   */}
        this.setState({
            masonryGallery: galleryPics, //set mapped thumbs to state
        })
    }

    render(){
        console.log(this.props.mainReducer.toggleNavModal, 'REFACTORING' );
        console.log(this.state.toggleNavModal , 'DOES THIS TOGGLE?');


        console.log( this.props, 'can you see testTheMain?');

        let {handleOpenNavModal} =this.props

        return(
            <React.Fragment>
                <HeaderNavigation handleRedirect={this.handleRedirect}  handleOpenNavModal={handleOpenNavModal} openNavModal={this.handleOpenNavModal} closeNavModal={this.handleCloseNavModal}  />
                <AppMainContainer className='app-main-container'>

                    {/*/!*  =====   HeroBannerParallax =====   *!/*/}

                    <HeroBanner className='hero-banner'/>
                    <HeroParallaxBg className='hero-parallax-bg'/>
                    {/*/!*  =====   AboutUs =====   *!/*/}
                    <AboutUsSection/>
                    {/*/!*  =====   Services =====   *!/*/}
                    <ServicesWeProvideSection/>
                    {/*/!*  =====   Why Choose Sb Sit N' Stay =====   *!/*/}
                    <WhyChooseSection/>
                    {/*=====   Our Pricing Plan =====  */}
                    <OurPricingPlan ourPricingContent={this.state.ourPricingContent}/>

                    {/*=====   Meet the Crew =====  */}
                    <MeetTheCrew meetTheCrewContent={this.state.meetTheCrewContent}/>


                    {/*Gallery*/}
                    <GallerySection/>

                    <MasonryGallery masonryGallery={this.state.masonryGallery}/>





                    {/*CONTACT SECTION*/}
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



                    {/*FOOTER*/}
                    <Footer>
                        THIS IS THE FOOTER
                    </Footer>
                </AppMainContainer>

                {/*MODALS*/}
                <NavModal closeNavModal={this.handleCloseNavModal} toggleModal={this.state.showNavModal}/>
                <MasonryModal modal={this.showModal} />
            </React.Fragment>

        )

    }
}

const mapStateToProps =()=>{
    return{

    }
}

const mapDispatchToProps = (dispatch) =>{

}



export default connect(null, mapDispatchToProps) (MainContainer)