import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import HeaderNavigation from './layout/nav/HeaderNavigation'


class About extends Component{
    constructor(props){
        super(props);
        this.state={
            heroBannerImg : '',
            portraits: [],

            toggleKaylaProfile: true,
            displayKaylaProfile: 'none',
            toggleCatherineProfile: true,
            displayCatherineProfile: 'none',
            toggleYukoProfile: true,
            displayYukoProfile: 'none',
        }


        this.showKaylaContent = this.showKaylaContent.bind(this);
        this.showCatherineContent = this.showCatherineContent.bind(this);
        this.showYukoContent = this.showYukoContent.bind(this);

        this.reset=this.reset.bind(this);

    }

    reset(){
        this.setState({

            toggleKaylaProfile: true,
            toggleCatherineProfile: true,
            toggleYukoProfile: true,
            displayKaylaProfile: 'none',
            displayCatherineProfile: 'none',
            displayYukoProfile: 'none',
        })
    }

    showKaylaContent(){
       this.setState({
           toggleCatherineProfile: 'none',
           toggleYukoProfile: 'none',
           displayKaylaProfile: true
       })
    }

    showCatherineContent(){
        this.setState({
            toggleKaylaProfile: 'none',
            toggleYukoProfile: 'none',
            displayCatherineProfile: true
        })
    }

    showYukoContent(){
        this.setState({
            toggleKaylaProfile: 'none',
            toggleCatherineProfile: 'none',
            displayYukoProfile: true
        })

    }

    componentWillMount(){

        let {heroBg, portraits} = this.props.about

        this.setState({
            portraits: portraits
        })
    }



    render(){
        console.log(this.state.portraits, 'protratits');

        return(
            <React.Fragment>
                <main className="app-wrapper">
                    <HeaderNavigation handleRedirect={this.handleRedirect} />

                    {/*BANNER*/}
                    <section className='app-hero2 app-hero-parallax2 bgAbout1'>
                        <h1>{this.state.heading}</h1>
                    </section>

                    <section className="app-static app-static-content-02 ">

                        <div className='app-static-container-02'>
                            {/*<div className='app-section-static-content-text-box-02'>*/}
                                {/*<h1>About Us</h1>*/}
                                {/*<p>It was all a dream, I used to read Word Up! magazine*/}
                                    {/*Salt-n-Pepa and Heavy D up in the limousine*/}
                                    {/*Hangin' pictures on my wall*/}
                                    {/*Every Saturday Rap Attack, Mr. Magic, Marley Marl</p>*/}

                            {/*</div>*/}
                            <img src="https://res.cloudinary.com/ocampot/image/upload/v1536108371/joe-woods-739738-unsplash.jpg"/>
                        </div>
                    </section>


                    <section className="app-section-sidekick sidekick-parallax bgAbout2">
                        <h1>SO FWUFFY AWWW</h1>
                    </section>

                    {/*Body*/}
                    <div className='aboutBody container w-80' >
                        <div className='row landing-tile-body'>

                                                        {/*KAYLA*/}
                            <div className='col col-xl-4 profile' style={{display : this.state.toggleKaylaProfile}}>
                                <div className="container">
                                    <img src={this.state.portraits[0].img} alt="" />
                                    <p className="title">Kayla</p>
                                    <div className="overlay"></div>
                                    <div className="button"><a href="#" onClick={this.showKaylaContent}> More on Kayla </a></div>
                                </div>
                            </div>

                            <div className='col col-xl-8 profile-content ' style={{display : this.state.displayKaylaProfile}} onClick={this.reset}>
                                <div className="test">
                                    <p className="title">STUFF ABOUT KAYLA</p>
                                    <div className="overlay"></div>
                                </div>
                            </div>

                                                        {/*CATHERINE*/}
                            <div className='col col-xl-4 profile ' style={{display : this.state.toggleCatherineProfile}}>
                                <div className="container">
                                    <img src={this.state.portraits[1].img} alt="" />
                                    <p className="title">Catherine</p>
                                    <div className="overlay"></div>
                                    <div className="button"><a href="#" onClick={this.showCatherineContent}> More on Catherine </a></div>
                                </div>
                            </div>

                            <div className='col col-xl-8 profile-content ' style={{display : this.state.displayCatherineProfile}} onClick={this.reset}>
                                <div className="test">
                                    <p className="title">STUFF ABOUT Catherine</p>
                                    <div className="overlay"></div>
                                </div>
                            </div>

                                                        {/*YUKO*/}
                            <div className='col col-xl-4 profile ' style={{display : this.state.toggleYukoProfile}}>
                                <div className="container">
                                    <img src={this.state.portraits[2].img} alt="" />
                                    <p className="title">Yuko</p>
                                    <div className="overlay"></div>
                                    <div className="button"><a href="#" onClick={this.showYukoContent}> More on Yuko </a></div>
                                </div>
                            </div>

                            <div className='col col-xl-8 profile-content ' style={{display : this.state.displayYukoProfile}} onClick={this.reset}>
                                <div className="test">
                                    <p className="title">STUFF ABOUT YUKO</p>
                                    <div className="overlay"></div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='footer'>
                        <h2>Like what you see?</h2>
                        <p>get in touch with us on social media</p>
                    </div>



                </main>
            </React.Fragment>
            )
    }
}

export default About

