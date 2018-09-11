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
           <div className='body container w-80' >
               <div className='row landing-tile-body'>
                   <div className='col-6 ' >
                       <div className='container landing-tile'>
                           <img src="https://res.cloudinary.com/ocampot/image/upload/v1535670370/catarina-carvalho-406908-unsplash.jpg"/>
                           <p className='title'>Meet the Crew</p>
                           <div className='overlay'></div>

                           <div className='button '  id="aboutRoute"  onClick={
                               (e) => this.props.handleRedirect(e )}  >Meet the Crew</div>
                       </div>
                   </div>

                   <div className='col-6 ' >
                       <div className='container landing-tile'>
                           <img src="https://res.cloudinary.com/ocampot/image/upload/v1535670372/nicolas-tessari-218491-unsplash.jpg"/>
                           <p className='title'>Services</p>
                           <div className='overlay'></div>
                           <Link to='/location/services'><div className='button '>What we do</div></Link>
                       </div>
                   </div>

                   <div className='col-6 ' >
                       <div className='container landing-tile'>
                           <img src="https://res.cloudinary.com/ocampot/image/upload/v1535455453/alvan-nee-259129-unsplash.jpg"/>
                           <p className='title'>Gallery</p>
                           <div className='overlay'></div>
                           <Link to='/location/gallery'><div className='button '>Our pals</div></Link>
                       </div>
                   </div>

                   <div className='col-6 ' >
                       <div className='container landing-tile'>
                           <img src="https://res.cloudinary.com/ocampot/image/upload/v1535713833/german-shepherd-using-laptop-desktop-background.jpg"/>
                           <p className='title'>Gallery</p>
                           <div className='overlay'></div>
                           <Link to='/location/contact'><div className='button '>Drop us a line</div></Link>
                       </div>
                   </div>
               </div>
           </div>
       )
   }

}

// export default CSSModules(LandingBody, styles)
export default LandingBody