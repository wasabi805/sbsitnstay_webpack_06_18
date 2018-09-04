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
                <div className='both-navs container-fluid'>

                    <div className='navbar row bg-success'>

                        {/* -----   -----   -----   Slide (hamburger-icon) icon   -----   -----*/}
                        <span className='open-slide'>
                            <a href='#' onClick={this.onOpenSlideMenu}>
                                <svg className='hamburger-icon'>
                                    <path d="M0,5 30,5" stroke="#fff" strokeWidth="5"/>
                                    <path d="M0,14 30,14" stroke="#fff" strokeWidth="5"/>
                                    <path d="M0,23 30,23" stroke="#fff" strokeWidth="5"/>
                                </svg>

                            </a>
                        </span>

                    </div>

                    {/*-----    -----   -----   Slide Menu(contains the li's)     ----    ----    ----    */}
                    {/*NOTE: id is used only for js to target*/}

                    <div id="side-menu" className="side-nav">
                        {/*this is the 'X' to close the menu*/}
                        <a href="#" className='btn-close' onClick={this.onCloseSlideMenu}>&times; </a>
                        <a href="/" >Home </a>
                        <a href="/location/about-us" >About Us </a>
                        <a href="/location/services" >Services </a>
                        <a href="/location/gallery" >Gallery </a>
                        <a href="/location/contact" >Contact </a>
                    </div>

                    {/*slideNav uses this as a ref from where to push off*/}
                    {/*<div id='main-menu'>TEST FOR RESPONSE</div>*/}

                    <div className='nav-header-links'>
                        <ul className="nav nav-pills justify-content-end">
                            <li className="nav-item">
                                <a href="/" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="/location/about-us" className="nav-link active">About us</a>
                            </li>
                            <li className="nav-item">
                                <a href="/location/services" className="nav-link">Services</a>
                            </li>
                            <li className="nav-item">
                                <a href="/location/gallery" className="nav-link">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a href="/location/contact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>

        )
    }

};

export default NavSlideIcon





