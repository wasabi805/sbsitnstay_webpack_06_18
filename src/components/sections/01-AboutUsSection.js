import React from 'react';
import {ThemeProvider} from 'styled-components';
import {aboutUsTheme} from '../.././assets/js/styled-components/Themes';
import {SectionContainer, ImageBox, TextBox} from '../.././assets/js/styled-components/00-MainContainerStyle';


const AboutUsSection =()=>{
    return(
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
    )
};

export default AboutUsSection