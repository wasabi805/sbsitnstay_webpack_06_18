import React, {Component} from 'react';



class Landing extends Component{
    render(){
        return(

                <div className='landing-main-container container'>

                    <div className='row'>
                        <div className='col-5 landing-col bg-primary'>
                            <div class="card">

                                <img class="card-img" src="https://res.cloudinary.com/ocampot/image/upload/v1533245189/tmnt_2003_group_selfie_by_autobot2.jpg" alt=""/>

                                    <div class="card-img-overlay">
                                        <h4 class="card-title text-white">Card title</h4>
                                        <p class="card-text text-light">This is a wider card with supporting text below as a natural lead-in to additional content. This content
                                            is a little bit longer.</p>
                                        <p class="card-text">
                                            <small class="text-muted">Last updated 3 mins ago</small>
                                        </p>
                                    </div>
                            </div>
                        </div>




                        <div className='col-7 landing-col bg-success'>
                            <div className='card'>

                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-7 landing-col bg-danger'>
                            <div className='card'>

                            </div>
                        </div>

                        <div className='col-5 landing-col bg-info'>
                            <div className='card'>

                            </div>
                        </div>
                    </div>
                </div>


        )
    }
}

export default Landing