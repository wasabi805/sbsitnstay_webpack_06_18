import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import Landing from './layout/body/Landing'
import AboutUs from './layout/body/AboutUs'
import GenericBodyComp from './layout/body/GenericBodyComp'
import TestComp01 from './testComp01'
import TestComp02 from './testComp02'

class BodyParent extends Component {

    constructor(props){
        super(props);
        this.state={
            isHidden01: true,
            isHidden02: true
        };

        this.toggleIsHidden01 = this.toggleIsHidden01.bind(this)
        this.toggleIsHidden02 = this.toggleIsHidden02.bind(this)
    }

    toggleIsHidden01(){
        this.setState({isHidden01:!this.state.isHidden01})
    }

    toggleIsHidden02(){
        this.setState({isHidden02:!this.state.isHidden02})
    }

    componentDidMount(){

        console.log(this.props.location.pathname);
        if(this.props.location.pathname === '/test01'){
            this.toggleIsHidden01();
        }

        if(this.props.location.pathname === '/test02'){
            this.toggleIsHidden02();
        }

    }

    render(){
        return(
            <div>
                {!this.state.isHidden01 && < TestComp01/>}
                {!this.state.isHidden02 && < TestComp02/>}
            </div>
        )
    }

}

export default BodyParent