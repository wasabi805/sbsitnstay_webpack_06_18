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
        this.mapComps()
    }


    mapComps(comps){

        comps = [
            {id:1, comp:  <Landing/>},
            {id:2, comp: <AboutUs/> },
            {id:3, comp: <TestComp01/>}

        ];

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

        let Landing = comps[0].comp;
        let AboutUs = comps[1].comp;
        let Services = comps[2].comp;

        let location = this.props.match.params.location;

        let renderLocation = [];


       console.log(this.props.match.params.location
       );


       if(this.props.match.path === '/'){
           renderLocation.push(Landing)
       }

       if(location === 'about-us'){
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