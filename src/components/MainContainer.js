import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';

import {AppMainContainer, Footer} from '../assets/js/styled-components/00-MainContainerStyle'
import {SectionTile,SectionTextWrapper} from '.././assets/js/styled-components/serviceStyle'

import {HeroBanner, HeroParallaxBg} from '../assets/js/styled-components/01-HeroParallaxStyled'
import HeaderNavigation from './layout/nav/HeaderNavigation'

import AboutUsSection from './sections/01-AboutUsSection';
import ServicesWeProvideSection from './sections/02-ServicesWeProvideSection';
import WhyChooseSection from './sections/03-WhyChooseSection';
import OurPricingPlan from './sections/04-OurPricingPlan';
import MeetTheCrew from './sections/05-MeetTheCrew';
import GallerySection from './sections/06-Gallery';
import ContactSection from './sections/07-ContactSection'
import NavModal from './layout/nav/NavModal'
import MasonryModal from './gallery-sub/MasonryModal'

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
            galleryContent: [],

        };

        this.handleOpenNavModal = this.handleOpenNavModal.bind(this);
        this.openNavModal = this.openNavModal.bind(this)

        this.handleCloseNavModal = this.handleCloseNavModal.bind(this);
        this.closeNavModal = this.closeNavModal.bind(this)
        this.showModal = this.showModal.bind(this)
        this.handleImgClick = this.handleImgClick.bind(this)

    }

    handleImgClick(event, imgId){
        console.log( event.target.id, 'Is there an EVENT?')
        imgId = event.target.id

        this.showModal(imgId)
    }

    showModal( imgId){
        // imgID needs to get stored in this.state
        let modal = document.getElementById('myModal');
        let img = document.getElementById(`${imgId}`);
        let modalImg = document.getElementById("img01");
        let captionText = document.getElementById("caption");
        let span = document.getElementsByClassName("close")[0];

        let {gallery} = this.props
        // console.log(gallery[0].src, '1st test');

        let currentModalImage = gallery[`${imgId}`].src

        {/*  =====   Renders Modal =====   */}
        modal.style.display= 'block';
        modalImg.src = currentModalImage
        // modalImg.src = this.state.showModalPic[0].src
        captionText.innerHTML = 'Till All Are One'

        span.onclick = ()=>{
            modal.style.display = "none";
        }

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
        console.log(this.props.mainReducer, 'SEND TO COMPS');
        let {ourPricingContent, meetTheCrewContent, gallery} = this.props.mainReducer;

        this.setState({
            ourPricingContent: ourPricingContent,
            meetTheCrewContent: meetTheCrewContent,
            galleryContent: gallery

        });

        //INITIALIZE
        let {toggleNavModal} = this.props.mainReducer
        console.log(toggleNavModal, 'PLEASE BE A STRING');
        this.setState({
            toggleNavModal: toggleNavModal
        });


    }

    render(){

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
                    <GallerySection galleryContent={this.state.galleryContent} handleImgClick={(imgId)=>this.handleImgClick(imgId)}/>

                    {/*CONTACT SECTION*/}
                    <ContactSection/>

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