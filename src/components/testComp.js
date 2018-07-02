import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Dropdown from 'react-simple-dropdown';
import {DropdownTrigger, DropdownContent} from 'react-simple-dropdown'

import dogLaptop from '.././images/dog-laptop.jpg'
import pic10 from '.././images/pic10.jpg'

class TestMenu extends Component{
    render(){
        // console.log(Dropdown);

        return(
            <section id="landing-section">

                <div className='row'>
                   <div className='col-md-4'>
                       <div className='img-section'>
                           <img src={dogLaptop}/>
                       </div>
                   </div>

                    <div className='col-md-8'>

                        <div className='img-section-content'>

                            <div className='row-md-12'>
                                <h2>Meet Kayla</h2>
                            </div>

                            <div className='row-md-12'>
                                <button>Click Me</button>
                            </div>

                        </div>


                    </div>
                </div>

            </section>
        )
    }
}

export default TestMenu