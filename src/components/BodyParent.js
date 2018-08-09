import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import Landing from './layout/body/Landing'
import AboutUs from './layout/body/AboutUs'
import Services from './layout/body/Services'





class BodyParent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: ['/', 'about-us', 'services']
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
            {id:3, comp: <Services/>}

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

        let renderLocation = null;


       console.log(this.props.match.params.location
       );


       if(this.props.match.path === this.state.locations[0]){
           renderLocation = Landing
       }

       if(location === 'about-us'){
           renderLocation = AboutUs
       }

        if(location === 'services'){
            renderLocation=Services
        }







        return(
            <div>
                {renderLocation}
            </div>
        )





    }

}

export default BodyParent