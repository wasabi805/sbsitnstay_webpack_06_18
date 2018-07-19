import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {DropdownTrigger, DropdownContent} from 'react-simple-dropdown'

import dogLaptop from '../../images/dog-laptop.jpg'
import pupsEating from '../../images/pups-eating.jpg'
import dogNap from '../../images/dog-sleeping-01.jpg'


class Services extends Component{

    constructor(props){
        super(props);
        this.state={

            showWalkingText: true,
            showFeedingText: true,
            showOvernightCareText: true,
            showDropinsText: true,
            showAdventuresText: true,


        }

        this.handleShowWalkingText = this.handleShowWalkingText.bind(this);
        this.handleShowFeedingText = this.handleShowFeedingText.bind(this);
        this.handleOvernightCareText = this.handleOvernightCareText.bind(this);
        this.handleShowDropinsText = this.handleShowDropinsText.bind(this);
        this.handleAdventuresText = this.handleAdventuresText.bind(this);
        this.onClick = this.onClick.bind(this);


    }


    handleShowWalkingText(){
        console.log('Show Walking Text');

        this.setState(prevState =>({
            showWalkingText: !prevState.showWalkingText
        }));



        console.log(this.state.showWalkingText, '<-------');
        console.log(this.state.showFeedingText, '<---show feeding----');

    }

    handleShowFeedingText(){
        console.log('Show Feeding Text');

        this.setState(prevState =>({
            showFeedingText: !prevState.showFeedingText
        }))

        console.log(this.state.showFeedingText, '<|||||||');

    }

    handleOvernightCareText(){
        console.log('Show Overnight Text');

        this.setState(
            prevState =>({showOvernightCareText: !prevState.showOvernightCareText})

        )

    }

    handleShowDropinsText(){
        console.log('Show Dropin  Text?');
        this.setState(prevState =>({
            showDropinsText: !prevState.showDropinsText
        }))

    }

    handleAdventuresText(){
        this.setState(prevState =>({
            showAdventuresText: !prevState.showAdventuresText
        }))
    }



    onClick(e){
        console.log(e);

    }


    render(){

        return(
            <div>

                {/*SERVICES*/}

                <section id="landing-section">
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
                                <div className='landing-content'>
                                    {this.state.showWalkingText ? '.' : 'I grew up on the crime side, the New York Times side\n' +
                                        'Staying alive was no jive\n' +
                                        'Had second hands, moms bounced on old men\n' +
                                        'So then we moved to Shaolin land\n' +
                                        'A young youth, yo rockin\' the gold tooth, \'Lo goose\n' +
                                        'Only way, I begin to G off was drug loo'}
                                </div>
                            </div>

                            <div className='row-md-12'>
                                <div className='landing-btn'>
                                    <button
                                        onClick={this.handleShowWalkingText}

                                    >Click Me </button>
                                </div>

                            </div>
                        </div>



                    </div>
                </section>


                {/*FEEDING*/}
                <section id="landing-section">
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
                                <div className='landing-content'>
                                    {this.state.showFeedingText ? '.' : "Cause day and night, The lonely stoner seems to free his mind at night, He's all alone somethings will never change, The lonely loner seems to free his mind at night (at, at, at night)"}
                                </div>
                            </div>

                            <div className='row-md-12'>
                                <div className='landing-btn'>
                                    <button
                                        onClick={this.handleShowFeedingText}

                                    >Click Me </button>
                                </div>

                            </div>
                        </div>



                    </div>
                </section>


                {/*OVERNIGHT CARE*/}
                <section id="landing-section">
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
                                <div className='landing-content'>
                                    {this.state.showOvernightCareText ? '.' : 'Last night took an L, but tonight I bounce back ,Wake up every morning, by the night, I count stacks, Knew that ass was real when I hit, it bounce back'}
                                </div>
                            </div>

                            <div className='row-md-12'>
                                <div className='landing-btn'>
                                    <button
                                        onClick={this.handleOvernightCareText}

                                    >Click Me </button>
                                </div>

                            </div>
                        </div>



                    </div>
                </section>






            </div>
        )
    }
}

export default Services

// <div className='landing-drescrip-text'>
//
// {this.state.showFeedingText ? '' : '\'Cause day and night\n' +
//     'The lonely stoner seems to free his mind at night\n' +
//     'He\'s all alone somethings will never change\n' +
//     'The lonely loner seems to free his mind at night (at, at, at night)'}
// </div>