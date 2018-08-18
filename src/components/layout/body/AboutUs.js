import React from 'react';


const AboutUs=(props)=>{


        return(
            <div className='about-us-parent container-fluid'>

              <div className='about-us-row row'>

                 <div className='col about-us-colA col-sm-2 col-md-3 p-0'>

                     <div className='overlay'>I'm the overlay</div>

                     <div className='about-us-img-cont'>
                         <img src={props.content[0].src}></img>
                     </div>
                 </div>


                  <div className='col about-us-colB col-sm-10 col-md-9'>
                    <div className='about-us-content lead'>
                        <h2>Meet {props.content[0].name}</h2>
                        <p>stuff about kayla</p>

                        <button className='btn'> Read More About Kayla</button>
                    </div>
                  </div>
              </div>


                <div className='about-us-row row'>
                    <div className='col about-us-colB col-sm-10  col-md-9'>
                        <div className='about-us-content'>
                            <h2>Meet {props.content[1].name}</h2>
                            <p>stuff about Catherine</p>

                            <button className='btn'> Read More About Catherine</button>
                        </div>
                    </div>


                    <div className='col about-us-colA col-sm-2 col-sm-2 p-0 col-md-3 '>
                        <div className='overlay'>I'm the overlay</div>
                        <div className='about-us-img-cont'>
                            <img src={props.content[1].src}></img>
                        </div>
                    </div>
                </div>

                <div className='about-us-row row'>

                    <div className='col about-us-colA col-sm-2 col-md-3 p-0'>
                        <div className='overlay'>I'm the overlay</div>
                        <div className='about-us-img-cont'>
                            <img src={props.content[2].src}></img>
                        </div>
                    </div>


                    <div className='col about-us-colB col-sm-10 col-md-9'>
                        <div className='about-us-content'>
                            <h2>Meet {props.content[2].name}</h2>
                            <p>stuff about Yuko</p>

                            <button className='btn'> Read More About Yuko</button>
                        </div>
                    </div>
                </div>


            </div>
        )

}

export default AboutUs