import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import NavBarMenu from './nav-menu';


class Header extends Component {
    constructor(props){
        super(props);

        this.state={
            wasClicked: false
        };



        this.onclick=this.onclick.bind(this);
        this.handleClick=this.handleClick.bind(this)

    }

    handleClick(e) {

        console.log(e);

        this.setState({
            wasClicked: true
        })

        console.log(this.state.wasClicked);

    }


    onclick(e){

        console.log(e, 'from onClick');

        x = this.handleClick();

        return(x)

    }

    render(){

        console.log(this.state.wasClicked);

        return(

            <div id="wrapper">

                {/*Header*/}
                <header id="header" className="alt">
                    <Link to="/" className="logo"><strong>Forty</strong> <span>by HTML5 UP</span></Link>

                    {/*Menu link IN HEADER*/}
                    <nav>
                        <Link to="/" ref={this.menuRef} onClick={this.handleClick}>
                            Menu
                        </Link>
                    </nav>
                </header>


            </div>
        )
    }
}

export default Header