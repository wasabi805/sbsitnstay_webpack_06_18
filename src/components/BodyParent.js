import React, {Component} from 'react';
import Landing from './layout/body/Landing'

class BodyParent extends Component{
    render(){
        return(
            <div className='body-parent'>
                <Landing/>
            </div>
        )
    }
}

export default BodyParent