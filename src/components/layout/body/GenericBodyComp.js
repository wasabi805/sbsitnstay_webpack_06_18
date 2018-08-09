import React, {Component} from 'react';

import {Link, Route, Switch} from 'react-router-dom';

import TestComp01 from '../../testComp01'
import TestComp02 from '../../testComp02'

class GenericBodyComp extends Component{

    constructor(props){
        super(props);
        this.state= {

        }
    };


    render(){

        console.log(this.props, 'frm generic');

        return(
            <div>


            </div>
        )
    }
}

export default GenericBodyComp