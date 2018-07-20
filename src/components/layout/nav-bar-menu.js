import React, {Component} from 'react'
import {Route, Link , Switch} from 'react-router-dom';

class NavBarMenu extends Component{

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
            <div>
                <nav className='navbar'>


                    <span className='open-slide'>
                        {/*TRIGGERS OPEN SLIDE MENU*/}
                        <a href='#'
                            onClick={this.onOpenSlideMenu}
                        >
                            <svg width='30' height='30'>
                                <path d='M0,5 30,5'   stroke='#fff' strokeWidth='5'/>
                                <path d='M0,14 30,14' stroke='#fff' strokeWidth='5'/>
                                <path d='M0,23 30,23' stroke='#fff' strokeWidth='5'/>
                            </svg>
                        </a>
                    </span>

                    <ul className='navbar-nav'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about-us'>About Us</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/gallery'>Gallery</Link></li>
                        <li><Link to='contact'>Contact</Link></li>

                    </ul>
                </nav>

                <div id='side-menu' className='side-nav'>
                    {/*TRIGGERS CLOSE SLIDE MENU*/}
                    <a href='#'
                       className='btn-close'
                       onClick={this.onCloseSlideMenu}>
                        {/*SVG "X"*/}
                        &times;
                    </a>

                    <a><Link to='/' onClick={this.onCloseSlideMenu}>Home</Link></a>

                    <a><Link to='/about-us' onClick={this.onCloseSlideMenu}>About Us</Link></a>
                    <a><Link to='/services' onClick={this.onCloseSlideMenu}>Services</Link></a>
                    <a><Link to='/gallery' onClick={this.onCloseSlideMenu}>Gallery</Link></a>
                    <a><Link to='/contact'onClick={this.onCloseSlideMenu}>Contact</Link></a>
                </div>


                {/*<div id='main-menu'>Test Responsive Side menu</div>*/}
                {/*NOTE: main-menu returns an empty div used for the slide nav menu*/}
                <div id='main-menu'>.</div>

            </div>

        )
    }

};

export default NavBarMenu





