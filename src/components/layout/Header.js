import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.menuRef = React.createRef();
        this.state={

        };

        this.onclick=this.onclick.bind(this);
        this.showMenu=this.showMenu.bind(this)

    }

    showMenu(){
        let show = this.menuRef.current;
        console.log(show);
    }

    onclick(func){

        func = this.showMenu();
        return func
    }








    render(){


        return(

            <div id="wrapper">

                {/*Header*/}
                <header id="header" className="alt">
                    <Link to="/" className="logo"><strong>Forty</strong> <span>by HTML5 UP</span></Link>
                    <nav>
                        <a href="#menu"
                              ref={this.menuRef}
                              onClick={this.onclick}

                        >Menu</a>
                    </nav>
                </header>

                {/*Menu*/}
                <nav id="menu">
                    <ul className="links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="landing.html">Landing</a></li>
                        <li><a href="generic.html">Generic</a></li>
                        <li><a href="elements.html">Elements</a></li>
                    </ul>
                    <ul className="actions vertical">
                        <li><a href="#" className="button special fit">Get Started</a></li>
                        <li><a href="#" className="button fit">Log In</a></li>
                    </ul>
                </nav>


            </div>
        )
    }
}

export default Header