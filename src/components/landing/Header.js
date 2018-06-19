import React, {Component} from 'react';

class Header extends Component {
    render(){
        return(

            <header id="header" className="alt style2">

                <a href="index.html" className="logo">
                    <strong>Forty</strong> <span>by HTML5 UP</span>

                </a>

                <nav>
                    <a href="#menu">Menu</a>
                </nav>

            </header>
        )
    }
}

export default Header