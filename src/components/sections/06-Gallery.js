import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components';
import {SectionContainer, TextBox} from '../.././assets/js/styled-components/00-MainContainerStyle';
import {masonryGalleryStyle } from '../.././assets/js/styled-components/masonryGalleryStyle'
import {galleryTheme} from "../../assets/js/styled-components/Themes";

class GallerySection extends Component{
    constructor(props){
        super(props);
        this.state={
            col1: [], col2: [], col3: [], col4: [],
        };

        this.mapGalleryContent= this.mapGalleryContent.bind(this);
    }
    componentWillMount(){
        this.mapGalleryContent();
    }

    mapGalleryContent() {
        let {galleryContent} = this.props;

        let mappedImageArray = galleryContent.map((content, index) => {
            let images =[];
            let image =
                <figure className='m-0' key={index}>
                    <img id={index}  className='galleryThumb' onClick={this.props.handleImgClick} src={content.src}
                    />
                </figure>;

                 images.push(image);
                return images
        });
        //Place Sort Images into Columns
        let col1 = [], col2 = [], col3 = [], col4 = [];

        let imageCount = mappedImageArray.length;
        let columns = 4;
        let imgPerCol = imageCount/ columns;

        col1.push(mappedImageArray.splice(0, imgPerCol));
        col2.push(mappedImageArray.splice(0, imgPerCol));
        col3.push(mappedImageArray.splice(0, imgPerCol));
        col4.push(mappedImageArray.splice(0, imgPerCol));

        //Assign Cols to component State
        this.setState({
            col1 : col1, col2 : col2, col3 : col3, col4 : col4
        })
    }

    render(){
        let {Title, MasonryRow, MasonryCol} = masonryGalleryStyle;
        console.log(this.props, 'FINAL GALLERY');
        return(
            <React.Fragment>
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

                <div className='masonry-gallery-wrapper '>
                    <MasonryRow>
                        <MasonryCol>{this.state.col1}</MasonryCol>
                        <MasonryCol>{this.state.col2}</MasonryCol>
                        <MasonryCol>{this.state.col3}</MasonryCol>
                        <MasonryCol>{this.state.col4}</MasonryCol>
                    </MasonryRow>
                </div>
            </React.Fragment>
        )
    }
}

export default GallerySection