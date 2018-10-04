import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components';
import {servicesTheme} from "../../assets/js/styled-components/Themes";
import {SectionContainer, TextBox} from '../.././assets/js/styled-components/00-MainContainerStyle';
import {ServiceTilesContainer, ServiceTilesWrapper, ServiceTile} from '../.././assets/js/styled-components/02-ServicesStyled'
import {Grid} from '../.././assets/js/styled-components/hoverEffectsStyled'

class ServicesWeProvideSection extends Component{

    constructor(props){
        super(props);
        this.state={
            tileContent: [
                {img: '../.././assets/images/servicesImg.jpg', title: 'Overnight Care ', h2: 'Drop ins &', span: 'Overnight Care', text: 'Text about Overnight'},
                {img: '../.././assets/images/serviceImg2.jpg', title: 'Medical Needs ', h2: 'Dietary &', span: 'Medical Needs', text: 'Text about Dietary Needs'},
                {img: '../.././assets/images/serviceImg4.jpg', title: 'Exercise', h2: 'Daily ', span: 'Exercise', text: 'Text about Exercise'},
                {img: '../.././assets/images/serviceImg3.jpg', title: 'Adventures', h2: 'Field Trip ', span: 'Adventures', text: 'Text about Adventures'},
            ],
            tiles: []
        }
    }

    componentWillMount(){
       let {tileContent} = this.state;
       let mappedTiles = tileContent.map((content, index)=>{
           let tiles=[];

           let tile=
               <figure key={index} className="effect-sarah"><img src={content.img} alt="img1"/>
               <figcaption>
                       <h2>{content.h2}  <span>{content.span} </span></h2>
                       <p>{content.text}</p>
                       <a href="#">View more</a>
                   </figcaption>
               </figure>;
            tiles.push(tile);
            return tiles
       });

        this.setState({tiles: mappedTiles})
    }

    render(){
        return(
            //  services-we-provide:  BANNER
            <React.Fragment>
                <ThemeProvider theme={servicesTheme}>
                    <SectionContainer className='Service-Container'>
                        <TextBox className='service-text-box'>
                            <h1>Services We Provide</h1>
                            <p> grew up on the crime side, the New York Times side
                                Staying alive was no jive
                                Had second hands, moms bounced on old men
                                So then we moved to Shaolin land</p>
                        </TextBox>
                    </SectionContainer>
                </ThemeProvider>

                    {/*services-we-provide: TILES*/}
                <ServiceTilesContainer>
                    <ServiceTilesWrapper>
                        <ServiceTile><Grid>{this.state.tiles[0]}</Grid></ServiceTile>
                        <ServiceTile><Grid>{this.state.tiles[1]}</Grid></ServiceTile>
                        <ServiceTile><Grid>{this.state.tiles[2]}</Grid></ServiceTile>
                        <ServiceTile><Grid>{this.state.tiles[3]}</Grid></ServiceTile>
                    </ServiceTilesWrapper>
                </ServiceTilesContainer>
            </React.Fragment>
        )
    }
};
export  default ServicesWeProvideSection

