import React, {Component} from 'react';

import {ThemeProvider} from 'styled-components';
import {lightThemeBanner} from "../../assets/js/styled-components/Themes";
import {SectionContainer, TextBox} from '../.././assets/js/styled-components/00-MainContainerStyle';
import {PricingContainer, CardWrapper} from '../.././assets/js/styled-components/04-OurPricingPlanStyled'
import {FaContainer} from '../.././assets/js/styled-components/02-ServicesStyled'

class OurPricingPlan extends Component{
    constructor(props){
        super(props);
        this.state={
            cardData: '',
        };
        this.mapSectionContent = this.mapSectionContent.bind(this);
    }

    componentWillMount(){
        this.mapSectionContent();
    }

    mapSectionContent(){
        let {ourPricingContent} = this.props;
        let mappedCards = ourPricingContent.map((content, index)=>{
            let cards=[];
            let card =
                <div key={index}>
                    {/*Badge*/}
                    <FaContainer>
                        <li><a href='#'><i className={content.badge} aria-hidden="true"></i></a></li>
                    </FaContainer>

                    {/*Card*/}
                    <div className="card-body">
                        <h4 className="card-title">{content.title}</h4>
                        <h1 className="card-subtitle text-muted">{content.price}<sub>{content.rate}</sub></h1>
                        <p>{content.text}</p>
                        <div className='btn-container '>
                            <a className='button' href="#">Read More</a>
                        </div>
                    </div>
                </div>;
            cards.push(card);
            return cards;
        });
        this.setState({
            cardData: mappedCards
        })
    }
    render(){
        return(
            <React.Fragment>
                {/*Our Pricing Plan : BANNER*/}
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


                {/*Our Pricing Plan : CARDS*/}
                <PricingContainer className='PricingContainer p-5'>
                    <div className='row '>
                        {/*Standard Care Card*/}
                        <div className='col'>
                            <CardWrapper className="pricing-card ">
                                {this.state.cardData[0]}
                            </CardWrapper>
                        </div>

                        {/*Deluxe Card*/}
                        <div className='col'>
                            <CardWrapper className='card'>
                                {this.state.cardData[1]}
                            </CardWrapper>
                        </div>

                        {/*VIP Care Card*/}
                        <div className='col'>
                            <CardWrapper className="card pricing-card">
                                {this.state.cardData[2]}
                            </CardWrapper>
                        </div>
                    </div>
                </PricingContainer>


            </React.Fragment>
        )
    }
}

export default OurPricingPlan