import React, {Component} from 'react';

import {Link, Route} from 'react-router-dom';

class Services extends Component{

    constructor(props){
        super(props);
        this.state= {

        }
    };


    render(){

        return(
            <div className='services-main container-fluid'>


                <div className='services-row row'>

                    <div className='col services-colA col-sm-2 col-md-5 p-0'>

                        <div className='overlay'>I'm the overlay</div>

                        <div className='services-img-cont'>
                            <img src='https://res.cloudinary.com/ocampot/image/upload/v1532399332/sbsitnstay/dog_leash_002.jpg'></img>
                        </div>
                    </div>


                    <div className='col services-colB col-sm-10 col-md-7'>
                        <div className='services-content'>
                            <h2>Walking</h2>
                            <p>stuff about walking</p>

                            <button className='btn'> Read More </button>
                        </div>
                    </div>
                </div>


                <div className='services-row row'>
                    <div className='col services-colB col-sm-10  col-md-7'>
                        <div className='services-content'>
                            <h2>Feeding</h2>
                            <p>stuff about Feeding</p>

                            <button className='btn'> Read More </button>
                        </div>
                    </div>


                    <div className='col services-colA col-sm-2 col-sm-2 p-0 col-md-5 '>
                        <div className='overlay'>I'm the overlay</div>
                        <div className='services-img-cont'>
                            <img src='https://res.cloudinary.com/ocampot/image/upload/v1532399233/sbsitnstay/pups_eating.jpg'></img>
                        </div>
                    </div>
                </div>

                <div className='services-row row'>

                    <div className='col services-colA col-sm-2 col-md-5 p-0'>
                        <div className='overlay'>I'm the overlay</div>
                        <div className='services-img-cont'>
                            <img src='https://res.cloudinary.com/ocampot/image/upload/v1533787475/dog-napping.jpg'></img>
                        </div>
                    </div>


                    <div className='col services-colB col-sm-10 col-md-7'>
                        <div className='services-content'>
                            <h2>Drop-in Visits</h2>
                            <p>stuff about Drop ins</p>

                            <button className='btn'> Read More </button>
                        </div>
                    </div>
                </div>

                <div className='services-row row'>
                    <div className='col services-colB col-sm-10  col-md-7'>
                        <div className='services-content'>
                            <h2>Overnight Care</h2>
                            <p>stuff about overnight care</p>

                            <button className='btn'> Read More </button>
                        </div>
                    </div>


                    <div className='col services-colA col-sm-2 col-sm-2 p-0 col-md-5 '>
                        <div className='overlay'>I'm the overlay</div>
                        <div className='services-img-cont'>
                            <img src='https://res.cloudinary.com/ocampot/image/upload/v1532399537/sbsitnstay/dog_sleeping_01.jpg'></img>
                        </div>
                    </div>
                </div>

                <div className='services-row row'>

                    <div className='col services-colA col-sm-2 col-md-5 p-0'>
                        <div className='overlay'>I'm the overlay</div>
                        <div className='services-img-cont'>
                            <img src='https://res.cloudinary.com/ocampot/image/upload/v1533787592/dog-on-hike-00.jpg'></img>
                        </div>
                    </div>


                    <div className='col services-colB col-sm-10 col-md-7'>
                        <div className='services-content'>
                            <h2>Adventuress</h2>
                            <p>stuff about adventures</p>

                            <button className='btn'> Read More </button>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Services