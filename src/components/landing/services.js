import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {DropdownTrigger, DropdownContent} from 'react-simple-dropdown'

import ServicesText from './services-text'



const dog_leash_002 = 'https://res.cloudinary.com/ocampot/image/upload/v1532399332/sbsitnstay/dog_leash_002.jpg'
const pups_eating = 'https://res.cloudinary.com/ocampot/image/upload/v1532399233/sbsitnstay/pups_eating.jpg'
const dog_sleeping_01 = 'https://res.cloudinary.com/ocampot/image/upload/v1532399537/sbsitnstay/dog_sleeping_01.jpg'


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
                                <img src={dog_leash_002}/>
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
                                <img src={pups_eating}/>
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
                                <img src={dog_sleeping_01}/>
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

