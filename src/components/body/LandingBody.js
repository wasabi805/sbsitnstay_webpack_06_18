import React, {Component} from 'react';
import {Link} from 'react-router-dom'
// import {Link} from 'react-router-dom;'

const test1 = "https://res.cloudinary.com/ocampot/image/upload/q_60/erica-magugliani-446666-unsplash.jpg"
const test2 = 'https://res.cloudinary.com/ocampot/image/upload/q_60/nicolas-tessari-218491-unsplash-FLIPPED.jpg'
const test3 ='https://res.cloudinary.com/ocampot/image/upload/v1535670370/andrew-pons-9713-unsplash.jpg'
const test4 ='https://res.cloudinary.com/ocampot/image/upload/q_60/german-shepherd-using-laptop-desktop-background.jpg'

const solidBg = 'https://res.cloudinary.com/ocampot/image/upload/v1535745196/background-white-sand-beach-ameen-fahmy-527435-unsplash.jpg';

class LandingBody extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
   render(){

       console.log(this.props, 'LandingBody');

       return(
           <div></div>

       )
   }

}

// export default CSSModules(LandingBody, styles)
export default LandingBody