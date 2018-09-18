import React, {Component} from 'react'
import styled from 'styled-components'

class MasonryModal extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }

    componentWillMount(){
        console.log( this.props, 'bout to do this');
    }


    render(){
        console.log(this.props, 'is showmodal here?');
        return(
            <div id="myModal" className='modal'>
                <span className='close'>&times;</span>
                <img className="modal-content" id="img01" src=''/>
                <div id="caption"></div>
            </div>
        )
    }
}

export default MasonryModal