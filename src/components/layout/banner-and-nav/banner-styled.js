import React, {Component} from 'react';
import CSSModules from 'react-css-modules'
import {Button} from 'react-bootstrap'

import styles from '../../.././assets/css/banner.css';



const landingPic = 'https://res.cloudinary.com/ocampot/image/upload/q_60/matt-nelson-259365-unsplash.jpg'


class BannerStyled extends Component{

render(){

    const landingBg={
        backgroundImage: `url(${landingPic})`,

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
}

// export default CSSModules(BannerStyled, styles)
export default BannerStyled



