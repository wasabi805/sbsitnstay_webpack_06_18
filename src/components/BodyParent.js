import React, {Component} from 'react';

import Landing from './layout/body/Landing'
import AboutUs from './layout/body/AboutUs'




class BodyParent extends Component{

    constructor(props) {
        super(props);
        this.state={

        };

        this.setLocation = this.setLocation.bind(this);

    }

    setLocation(location){

        location = this.props.location.pathname;

        const setLocationComp=[];

        const locations=[
            <Landing/> ,
            <AboutUs/>
        ];
        switch(location){
            case '/landing' :
                setLocationComp.push(locations[0]);
                break;
        }
        switch(location){
            case '/about-us' :
                setLocationComp.push(locations[1]);
                break;
        }
        return setLocationComp


    }
    componentDidMount(){
        this.setLocation();

    }
    render(){

        return(
            <div className='body-parent'>
                {this.setLocation()}
            </div>
        )
    }
}

export default BodyParent