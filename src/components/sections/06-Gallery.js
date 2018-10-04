import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components';
import {SectionContainer, TextBox} from '../.././assets/js/styled-components/00-MainContainerStyle';
import {galleryTheme} from "../../assets/js/styled-components/Themes";

class GallerySection extends Component{
    render(){
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
            </React.Fragment>
        )
    }
}

export default GallerySection