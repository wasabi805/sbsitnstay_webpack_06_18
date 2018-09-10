import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'


import HeaderNavigation from './layout/nav/HeaderNavigation'


class Landing extends Component{
    constructor(props){
        super(props);
        this.state={
            heading: '',
            small:'',
            tiles: [],

            redirectAbout: false,
            redirectServices: false,
            redirectGallery: false,
            redirectContact: false,

        };
        this.handleClickAbout = this.handleClickAbout.bind(this)
        this.handleClickServices = this.handleClickServices.bind(this)
        this.handleClickGallery = this.handleClickGallery.bind(this)
        this.handleClickContact = this.handleClickContact.bind(this)
    }

    componentWillMount(){
        let{heading,small,tiles}= this.props.landing
        this.setState({
            heading : heading,
            small:small,
            title: tiles
        })
    }

    handleClickAbout(){
        console.log('about got clicked');

        this.setState({
            redirectAbout: true
        })
    }

    handleClickServices(){
        this.setState({
            redirectServices: true
        })
    }

    handleClickGallery(){
        this.setState({
            redirectGallery: true
        })
    }

    handleClickContact(){
        this.setState({
            redirectContact: true
        })
    }




    render(){
        console.log(this.props, 'pass the routing');

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
                <section className={landingStyle}>
                    <h1>{this.state.heading}</h1>
                </section>

                <section className="app-static app-section-static-frame ">

                    <div className='app-section-static-content bg-primary' onClick={this.handleClickAbout}>
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


                <section className="section parallax bgAbout2">
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
                                <div className='button ' onClick={this.handleClickAbout}><a>Meet the Crew</a></div>
                            </div>
                        </div>

                        <div className='col-6 ' >
                            <div className='container landing-tile'>
                                <img src="https://res.cloudinary.com/ocampot/image/upload/v1535670372/nicolas-tessari-218491-unsplash.jpg"/>
                                <p className='title'>Services</p>
                                <div className='overlay'></div>
                                <div className='button ' onClick={this.handleClickServices}><a>What we do</a></div>
                            </div>
                        </div>

                        <div className='col-6 ' >
                            <div className='container landing-tile'>
                                <img src="https://res.cloudinary.com/ocampot/image/upload/v1535455453/alvan-nee-259129-unsplash.jpg"/>
                                <p className='title'>Gallery</p>
                                <div className='overlay'></div>
                                <div className='button ' onClick={this.handleClickGallery}><a>Our guests</a></div>
                            </div>
                        </div>

                        <div className='col-6 ' >
                            <div className='container landing-tile'>
                                <img src="https://res.cloudinary.com/ocampot/image/upload/v1535713833/german-shepherd-using-laptop-desktop-background.jpg"/>
                                <p className='title'>Gallery</p>
                                <div className='overlay'></div>
                                <div className='button ' onClick={this.handleClickContact}><a>Drop us a line</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            </React.Fragment>
        )

    }
}

export default Landing