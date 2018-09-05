import React from 'react';
import {Link} from 'react-router-dom'

const HeaderNavigation = (props)=>{

    console.log(props);

    return(
        <header>
            <nav>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/location/about-us'><li>About</li></Link>
                    <Link to='/location/services'><li>Service</li></Link>
                    <Link to='/location/gallery'><li>Gallery</li></Link>
                    <Link to='/location/contact'><li>Contact</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNavigation