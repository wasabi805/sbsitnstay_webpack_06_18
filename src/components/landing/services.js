import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {DropdownTrigger, DropdownContent} from 'react-simple-dropdown'

import ServicesText from './services-text'




import dogLaptop from '../../images/dog-laptop.jpg'
import pupsEating from '../../images/pups-eating.jpg'
import dogNap from '../../images/dog-sleeping-01.jpg'


class Services extends Component{

    constructor(props){
        super(props);
        this.state={

            isHovered: false,
            isHoveredFeeding: false,
            isHoveredOverNight: false


        };

        //HOVERED
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMessageHover = this.onMessageHover.bind(this);
        this.onFeedingHover= this.onFeedingHover.bind(this);
        this.onOverNightHover= this.onOverNightHover.bind(this);

    }
    //listen for hover
    onMouseOver(){

    }

    //render msg
    onMessageHover(event){

        console.log('this msg: ', event.target, ' was just hovered');

        this.setState({
            isHovered: true,
            isHoveredFeeding: false,
            isHoveredOverNight: false,
        });

        console.log('state msg is now ; isHovered', this.state.isHovered);

    }

    onFeedingHover(event){
        console.log(event.target, 'Feeding');

        this.setState({
            isHoveredFeeding: true,
            isHoveredOverNight: false,
            isHovered: false
        })
    }

    onOverNightHover(event){
        console.log(event.target, 'Overnight');
        this.setState({
            isHoveredOverNight: true,
            isHovered: false,
            isHoveredFeeding: false,
        })
    }


    render(){

        return(
            <div>
                            {/*SERVICES*/}

                {/*DOM elem that used as trigger*/}
                <section id="landing-section"
                         onMouseOver={this.onMessageHover}
                >
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='landing-item'>
                                <img src={dogLaptop}/>
                            </div>
                        </div>



                        <div className='col-md-8 '>
                            <div className='row-md-12'>
                                <h2>Walking</h2>
                            </div>

                            <div className='row-md-12'>

                                <ServicesText
                                    isHovered={this.state.isHovered}
                                    isWalking={true}
                                />

                            </div>
                        </div>
                    </div>
                </section>


                            {/*FEEDING*/}

                {/*DOM elem that used as trigger*/}
                <section id="landing-section"
                         onMouseOver={this.onFeedingHover}
                >
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='landing-item'>
                                <img src={pupsEating}/>
                            </div>
                        </div>


                        <div className='col-md-8 '>
                            <div className='row-md-12'>
                                <h2>FEEDING</h2>
                            </div>

                            <div className='row-md-12'>

                                {/*Render COMP WHEN triggered*/}
                                <ServicesText
                                    isHoveredFeeding={this.state.isHoveredFeeding}
                                    isFeeding={true}
                                />
                            </div>
                        </div>

                    </div>
                </section>


                            {/*OVERNIGHT CARE*/}

                {/*DOM elem that used as trigger*/}
                <section id="landing-section"
                         onMouseOver={this.onOverNightHover}
                >
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='landing-item'>
                                <img src={dogNap}/>
                            </div>
                        </div>


                        <div className='col-md-8 '>
                            <div className='row-md-12'>
                                <h2>OVERNIGHT CARE</h2>
                            </div>

                            <div className='row-md-12'>
                                <ServicesText
                                    isOverNight={true}
                                    isHoveredOverNight={this.state.isHoveredOverNight}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Services

