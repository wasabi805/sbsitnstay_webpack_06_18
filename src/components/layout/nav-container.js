import React, {Component} from 'react';
import {Route,Link, Switch} from 'react-router-dom';
//----- ------  ------  -----
import Dropdown from 'react-simple-dropdown';
import {DropdownTrigger, DropdownContent} from 'react-simple-dropdown'
import pic10 from '../../images/pic10.jpg'
//----- ------  ------  -----


import NavBarMenu from './nav-bar-menu'







class NavContainer extends Component{

    constructor(props){
        super(props);
        this.state={

        };


    }
    render(){

        return(

                <div>
                    <NavBarMenu/>
                </div>

        )
    }
}

export default NavContainer