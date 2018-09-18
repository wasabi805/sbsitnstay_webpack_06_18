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

            redirectHome: false,
            redirectAbout: false,
        };
        this.handleRedirect = this.handleRedirect.bind(this)
    }

    handleRedirect(e){
        console.log(e.target.id);
        let buttonId = e.target.id


        if(buttonId==='landingRoute'){
            this.setState({
                heroBannerImg: 'bgLanding',
                landingBodyVisible : true,
                redirectHome: true,
            })
        }

        if(buttonId==='aboutRoute'){
            this.setState({
                heroBannerImg: 'bgAbout1',
                landingBodyVisible : false
            })
        }

        if(buttonId==='servicesRoute'){
            this.setState({
                heroBannerImg: 'bgServices1',

            })
        }

        if(buttonId==='galleryRoute'){
            this.setState({
                heroBannerImg: 'bgGallery',

            })
        }

        if(buttonId==='contactRoute'){
            this.setState({
                heroBannerImg: 'bgContact',

            })
        }


    }

    componentWillMount(){
        let {pathname}=this.props.location;

        if(pathname==='/'){
            this.setState({
                heroBannerImg : 'bgLanding',
                landingBodyVisible: true
            })

        }

        if(pathname==='/location/about-us'){
            this.setState({heroBannerImg : 'bgAbout1'})
        }
    }






    render(){
        // console.log(this.props, 'SANITY CHECK');


        const classNames = require('classnames');
        let landingStyle = classNames('app-section-banner','app-parallax', 'bgLanding')

        if(this.state.redirectHome){
            return <Redirect push to ='/'/>
        }

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
                <HeaderNavigation handleRedirect={this.handleRedirect} />

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
                <div className='body container w-80' >
                    <div className='row landing-tile-body'>
                        <div className='col-6 ' >
                            <div className='container landing-tile'>
                                <img src="https://res.cloudinary.com/ocampot/image/upload/v1535670370/catarina-carvalho-406908-unsplash.jpg"/>
                                <p className='title'>Meet the Crew</p>
                                <div className='overlay'></div>

                                <div className='button '  id="aboutRoute">
                                    <Link to='/location/about-us'><li>Meet the Crew</li></Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-6 ' >
                            <div className='container landing-tile'>
                                <img src="https://res.cloudinary.com/ocampot/image/upload/v1535670372/nicolas-tessari-218491-unsplash.jpg"/>
                                <p className='title'>Services</p>
                                <div className='overlay'></div>
                                <Link to='/location/services'><div className='button '>What we do</div></Link>
                            </div>
                        </div>

                        <div className='col-6 ' >
                            <div className='container landing-tile'>
                                <img src="https://res.cloudinary.com/ocampot/image/upload/v1535455453/alvan-nee-259129-unsplash.jpg"/>
                                <p className='title'>Gallery</p>
                                <div className='overlay'></div>
                                <Link to='/location/gallery'><div className='button '>Our pals</div></Link>
                            </div>
                        </div>

                        <div className='col-6 ' >
                            <div className='container landing-tile'>
                                <img src="https://res.cloudinary.com/ocampot/image/upload/v1535713833/german-shepherd-using-laptop-desktop-background.jpg"/>
                                <p className='title'>Gallery</p>
                                <div className='overlay'></div>
                                <Link to='/location/contact'><div className='button '>Drop us a line</div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            </React.Fragment>
        )

    }
}

export default MainContainer