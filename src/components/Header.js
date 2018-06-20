import React, {Component} from "react";

class Header extends Component{
    render(){
        return(
            <header id="header" className="alt">

                <a href="index.html" className="logo"><strong>South Bay Sit N' Stay</strong> <span>by HTML5 UP</span></a>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>
        )
    }
}

export default Header