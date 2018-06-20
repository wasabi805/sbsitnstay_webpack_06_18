import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render(){
        return(

            <header id="header" className="alt style2">

                <Link to="/" className="logo">
                    <strong>SbSitNStay</strong> <span>by HTML5 UP</span>

                </Link>

                <nav>
                    <a href="#menu">Menu</a>
                </nav>

            </header>
        )
    }
}

export default Header