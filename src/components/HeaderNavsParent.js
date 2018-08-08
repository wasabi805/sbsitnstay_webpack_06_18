import React, {Component} from 'react';

import SideNavIcon from './layout/banner-and-nav/side-nav'

class HeaderNavsParent extends Component{
    render(){
        return(
            <div className='header-navs-parent container-fluid'>

                <SideNavIcon/>
            </div>
        )
    }
}

export default HeaderNavsParent