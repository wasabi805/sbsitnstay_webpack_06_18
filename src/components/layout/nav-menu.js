import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import pic10 from '../../images/pic10.jpg'

// import NavMenu from './layout/nav-menu'

//      -----   THIS IS THE OLD NAVBAR  -------
class NavBarMenu extends Component{

    constructor(props){
        super(props);
        this.state={
            isHidden: true
        }
    }


    render(){


        return(
            <header className='navDiv container'>
                {/*v-header container*/}

                <div className="navMenu-wrap">
                    <img src={pic10}/>
                </div>


                <div className='header-overlay'></div>
                {/*header-overlay*/}

                <div className='header-content'>

                    {/*<ul className="links">*/}
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="landing.html">Landing</a></li>
                        <li><a href="generic.html">Generic</a></li>
                        <li><a href="elements.html">Elements</a></li>
                    </ul>

                    {/*<ul className="actions vertical">*/}
                    <ul>
                        <li><a href="#" className="button special fit">Get Started</a></li>
                        <li><a href="#" className="button fit">Log In</a></li>
                    </ul>
                </div>

            </header>
        )
    }
}

export default NavBarMenu