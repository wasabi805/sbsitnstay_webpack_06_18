import React, {Component} from 'react';
import CSSModules from 'react-css-modules'
import {Button} from 'react-bootstrap'

import styles from '../../.././assets/css/banner.css';



class BannerStyled extends Component{

    render(){


        return(

            <div className={`${styles.section} home-hero` } >
                {/*<div className='container'>*/}

                    <div className={styles.title}>

                        <h1 className={styles.h1}>
                            Southbay Sit 'N Stay
                            <span>
                               Welcome
                           </span>
                        </h1>
                    </div>

                    <div className={styles.button}>
                        Get Started
                    </div>
                {/*</div>*/}
            </div>

        )
    }
}

export default CSSModules(BannerStyled, styles)
