import React from 'react'
import Navbar from './side-nav'


const BannerGeneric = ()=>{
    return(
        <div className='banner-generic-main'>
            <Navbar/>


            <div className='banner-generic-img-cont'>
                <img src='https://res.cloudinary.com/ocampot/image/upload/v1532397892/sbsitnstay/dog_and_owner_sunset.jpg' />
            </div>

            <div className='banner-generic-content'>
                <h1 className='display-4'>About US</h1>

                <div className='btm-border'></div>


                <p>WELCOME</p>

                <button className='btn banner-btn '>GET STARTED</button>
            </div>

        </div>
    )
}

export default BannerGeneric