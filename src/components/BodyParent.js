import React, {Component} from 'react';

import Landing from './layout/body/Landing'
import AboutUs from './layout/body/AboutUs'




class BodyParent extends Component{

    constructor(props) {
        super(props);
        this.state= {
            siteLocation: [{comp: <Landing/>} , {comp:  <AboutUs/>} ]
        };

        this.checkLocation = this.checkLocation.bind(this);
        this.mapLocation = this.mapLocation.bind(this);
        this.setLocation=this.setLocation.bind(this);

    }

    checkLocation(loc){
        loc = this.props.location.pathname;
        return loc
    }

    mapLocation(loc, locations){
        //----  MAPPED SITE COMPS   ------
        locations = this.state.siteLocation;
        const mappedLocation = locations.map(obj=>{
            const locationComp=[];

            locationComp.comp= obj.comp ;

            return locationComp
        });
        return mappedLocation
    }

    setLocation(loc, siteComps){

        loc = this.checkLocation(); //check path after everything is mapped
        siteComps = this.mapLocation();

        let renderLocation =null;

        if(loc ==='/'){
            renderLocation = siteComps[0].comp;
        }


        if(loc ==='/about-us'){
           renderLocation = siteComps[1].comp;
        }

        return renderLocation

    }


    componentDidMount(){
        this.checkLocation();
        this.mapLocation();
        this.setLocation();

    }
    render(){

        console.log(this.setLocation());

        return(
            <div className='body-parent'>
                {this.setLocation()}
            </div>
        )
    }
}

export default BodyParent