import React, {Component} from 'react';
import {mainContainerStyle, mainContainerStyles} from '../assets/js/styled-components/mainContainerStyle';
import {serviceStyle} from '../assets/js/styled-components/serviceStyle'
import {CSSTransition} from 'react-transition-group';



import HeaderNavigation from './layout/nav/HeaderNavigation'



class Services extends Component{
    constructor(props){
        super(props);
        this.state={
            showInitialText: true,
            showNewText: false,
        };
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(){
        console.log('handleClickRan');
        this.setState({
            showInitialText: !this.state.showInitialText,
            showNewText: !this.state.showNewText,
        })
    }


    render(){

        console.log(this.state.showInitialText, 'WUTANG');
        console.log(this.state.showNewText, 'Forever');

        let {AppWrapper, AppHeroBanner, AppHeroParallax,
            AppArticleOne, AppArticleContentContainer, AppArticleTextBox,
            AppSecondaryParallaxContainer, AppSecondaryParallaxBg, AppBodyWrapper} = mainContainerStyles;
        let {SectionContainer, SectionTileImg, SectionTile, SectionTextWrapper, SectionText} = serviceStyle


        const classNames = require('classnames');
        let ServiceStyle = classNames('app-section2','app-parallax', 'bgServices1')
        return(
            <AppWrapper>
                {/*  =====   HeroBannerParallax =====   */}
                <HeaderNavigation/>
                <AppHeroBanner>
                    <h1>Services</h1>
                </AppHeroBanner>
                <AppHeroParallax/>

                {/*  =====   ArticleOne =====   */}
                <AppArticleOne>
                    <AppArticleContentContainer>
                        <AppArticleTextBox>
                            <h1>Check out Our buds</h1>
                            <p>It was all a dream, I used to read Word Up! magazine
                                Salt-n-Pepa and Heavy D up in the limousine
                                Hangin' pictures on my wall
                                Every Saturday Rap Attack, Mr. Magic, Marley Marl</p>
                        </AppArticleTextBox>
                        <img src="https://res.cloudinary.com/ocampot/image/upload/v1535670369/erica-magugliani-446666-unsplash.jpg"/>
                    </AppArticleContentContainer>
                </AppArticleOne>

                {/*  =====   SecondaryParallax BG =====   */}
                <AppSecondaryParallaxContainer>
                    <h1>Stuff Before the SERVICES</h1>
                    <AppSecondaryParallaxBg/>
                </AppSecondaryParallaxContainer>

                <AppBodyWrapper>
                   <SectionContainer>
                        <SectionTileImg>
                            <img className='service-img'  src="https://res.cloudinary.com/ocampot/image/upload/v1535877196/medusa-transparent.png"/>
                            <div className='btn btn-primary' onClick={this.handleClick}>Set in to True</div>
                        </SectionTileImg>



                       <SectionTile>
                           {/*INITIAL*/}
                           <CSSTransition
                               timeout={1000} in={this.state.showInitialText} classNames="sectionTextWrapper" unmountOnExit>
                               <SectionTextWrapper>
                                    <h1 className='m-0'>I'm the INITIAL</h1>
                               </SectionTextWrapper>
                           </CSSTransition>
                           {/*Incoming*/}
                           <CSSTransition
                               timeout={1000} in={this.state.showNewText} classNames="sectionTextWrapper" unmountOnExit>
                                <SectionTextWrapper>
                                    <h1 className='m-0'>I'm the DELTA</h1>
                                </SectionTextWrapper>
                           </CSSTransition>
                       </SectionTile>



                   </SectionContainer>
                </AppBodyWrapper>




                {/*DON NOT DELETE BELOW*/}
                {/*Body*/}
                {/*<div className='body' >*/}
                    {/*<div className='card-landing bg-primary mb-5' onClick={this.handleClickAbout}>*/}
                        {/*<div className='card-text-box-left'>*/}
                            {/*<h1>Walking</h1>*/}
                            {/*<p>MORE TEXT TO COME</p>*/}
                        {/*</div>*/}

                        {/*<div className='about-profile-pic-right'>*/}
                            {/*<img src="https://res.cloudinary.com/ocampot/image/upload/w_400,h_400/leonides-ruvalcabar-738807-unsplash.jpg"/>*/}
                        {/*</div>*/}


                        {/*<img src="https://res.cloudinary.com/ocampot/image/upload/v1536108371/joe-woods-739738-unsplash.jpg"/>*/}
                    {/*</div>*/}

                    {/*<div className='card-landing bg-primary mb-5' onClick={this.handleClickServices}>*/}
                        {/*<div className='card-text-box-right'>*/}
                            {/*<h1>Feeding</h1>*/}
                            {/*<p>MORE TEXT TO COME</p>*/}
                        {/*</div>*/}

                        {/*<div className='about-profile-pic-left'>*/}
                            {/*<img src="https://res.cloudinary.com/ocampot/image/upload/w_400,h_400/sbsitnstay/pups_eating.jpg"/>*/}
                        {/*</div>*/}

                        {/*<img src="https://res.cloudinary.com/ocampot/image/upload/v1536108371/joe-woods-739738-unsplash.jpg"/>*/}
                    {/*</div>*/}

                    {/*<div className='card-landing bg-primary mb-5' onClick={this.handleClickGallery}>*/}
                        {/*<div className='card-text-box-left'>*/}
                            {/*<h1>Drop ins</h1>*/}
                            {/*<p>MORE TEXT TO COME</p>*/}

                        {/*</div>*/}

                        {/*<div className='about-profile-pic-right'>*/}
                            {/*<img src="https://res.cloudinary.com/ocampot/image/upload/w_400,h_400/pug-life-sarandy-westfall-603305-unsplash.jpg"/>*/}
                        {/*</div>*/}

                        {/*<img src="https://res.cloudinary.com/ocampot/image/upload/v1536108371/joe-woods-739738-unsplash.jpg"/>*/}
                    {/*</div>*/}


                    {/*<div className='card-landing bg-primary mb-5' onClick={this.handleClickServices}>*/}
                        {/*<div className='card-text-box-right'>*/}
                            {/*<h1>Overnights</h1>*/}
                            {/*<p>MORE TEXT TO COME</p>*/}
                        {/*</div>*/}

                        {/*<div className='about-profile-pic-left'>*/}
                            {/*<img src="https://res.cloudinary.com/ocampot/image/upload/w_400,h_400/tj-kolesnik-506656-dog-sleeping2-unsplash.jpg"/>*/}
                        {/*</div>*/}

                        {/*<img src="https://res.cloudinary.com/ocampot/image/upload/v1536108371/joe-woods-739738-unsplash.jpg"/>*/}
                    {/*</div>*/}

                    {/*<div className='card-landing bg-primary mb-5' onClick={this.handleClickGallery}>*/}
                        {/*<div className='card-text-box-left'>*/}
                            {/*<h1>Adevntures*/}
                            {/*</h1>*/}
                            {/*<p>MORE TEXT TO COME</p>*/}

                        {/*</div>*/}

                        {/*<div className='about-profile-pic-right'>*/}
                            {/*<img src="https://res.cloudinary.com/ocampot/image/upload/w_400,h_400/savs-511877-cropped-unsplash.jpg"/>*/}
                        {/*</div>*/}

                        {/*<img src="https://res.cloudinary.com/ocampot/image/upload/v1536108371/joe-woods-739738-unsplash.jpg"/>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </AppWrapper>
        )
    }
}

export default Services