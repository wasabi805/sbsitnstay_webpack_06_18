import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components';
import {SectionContainer, TextBox} from '../.././assets/js/styled-components/00-MainContainerStyle';
import {meetTheCrewBanner} from "../../assets/js/styled-components/Themes";
import {Grid} from '../.././assets/js/styled-components/hoverEffectsStyled'

class MeetTheCrew extends Component{
    constructor(props){
        super(props);
        this.state={
            tileProfile: [],
        };
        this.mapCrewTiles = this.mapCrewTiles.bind(this);
    }
    componentWillMount(){
        this.mapCrewTiles();
    }

    mapCrewTiles(){
        let{meetTheCrewContent} = this.props;

        let mappedCrewTiles = meetTheCrewContent.map((content, index)=>{
            let tiles=[];
            let tile =
                <Grid key={index}>
                    <div className='figure-cont'>
                        <figure className="effect-chico">
                            <img src={content.image}/>
                            <figcaption>
                                <p>{content.text}</p>
                                <h2>Meet <span>{content.name}</span></h2>
                                <a href="#">View more</a>
                            </figcaption>
                        </figure>
                    </div>
                </Grid>
            tiles.push(tile)
            return tiles
        });

        this.setState({
            tileProfile: mappedCrewTiles
        })

    }
    render(){
        return(
            <React.Fragment>
                {/*Meet the Crew : BANNER*/}
                <ThemeProvider theme={meetTheCrewBanner}>
                    <SectionContainer>
                        <TextBox>
                            <h1>Meet the Crew</h1>
                            <p> grew up on the crime side, the New York Times side
                                Staying alive was no jive
                                Had second hands, moms bounced on old men
                                So then we moved to Shaolin land</p>
                        </TextBox>
                    </SectionContainer>
                </ThemeProvider>

                {/*Meet the the Crew : Tiles*/}
                <SectionContainer >
                    {this.state.tileProfile}
                </SectionContainer>
            </React.Fragment>
        )
    }
}

export default MeetTheCrew