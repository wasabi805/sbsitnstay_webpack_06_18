import React, {Component} from 'react';
import CSSModules from 'react-css-modules'

import styles from '../../.././assets/css/banner.css';



class BannerStyled extends Component{

    render(){


        return(

            <div className={styles.section}>

                <div className="container">
                    <div className="title">

                        <h1>
                            Southbay Sit 'N Stay
                            <span>
                               Welcome
                           </span>
                        </h1>
                    </div>

                    <div className="button">
                        Get Started
                    </div>

                </div>
            </div>
        )
    }
}

export default CSSModules(BannerStyled, styles)
