import React, {Component} from 'react';

import SectionBody from './section-body'


class AboutUs extends Component{

    constructor(props){
        super(props);
        this.state={

            path: 'about-us',
            testMe: 'foo'
        }
    }

    componentDidMount(){

    }


    render(){
        return(
            <SectionBody thisPath={this.state.path}/>
        )
    }
}

export default AboutUs