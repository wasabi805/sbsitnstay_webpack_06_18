import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

import Dropdown from 'react-simple-dropdown';
import {DropdownTrigger, DropdownContent} from 'react-simple-dropdown'


import pic10 from '.././images/pic10.jpg'

// import NavMenu from './layout/nav-menu'


class TestMenu extends Component{



    render(){

        console.log(Dropdown);

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
                                        <li className='burger-item'><a href="/">Home</a></li>
                                        <li className='burger-item'><a href="landing.html">Landing</a></li>
                                        <li className='burger-item'><a href="generic.html">Generic</a></li>
                                        <li className='burger-item'><a href="elements.html">Elements</a></li>
                                    </ul>

                                    {/*<ul className="actions vertical">*/}
                                    <ul className='burger-buttons'>
                                        <li className='burger-item'><a href="#" className="burger-route">Get Started</a></li>
                                        <li className='burger-item'><a href="#" className="burger-route">Log In</a></li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                    </DropdownContent>
                </Dropdown>
            </div>



            // {/*<div className='myNav'>*/}
            //
            //     {/*<label htmlFor="toggle"> &#9776; </label>*/}
            //
            //     {/*<input type="checkbox" id="toggle"/>*/}
            //
            //     {/*<div className='myMenu'>*/}
            //         {/*<a href="#"> Link1 </a>*/}
            //         {/*<a href="#"> Link2 </a>*/}
            //         {/*<a href="#"> Link3 </a>*/}
            //         {/*<a href="#"> Link4 </a>*/}
            //         {/*<a href="#"><span className='mySpan'>Link5</span></a>*/}
            //     {/*</div>*/}
            //
            // // </div>

        )
    }
}

export default TestMenu