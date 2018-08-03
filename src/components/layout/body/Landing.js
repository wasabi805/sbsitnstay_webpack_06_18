import React, {Component} from 'react';



class Landing extends Component{
    render(){
        return(

                <div className='landing-main row bg-primary p-0 m-0'>

                    <div className='landing-row row bg-success '>

                        {/* -----   -----   ABOUT US    -----   -----   */}
                        <div className='landing-tile col-5 '>
                            <img src="https://res.cloudinary.com/ocampot/image/upload/v1533245189/tmnt_2003_group_selfie_by_autobot2.jpg" alt=""/>
                        </div>



                        {/* -----   -----   SERVICES    -----   -----   */}
                        <div className='landing-tile col-7 '>
                            <img src="https://res.cloudinary.com/ocampot/image/upload/v1533245189/tmnt_2003_group_selfie_by_autobot2.jpg" alt=""/>
                        </div>
                    </div>



                    <div className='landing-row row '>

                        {/* -----   -----   GALLERY    -----   -----   */}
                        <div className='landing-tile col-7 '>
                            <img src="https://res.cloudinary.com/ocampot/image/upload/v1532398583/sbsitnstay/dog_leash.jpg" alt=""/>
                        </div>



                        {/* -----   -----   CONTACT    -----   -----   */}
                        <div className='landing-tile col-5 '>
                            <img src="https://res.cloudinary.com/ocampot/image/upload/v1533245189/tmnt_2003_group_selfie_by_autobot2.jpg" alt=""/>
                        </div>
                    </div>
                </div>


        )
    }
}

export default Landing