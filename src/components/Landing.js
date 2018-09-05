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
        let landingStyle = classNames('app-section','app-parallax', 'bgLanding')

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
            <main className="app-wrapper">
                <HeaderNavigation/>

                {/*BANNER*/}
                <section className={landingStyle}>
                    <h1>{this.state.heading}</h1>
                </section>

                <section className="app-section app-static">
                    <h1>Boring</h1>
                </section>

                <section className="section parallax landing-parallax-bg2">
                    <h1>SO FWUFFY AWWW</h1>
                </section>

                {/*Body*/}


                <div className='body' >
                    <div className='card-landing bg-primary mb-5' onClick={this.handleClickAbout}>
                        <div className='card-text-box-left'>
                            <h1>About Us</h1>
                            <p>MORE TEXT TO COME</p>

                        </div>
                        <img src="https://res.cloudinary.com/ocampot/image/upload/v1535670369/erica-magugliani-446666-unsplash.jpg"/>
                    </div>

                    <div className='card-landing bg-primary mb-5' onClick={this.handleClickServices}>
                        <div className='card-text-box-right'>
                            <h1>Services</h1>
                            <p>MORE TEXT TO COME</p>

                        </div>
                        <img src="https://res.cloudinary.com/ocampot/image/upload/v1535709797/nicolas-tessari-218491-unsplash-FLIPPED.jpg"/>
                    </div>

                    <div className='card-landing bg-primary mb-5' onClick={this.handleClickGallery}>
                        <div className='card-text-box-left'>
                            <h1>Gallery</h1>
                            <p>MORE TEXT TO COME</p>

                        </div>
                        <img src="https://res.cloudinary.com/ocampot/image/upload/v1535670369/robert-larsson-64550-unsplash.jpg"/>
                    </div>

                    <div className='card-landing bg-primary mb-5' onClick={this.handleClickContact}>
                        <div className='card-text-box-right'>
                            <h1>Contact</h1>
                            <p>MORE TEXT TO COME</p>

                        </div>
                        <img src="https://res.cloudinary.com/ocampot/image/upload/v1535670372/bruno-cervera-460422-unsplash.jpg"/>
                    </div>

                </div>

            </main>
        )

    }
}

export default Landing