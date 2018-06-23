import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Dropdown from 'react-simple-dropdown';
import {DropdownTrigger, DropdownContent} from 'react-simple-dropdown'
import routes from '../../routes';

import pic10 from '../../images/pic10.jpg'

class NavBarMenu extends Component{
    render(){
        routes
        return(
            <div className='myNav'>
                <Dropdown >

                    <DropdownTrigger><span className='hamberger'>&#9776;</span></DropdownTrigger>

                    <DropdownContent>

                        <div className='burger container'>

                            <div className="burger-bg-wrap">
                                <img src={pic10}/>
                            </div>

                            {/*<div className='burger-bg-wrap-overlay'></div>*/}

                            <ul className='burger-list-main'>

                                <div className='burger-list-content'>

                                    {/*<ul className="links">*/}
                                    <ul className='burger-list'>
                                        <li className='burger-item'><Link to="/">Home</Link></li>
                                        <li className='burger-item'><Link to="/about-us">About US</Link></li>
                                        <li className='burger-item'><Link to="/services">Services</Link></li>
                                        <li className='burger-item'><Link to="/gallery">Gallery</Link></li>
                                        <li className='burger-item'><Link to="/contact">Contact</Link></li>
                                    </ul>

                                    {/*<ul className="actions vertical">*/}
                                    <ul className='burger-buttons'>
                                        <li className='burger-item'><a href="#" className="burger-route">Register Account</a></li>
                                        <li className='burger-item'><a href="#" className="burger-route">Log In</a></li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                    </DropdownContent>
                </Dropdown>
            </div>
        )
    }
}

export default NavBarMenu