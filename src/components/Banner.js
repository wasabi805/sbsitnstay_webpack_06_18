import React, {Component} from 'react';
import { BrowserRouter as Router,Route, Link } from 'react-router-dom';

import dogOnLeash01 from '.././images/dog-leash-01.jpg'

const bannerBgImg = {
    backgroundImage: [`url(${dogOnLeash01})`]
};


class Banner extends Component{

    constructor(props){
        super(props);
        this.state={
            location: '/',
            backgroundImage: [
                `url(${dogOnLeash01})`
            ]

        }
    }

    componentDidMount() {

    }

    render(){

        return(

            <section id="banner" className="major" style={bannerBgImg}>

                <div className="inner">
                    <header className="major">
                        <div className="container">
                            <span className='text1'><h1>South Bay Sit N' Stay</h1></span>
                        </div>


                    </header>

                    <div className="content">
                        <p>Welcome</p>
                        <ul className="actions">
                            <li><a href="#one" className="button next scrolly">Get Started</a></li>
                        </ul>
                    </div>
                </div>
            </section>

        )
    }
}

export default Banner