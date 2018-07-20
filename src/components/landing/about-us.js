import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {DropdownTrigger, DropdownContent} from 'react-simple-dropdown'

import AboutUsText from './about-us-text'

import kayla from '../../images/kayla.jpg'
import catherine from '../../images/catherine.jpg'
import yuko from '../../images/yuko.jpg'


class AboutUs extends Component{

    constructor(props){
        super(props);
        this.state={

            isHoveredKayla: false,
            isHoveredCatherine: false,
            isHoveredYuko: false


        };

        //HOVERED
        this.onMouseOver = this.onMouseOver.bind(this);

        this.onKaylaHover = this.onKaylaHover.bind(this);
        this.onCatherineHover= this.onCatherineHover.bind(this);
        this.onYukoHover= this.onYukoHover.bind(this);

    }
    //listen for hover
    onMouseOver(){

    }

    //render msg
    onKaylaHover(event){

        console.log('this msg: ', event.target, ' was just hovered');

        this.setState({
            isHoveredKayla: true,
            isHoveredCatherine: false,
            isHoveredYuko: false,
        });

        console.log('state msg is now ; isHoveredKayla', this.state.isHoveredKayla);

    }

    onCatherineHover(event){
        console.log(event.target, 'Catherine');

        this.setState({
            isHoveredKayla: false,
            isHoveredCatherine: true,
            isHoveredYuko: false
        })
    }

    onYukoHover(event){
        console.log(event.target, 'Yuko');
        this.setState({
            isHoveredKayla: false,
            isHoveredCatherine: false,
            isHoveredYuko: true
        })
    }


    render(){

        return(
            <div>
                {/*KAYLA PROFILE*/}

                {/*DOM elem that used as trigger*/}
                <section id="landing-section"
                         onMouseOver={this.onKaylaHover}
                >
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='landing-item'>
                                <img src={kayla}/>
                            </div>
                        </div>



                        <div className='col-md-8 '>
                            <div className='row-md-12'>
                                <h2>Meet Kayla</h2>
                            </div>

                            <div className='row-md-12'>

                                <AboutUsText
                                    isHoveredKayla={this.state.isHoveredKayla}
                                    isKayla={true}
                                />

                            </div>
                        </div>
                    </div>
                </section>


                {/*CATHERINE PROFILE*/}

                {/*DOM elem that used as trigger*/}
                <section id="landing-section"
                         onMouseOver={this.onCatherineHover}
                >
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='landing-item'>
                                <img src={catherine}/>
                            </div>
                        </div>


                        <div className='col-md-8 '>
                            <div className='row-md-12'>
                                <h2>Meet Catherine</h2>
                            </div>

                            <div className='row-md-12'>

                                {/*Render COMP WHEN triggered*/}
                                <AboutUsText
                                    isHoveredCatherine={this.state.isHoveredCatherine}
                                    isCatherine={true}
                                />
                            </div>
                        </div>

                    </div>
                </section>


                {/*YUKO PROFILE*/}

                {/*DOM elem that used as trigger*/}
                <section id="landing-section"
                         onMouseOver={this.onYukoHover}
                >
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='landing-item'>
                                <img src={yuko}/>
                            </div>
                        </div>


                        <div className='col-md-8 '>
                            <div className='row-md-12'>
                                <h2>Meet Yuko</h2>
                            </div>

                            <div className='row-md-12'>
                                <AboutUsText
                                    isYuko={true}
                                    isHoveredYuko={this.state.isHoveredYuko}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default AboutUs