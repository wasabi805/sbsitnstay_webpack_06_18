import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components';
import {SectionContainer, TextBox, ImageBox} from '../.././assets/js/styled-components/00-MainContainerStyle';
import {aboutUsTheme, darkThemeBanner, servicesTheme} from "../../assets/js/styled-components/Themes";


class WhyChooseSection extends Component{
    render(){
        return(
            <React.Fragment>
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
            </React.Fragment>
        )
    }
}

export default WhyChooseSection