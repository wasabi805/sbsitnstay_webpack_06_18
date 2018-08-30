import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from '../.././assets/css/home-about.css'

class HomeAbout extends Component{
    render(){
        return(
            <React.Fragment>
                <div className='main'>

                    <div className={styles.container}>

                        <div className={styles.bgContainer}>
                            <div className={`${styles.section}`}></div>
                        </div>


                        <div className={styles.homeAboutTextbox}>
                            <h1>
                                About Us

                            </h1>

                            <p>
                                It was all a dream, I used to read Word Up! magazine
                                Salt-n-Pepa and Heavy D up in the limousine
                                Hangin' pictures on my wall
                                Every Saturday Rap Attack, Mr. Magic, Marley Marl
                            </p>


                        </div>

                    </div>

                    <div className={styles.container}>

                        <div className={styles.bgContainer}>
                            <div className={`${styles.section}`}></div>
                        </div>


                        <div className={styles.homeAboutTextbox}>
                            <h1>
                                About Us

                            </h1>

                            <p>
                                It was all a dream, I used to read Word Up! magazine
                                Salt-n-Pepa and Heavy D up in the limousine
                                Hangin' pictures on my wall
                                Every Saturday Rap Attack, Mr. Magic, Marley Marl
                            </p>


                        </div>

                    </div>

                    <div className={styles.container}>

                        <div className={styles.bgContainer}>
                            <div className={`${styles.section}`}></div>
                        </div>


                        <div className={styles.homeAboutTextbox}>
                            <h1>
                                About Us

                            </h1>

                            <p>
                                It was all a dream, I used to read Word Up! magazine
                                Salt-n-Pepa and Heavy D up in the limousine
                                Hangin' pictures on my wall
                                Every Saturday Rap Attack, Mr. Magic, Marley Marl
                            </p>


                        </div>

                    </div>


                </div>








            </React.Fragment>
        )
    }
}

export default CSSModules(HomeAbout, styles)