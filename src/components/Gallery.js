import React, {Component} from 'react';
import HeaderNavigation from './layout/nav/HeaderNavigation'
import styled from 'styled-components'
import galleryStyles from "../assets/js/styled-components/masonryGalleryStyle"

import MasonryGallery from './gallery-sub/MasonryGallery'


class Gallery extends Component{
    constructor(props){
        super(props);

        this.state={
            masonryGallery: [],
        }

        this.handleImgClick= this.handleImgClick.bind(this)

    }
    handleImgClick(ref){
        console.log(ref.target.id, 'HOPEFULLY THIS WORKS');
    }

    componentWillMount(){

      let galleryPics =   this.props.gallery.map((img,index)=>{

          let thumbStyle={
              'marginTop' : '8px',
              'verticalAlign' : 'middle',
              'width' : '100%'
          }

          let pics =[];
          let pic =
              <figure className='m-0' key={index}>
                  <img id={index}  ref={(ref)=>{index =ref}} onClick={(ref=index)=>{this.handleImgClick(ref)}} src={img.src} style={thumbStyle}/>
              </figure>
          pics.push(pic)
          return pics
      });

        this.setState({
            masonryGallery: galleryPics
        })
    }

    render(){

        console.log(this.props, 'REAL Gallery');

        return(
            <main className="app-wrapper">

                <HeaderNavigation/>

                {/*BANNER*/}
                <section className="app-section-sidekick app-hero-parallax bg-landing">
                    <h1>Gallery</h1>
                </section>

                <section className="app-section-sidekick app-static">
                    <h1>Boring</h1>


                </section>

                <section className="app-section-sidekick sidekick-parallax bg2">
                    <h1>SO FWUFFY AWWW</h1>
                </section>

                <MasonryGallery masonryGallery={this.state.masonryGallery} />

            </main>
        )
    }
}

export default Gallery