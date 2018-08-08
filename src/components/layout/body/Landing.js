import React, {Component} from 'react';



class Landing extends Component{
    render(){
        return(

                <div className='landing-main p-0 m-0'>

                    <div className='landing-row row '>

                        {/* -----   -----   ABOUT US    -----   -----   */}
                        <div className='col-sm-5 p-0 landing-col bg-success'>
                            <div className='overlay'></div>

                            <div className='landing-tile-img'>
                                <img src="https://res.cloudinary.com/ocampot/image/upload/v1533245189/tmnt_2003_group_selfie_by_autobot2.jpg" alt=""/>
                            </div>

                            <div className='overlay-content'>
                                <h1>
                                    About us
                                </h1>

                                <div className='border'></div>

                                <small>Meet the crew!</small>

                            </div>
                        </div>



                        {/* -----   -----   SERVICES    -----   -----   */}
                        {/*<div className='col-sm-7 p-0 landing-col bg-info'>*/}
                            {/*<img className='' src="https://res.cloudinary.com/ocampot/image/upload/v1532397698/sbsitnstay/dogs_on_leash.jpg" alt=""/>*/}
                        {/*</div>*/}


                        <div className='col-sm-7 p-0 landing-col bg-info'>
                            <div className='overlay'></div>

                            <div className='landing-tile-img'>
                                <img className='' src="https://res.cloudinary.com/ocampot/image/upload/v1532397698/sbsitnstay/dogs_on_leash.jpg" alt=""/>
                            </div>

                            <div className='overlay-content'>
                                <h1>
                                    Services
                                </h1>

                                <div className='border'></div>

                                <small>We provide for you and yours!</small>

                            </div>
                        </div>


                        {/*/!* -----   -----   GALLERY    -----   -----   *!/*/}

                        <div className='col-sm-6 p-0 landing-col bg-info'>
                            <div className='overlay'></div>

                            <div className='landing-tile-img'>
                                <img className='' src="https://res.cloudinary.com/ocampot/image/upload/v1532398583/sbsitnstay/dog_leash.jpg" alt=""/>
                            </div>

                            <div className='overlay-content'>
                                <h1>
                                    Gallery
                                </h1>


                                <div className='border'></div>

                                <small>
                                    Checkout our buds!
                                </small>

                            </div>
                        </div>


                        {/*/!* -----   -----   CONTACT    -----   -----   *!/*/}
                        {/*<div className='landing-tile col-sm-6 p-0'>*/}
                            {/*<img className='' src="https://res.cloudinary.com/ocampot/image/upload/v1532398723/sbsitnstay/dog_laptop.jpg" alt=""/>*/}
                        {/*</div>*/}

                        <div className='col-sm-6 p-0 landing-col bg-info'>
                            <div className='overlay'></div>

                            <div className='landing-tile-img'>
                                <img className='' src="https://res.cloudinary.com/ocampot/image/upload/v1532398723/sbsitnstay/dog_laptop.jpg" alt=""/>
                            </div>

                            <div className='overlay-content'>
                                <h1>
                                    Contact
                                </h1>

                                <div className='border'></div>

                                <small>Get in touch with us.</small>

                            </div>
                        </div>

                    </div>
                </div>


        )
    }
}

export default Landing