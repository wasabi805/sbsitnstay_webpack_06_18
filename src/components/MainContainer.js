import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom'


import HeaderNavigation from './layout/nav/HeaderNavigation'
import LandingBody from './body/LandingBody'
import AboutBody from './body/AboutBody';


class MainContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            heading: '',
            small:'',
            tiles: [],

            heroBannerImg : '',
            landingBodyVisible: false,
            aboutBodyVisible: false,
        };
    }

    componentWillMount(){
        let {pathname} = this.props.location;

       switch(pathname){
           case( '/'):
               this.setState({
                   heroBannerImg : 'bgLanding',
                   landingBodyVisible: true,
               });
           break;

           case( '/location/about-us'):
               this.setState({
                   heroBannerImg : 'bgAbout1',
                   aboutBodyVisible: true,
               });
               break;
       }

    }


    render(){
        console.log(this.state, 'SANITY CHECK');

        const classNames = require('classnames');
        let landingStyle = classNames('app-section-banner','app-parallax', 'bgLanding')


        if(this.state.redirectAbout){
            return <Redirect push to ='/location/about-us'/>
        }
        if(this.state.redirectServices){
            return <Redirect push to ='/location/services'/>
        }
        if(this.state.redirectGallery){
            return <Redirect push to ='/location/gallery'/>
        }
        if(this.state.redirectContact){
            return <Redirect push to ='/location/contact'/>
        }

        return(

            <React.Fragment>
            <main className="app-wrapper">
                <HeaderNavigation/>

                {/*BANNER*/}
                <section className={`app-hero app-hero-parallax  ${this.state.heroBannerImg}`}>
                    <h1>{this.state.heading}</h1>
                </section>

                <section className="app-static app-static-content-01 ">

                    <div className='app-static-container'>
                        <div className='app-section-static-content-text-box'>
                            <h1>About Us</h1>
                            <p>It was all a dream, I used to read Word Up! magazine
                                Salt-n-Pepa and Heavy D up in the limousine
                                Hangin' pictures on my wall
                                Every Saturday Rap Attack, Mr. Magic, Marley Marl</p>

                        </div>
                        <img src="https://res.cloudinary.com/ocampot/image/upload/v1535670369/erica-magugliani-446666-unsplash.jpg"/>
                    </div>
                </section>


                <section className="app-section-sidekick sidekick-parallax bgAbout2">
                    <h1>SO FWUFFY AWWW</h1>
                </section>

                {/*Body*/}
                {this.state.landingBodyVisible &&  <LandingBody/>}
                {this.state.aboutBodyVisible &&  <AboutBody/>}




            </main>
            </React.Fragment>
        )

    }
}

export default MainContainer