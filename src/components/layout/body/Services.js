import React from 'react';


const Services = (props)=>{

    console.log(props);

    return(
        <div className='services-main container-fluid'>

            <div className='services-row row'>

                <div className='col services-colA col-sm-2 col-md-5 p-0'>

                    <div className='overlay'>I'm the overlay</div>

                    <div className='services-img-cont'>
                        <img src={props.content[0].src} alt=''/>
                    </div>
                </div>


                <div className='col services-colB col-sm-10 col-md-7'>
                    <div className='services-content'>
                        <h2>{props.content[0].name}</h2>
                        <p>{props.content[0].small}</p>

                        <button className='btn'> Read More </button>
                    </div>
                </div>
            </div>


            <div className='services-row row'>
                <div className='col services-colB col-sm-10  col-md-7'>
                    <div className='services-content'>
                        <h2>{props.content[1].name}</h2>
                        <p>{props.content[1].small}</p>

                        <button className='btn'> Read More </button>
                    </div>
                </div>


                <div className='col services-colA col-sm-2 col-sm-2 p-0 col-md-5 '>
                    <div className='overlay'>I'm the overlay</div>
                    <div className='services-img-cont'>
                        <img src={props.content[1].src} alt=''/>
                    </div>
                </div>
            </div>

            <div className='services-row row'>

                <div className='col services-colA col-sm-2 col-md-5 p-0'>
                    <div className='overlay'>I'm the overlay</div>
                    <div className='services-img-cont'>
                        <img src={props.content[2].src} alt=''/>
                    </div>
                </div>


                <div className='col services-colB col-sm-10 col-md-7'>
                    <div className='services-content'>
                        <h2>{props.content[2].name}</h2>
                        <p>{props.content[2].small}</p>

                        <button className='btn'> Read More </button>
                    </div>
                </div>
            </div>

            <div className='services-row row'>
                <div className='col services-colB col-sm-10  col-md-7'>
                    <div className='services-content'>
                        <h2>{props.content[3].name}</h2>
                        <p>{props.content[3].small}</p>

                        <button className='btn'> Read More </button>
                    </div>
                </div>


                <div className='col services-colA col-sm-2 col-sm-2 p-0 col-md-5 '>
                    <div className='overlay'>I'm the overlay</div>
                    <div className='services-img-cont'>
                        <img src={props.content[3].src} alt=''/>
                    </div>
                </div>
            </div>

            <div className='services-row row'>

                <div className='col services-colA col-sm-2 col-md-5 p-0'>
                    <div className='overlay'>I'm the overlay</div>
                    <div className='services-img-cont'>
                        <img src={props.content[4].src} alt=''/>
                    </div>
                </div>


                <div className='col services-colB col-sm-10 col-md-7'>
                    <div className='services-content'>
                        <h2>{props.content[4].name}</h2>
                        <p>{props.content[4].small}</p>

                        <button className='btn'> Read More </button>
                    </div>
                </div>
            </div>


        </div>
    )

};

export default Services