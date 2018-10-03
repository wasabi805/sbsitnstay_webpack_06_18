import React from 'react';
import {Link} from 'react-router-dom'

const HeaderNavigation = (props)=>{
            console.log(props, 'SEE HAMBURGER?');

    return(
        <header className='header-nav-cont'>

            <div className="container" onClick={props.openNavModal} >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>

            <nav className='nav-link-cont'>
                <ul>
                    <li id='landingRoute' onClick={(e) => props.handleRedirect(e )}>Home</li>
                    <li id='aboutRoute' onClick={(e) => props.handleRedirect(e )}>About</li>
                    <li id='servicesRoute' onClick={(e) => props.handleRedirect(e )}>Services</li>
                    <li id='galleryRoute' onClick={(e) => props.handleRedirect(e )}>Gallery</li>
                    <li id='contactRoute' onClick={(e) => props.handleRedirect(e )}>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNavigation