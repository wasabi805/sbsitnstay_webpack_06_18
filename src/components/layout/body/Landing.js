import React from 'react';

const Landing =(props)=>{

    console.log(props, 'from landing');

        return(
            <div className='landing-main p-0 m-0'>

                <div className='landing-row row '>



                    {/* -----   -----   ABOUT US    -----   -----   */}
                    <div className='col-sm-5 p-0 landing-col bg-success'>
                        <div className='overlay'></div>

                        <div className='landing-tile-img'>
                            {/*<img src={props.content[0].src} alt=""/>*/}
                        </div>

                        <div className='overlay-content'>
                            <h1>
                                {/*{props.content[0].name}*/}
                            </h1>

                            <div className='border'></div>

                            {/*<small>{props.content[0].small}</small>*/}

                        </div>
                    </div>

                    {/* -----   -----   SERVICES    -----   -----   */}

                    <div className='col-sm-7 p-0 landing-col bg-info'>
                        <div className='overlay'></div>

                        <div className='landing-tile-img'>
                            {/*<img className='' src={props.content[1].src} alt=""/>*/}
                        </div>

                        <div className='overlay-content'>
                            <h1>
                                {/*{props.content[1].name}*/}
                            </h1>

                            <div className='border'></div>

                            {/*<small>{props.content[1].small}</small>*/}

                        </div>
                    </div>


                    {/*/!* -----   -----   GALLERY    -----   -----   *!/*/}

                    <div className='col-sm-6 p-0 landing-col bg-info'>
                        <div className='overlay'></div>

                        <div className='landing-tile-img'>
                            {/*<img className='' src={props.content[2].src} alt=""/>*/}
                        </div>

                        <div className='overlay-content'>
                            <h1>
                                {/*{props.content[2].name}*/}
                            </h1>


                            <div className='border'></div>

                            <small>
                                {/*{props.content[2].small}*/}
                            </small>

                        </div>
                    </div>

                    {/*/!* -----   -----   CONTACT    -----   -----   *!/*/}

                    <div className='col-sm-6 p-0 landing-col bg-info'>
                        <div className='overlay'></div>

                        <div className='landing-tile-img'>
                            {/*<img className='' src={props.content[3].src} alt=""/>*/}
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
export default Landing