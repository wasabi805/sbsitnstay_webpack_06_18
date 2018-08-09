import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class AboutUs extends Component{
    render(){
        return(
            <div className='about-us-parent container-fluid'>


              <div className='about-us-row row'>

                 <div className='col about-us-colA col-sm-2 col-md-3 p-0'>

                     <div className='overlay'>I'm the overlay</div>

                     <div className='about-us-img-cont'>
                         <img src='https://res.cloudinary.com/ocampot/image/upload/v1533777073/kayla-portrait.jpg'></img>
                     </div>
                 </div>


                  <div className='col about-us-colB col-sm-10 col-md-9'>
                    <div className='about-us-content'>
                        <h2>Meet Kayla</h2>
                        <p>stuff about kayla</p>

                        <button className='btn'> Read More About Kayla</button>
                    </div>
                  </div>
              </div>


                <div className='about-us-row row'>
                    <div className='col about-us-colB col-sm-10  col-md-9'>
                        <div className='about-us-content'>
                            <h2>Meet Catherine</h2>
                            <p>stuff about Catherine</p>

                            <button className='btn'> Read More About Catherine</button>
                        </div>
                    </div>


                    <div className='col about-us-colA col-sm-2 col-sm-2 p-0 col-md-3 '>
                        <div className='overlay'>I'm the overlay</div>
                        <div className='about-us-img-cont'>
                            <img src='https://res.cloudinary.com/ocampot/image/upload/v1532396286/sbsitnstay/catherine.jpg'></img>
                        </div>
                    </div>
                </div>

                <div className='about-us-row row'>

                    <div className='col about-us-colA col-sm-2 col-md-3 p-0'>
                        <div className='overlay'>I'm the overlay</div>
                        <div className='about-us-img-cont'>
                            <img src='https://res.cloudinary.com/ocampot/image/upload/v1532396750/sbsitnstay/yuko.jpg'></img>
                        </div>
                    </div>


                    <div className='col about-us-colB col-sm-10 col-md-9'>
                        <div className='about-us-content'>
                            <h2>Meet Yuko</h2>
                            <p>stuff about Yuko</p>

                            <button className='btn'> Read More About Yuko</button>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default AboutUs