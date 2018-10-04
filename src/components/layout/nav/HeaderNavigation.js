import React, {Component} from 'react';
import {connect} from 'react-redux'
import {openNavModal} from "../../../actions/main-container-actions";

import {Link} from 'react-router-dom'


class HeaderNavigation extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props, 'SEE HAMBURGER?');
        return(
            <header className='header-nav-cont'>

                <div className="container" onClick={this.props.handleOpenNavModal} >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <nav className='nav-link-cont'>
                    <ul>
                        <li id='landingRoute'>Home</li>
                        <li id='aboutRoute' >About</li>
                        <li id='servicesRoute' >Services</li>
                        <li id='galleryRoute' >Gallery</li>
                        <li id='contactRoute' >Contact</li>
                    </ul>
                </nav>
            </header>
        )
    }



}

const mapDispatchToProps = (dispatch) =>{
    return({
        handleOpenNavModal: ()=> dispatch(openNavModal())
    })
}

export default connect(null, mapDispatchToProps )(HeaderNavigation)