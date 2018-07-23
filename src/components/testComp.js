import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Dropdown from 'react-simple-dropdown';
import {DropdownTrigger, DropdownContent} from 'react-simple-dropdown'

import dogLaptop from '.././images/dog-laptop.jpg'
import pic10 from '.././images/pic10.jpg'

class TestMenu extends Component{

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
        }))

        console.log(this.state.showWalkingText, '<-------');

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
        this.setState(prevState =>({
            showOvernightCareText: !prevState.showOvernightCareText
        }))

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
        // console.log(Dropdown);

        return(
            <div>

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


                <section id="landing-section">
                    <div className='row'>

                        <div className='col-md-8'>

                            <div className='landing-content'>

                                <div className='row-md-12'>
                                    <h2>Feeding</h2>
                                </div>

                                <div className='landing-drescrip-text'>

                                    {this.state.showFeedingText ? '' : 'FEEDING CONTENT WORKS'}
                                </div>

                            </div>


                            <div className='row-md-12'>
                                <button
                                    onClick={this.handleShowFeedingText}

                                >Click Me </button>
                            </div>

                        </div>

                        <div className='col-md-4'>
                            <div className='landing-item'>
                                <img src={dogLaptop}/>
                            </div>
                        </div>



                    </div>
                </section>

            </div>
        )
    }
}

export default TestMenu