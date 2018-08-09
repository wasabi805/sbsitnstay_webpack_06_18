import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import Landing from './layout/body/Landing'
import AboutUs from './layout/body/AboutUs'
import GenericBodyComp from './layout/body/GenericBodyComp'
import TestComp01 from './testComp01'
import TestComp02 from './testComp02'




class BodyParent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: ['about-us', 'test-comp-01']
        };

        // this.handleAboutUs = this.handleAboutUs.bind(this);
        this.mapComps = this.mapComps.bind(this)
    }

    componentDidMount(){

    }


    mapComps(comps){

        comps = [
            {id:1, comp: <AboutUs/> },
            {id:2, comp: <TestComp01/> }];

            let compMapperBody = comps.map(obj=>{

            let mappedComps = {};

            mappedComps.key = obj.id;
            mappedComps.comp = obj.comp;

            return mappedComps

        });

        return compMapperBody

    }


    render(){


        let comps = this.mapComps();

        let AboutUs = comps[0].comp;
        let Services = comps[1].comp;

        let location = this.props.match.params.location;

        let renderLocation = [];


        if(location === this.state.locations[0]){
            renderLocation.push(AboutUs)
        }


        return(
            <div>
                {renderLocation[0]}
            </div>
        )
    }

}

export default BodyParent