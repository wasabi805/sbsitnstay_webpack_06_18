import React, {Component} from 'react'
import {Route, Link , Switch} from 'react-router-dom';

class NavSlideIcon extends Component{

    constructor(props){
        super(props);
        this.state={


        }

        this.onClick=this.onClick.bind(this);
        this.onOpenSlideMenu=this.onOpenSlideMenu.bind(this);
        this.onCloseSlideMenu=this.onCloseSlideMenu.bind(this);

    }

    onOpenSlideMenu(event){
        document.getElementById('side-menu').style.width = '250px';
        document.getElementById('main-menu').style.marginLeft = '250px';
    }

    onCloseSlideMenu(event){
        document.getElementById('side-menu').style.width = '0px';
        document.getElementById('main-menu').style.marginLeft = '0px';

    }


    onClick(){

    }

    render(){
        return(
                <div className='both-navs container'>
                    <div className='navbar'>

                        {/* -----   -----   -----   Slide (hamburger-icon) icon   -----   -----*/}
                        <span className='open-slide'>

                            <a href='#' onClick={this.onOpenSlideMenu}>

                                <svg className='hamburger-icon'>
                                    <path d="M0,5 30,5" stroke="#fff" stroke-width="5"/>
                                    <path d="M0,14 30,14" stroke="#fff" stroke-width="5"/>
                                    <path d="M0,23 30,23" stroke="#fff" stroke-width="5"/>
                                </svg>

                            </a>

                        </span>

                        {/*-----    -----   -----   Header Nav Links     ----    ----    ----    */}


                        <div>
                            CAN YOU SEE ME?
                        </div>


                        <ul className='navbar-nav'>
                            <li><a href="#" className='navbar-nav-a'>Home</a></li>
                            <li><a href="#" className='navbar-nav-a'>About Us</a></li>
                            <li><a href="#" className='navbar-nav-a'>Services</a></li>
                            <li><a href="#" className='navbar-nav-a'>Gallery</a></li>
                            <li><a href="#" className='navbar-nav-a'>Contact</a></li>

                        </ul>

                        I'm the navbar
                    </div>




                    {/*-----    -----   -----   Slide Menu(contains the li's)     ----    ----    ----    */}
                    {/*NOTE: id is used only for js to target*/}

                    <div id="side-menu" className="side-nav">
                        {/*this is the 'X' to close the menu*/}
                        <a href="#" className='btn-close' onClick={this.onCloseSlideMenu}>&times; </a>
                        <a href="#" >Home </a>
                        <a href="#" >About Us </a>
                        <a href="#" >Services </a>
                        <a href="#" >Gallery </a>
                        <a href="#" >Contact </a>
                    </div>

                    {/*slideNav uses this as a ref from where to push off*/}
                    {/*<div id='main-menu'>TEST FOR RESPONSE</div>*/}

                </div>

        )
    }

};

export default NavSlideIcon





