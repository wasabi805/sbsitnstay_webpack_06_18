import React, {Component} from 'react'

import SectionBody from './section-body'

class Services extends Component{

    constructor(props){
        super(props);
        this.state={

            path: 'services',
            testMe: 'bar'
        }
    }


    render(){
        return(
            <SectionBody thisPath={this.state.path}/>
        )
    }
}

export default Services