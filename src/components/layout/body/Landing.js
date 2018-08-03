import React, {Component} from 'react';



class Landing extends Component{
    render(){
        return(

                <div className='landing-main container-fluid bg-primary p-0 m-0'>

                    <div className='landing-row row bg-success'>

                        {/* -----   -----   ABOUT US    -----   -----   */}
                        <div className='landing-tile col-sm-5 p-0'>
                            <img className='img-fluid' src="https://res.cloudinary.com/ocampot/image/upload/v1533245189/tmnt_2003_group_selfie_by_autobot2.jpg" alt=""/>
                        </div>



                        {/* -----   -----   SERVICES    -----   -----   */}
                        <div className='landing-tile col-sm-7 p-0'>
                            <img className='' src="https://res.cloudinary.com/ocampot/image/upload/v1532397698/sbsitnstay/dogs_on_leash.jpg" alt=""/>
                        </div>


                        {/* -----   -----   GALLERY    -----   -----   */}
                        <div className='landing-tile col-sm-6 p-0'>
                            <img className='' src="https://res.cloudinary.com/ocampot/image/upload/v1532398583/sbsitnstay/dog_leash.jpg" alt=""/>
                        </div>


                        {/* -----   -----   CONTACT    -----   -----   */}
                        <div className='landing-tile col-sm-6 p-0'>
                            <img className='' src="https://res.cloudinary.com/ocampot/image/upload/v1532398723/sbsitnstay/dog_laptop.jpg" alt=""/>
                        </div>
                    </div>
                </div>


        )
    }
}

export default Landing