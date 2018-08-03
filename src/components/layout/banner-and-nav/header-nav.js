import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HeaderNav extends Component{
    render(){
        return(

                <ul className='header-nav-list list-inline'>

                    <li class="list-inline-item">
                        <Link to="#" class="nav-link">Home</Link>
                    </li>

                    <li class="list-inline-item"> <Link to="#" class="nav-link active">About</Link></li>
                    <li class="list-inline-item"> <Link to="#" class="nav-link">Services</Link></li>
                    <li class="list-inline-item"> <Link to="#" class="nav-link">Gallery</Link></li>
                    <li class="list-inline-item"> <Link to="#" class="nav-link">Contact</Link></li>
                </ul>



        )
    }
}

export default HeaderNav