import React, {Component} from 'react';
import CSSModules from 'react-css-modules'
import {Button} from 'react-bootstrap'

import styles from '../../.././assets/css/banner.css';



const BannerStyled =(props)=>{


    const bannerBgImg = props.content.src

    const landingBg={
        backgroundImage: `url(${bannerBgImg})`,
    }


return(
        <div className='home-hero' >

        {/*<div className={`${styles.section} home-hero` } >*/}
            <div className='container' style={landingBg}>

                <div className='title'>
                    <h1 >Southbay Sit 'N Stay
                        <span>Welcome</span>
                    </h1>
                </div>

               <div className='button'>
                   Get Started
               </div>
           </div>
       </div>

       )
}

// export default CSSModules(BannerStyled, styles)
export default BannerStyled



