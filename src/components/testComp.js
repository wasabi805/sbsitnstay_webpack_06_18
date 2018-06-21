import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

import Dropdown from 'react-simple-dropdown';
import {DropdownTrigger, DropdownContent} from 'react-simple-dropdown'

// const DropdownTrigger = Dropdown.DropdownTrigger;
// const DropdownContent = Dropdown.DropdownContent;

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
                        <ul>
                            <li>
                                <a href="/profile">Profile</a>
                            </li>

                            <li>
                                <a href="/favorites">Favorites</a>
                            </li>

                            <li>
                                <a href="/logout">Log Out</a>
                            </li>
                        </ul>
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