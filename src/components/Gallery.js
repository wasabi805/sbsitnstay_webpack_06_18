import React, {Component} from 'react';
import HeaderNavigation from './layout/nav/HeaderNavigation'
import styled from 'styled-components'
import galleryStyles from "../assets/js/styled-components/masonryGalleryStyle"
import {mainContainerStyles} from '.././assets/js/styled-components/mainContainerStyle'

import MasonryGallery from './gallery-sub/MasonryGallery'
import  MasonryModal from './gallery-sub/MasonryModal'

class Gallery extends Component{
    constructor(props){
        super(props);

        this.state={
            masonryGallery: [], //mapped thumb img
            showModalPic: {},
        };

        this.handleImgClick = this.handleImgClick.bind(this);
        this.showModal = this.showModal.bind(this);

    }

    showModal( imgID){

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
    }

    handleImgClick(ref){
        console.log(ref.target.id, 'HOPEFULLY THIS WORKS');

        let imgID = ref.target.id;
        this.showModal(imgID)

    }



    render(){
        let {AppWrapper, AppHeroBanner, AppHeroParallax,
            AppArticleOne, AppArticleContentContainer, AppArticleTextBox,
            AppSecondaryParallaxContainer, AppSecondaryParallaxBg} = mainContainerStyles;


        console.log(this.props, 'REAL Gallery');
        console.log(this.state.showModalPic, 'showModalPic');
        return(
            <React.Fragment>
            <AppWrapper>

                {/*  =====   HeroBannerParallax =====   */}
                <HeaderNavigation/>
                <AppHeroBanner>
                    <h1>Gallery</h1>
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
                    <h1>Stuff Before the gallery</h1>
                    <AppSecondaryParallaxBg/>
                </AppSecondaryParallaxContainer>


                {/*  =====   Gallery && Modal =====   */}
                <MasonryGallery masonryGallery={this.state.masonryGallery}/>


            </AppWrapper>
                {/*Outside of wrapper so modal appears above ALL sections*/}
                <MasonryModal showModal={this.showModal} gallery={this.props.gallery} />

            </React.Fragment>
        )
    }
}

export default Gallery