import React, {Component} from 'react';



const AboutUsText =(props)=>{

    if(props.isHoveredKayla && props.isKayla){

        return(

            //KAYLA BIO
            <div id='landing-content'>
                <p>
                    And oh my love remind me, what was it that I said?
                    I can't help but pull the earth around me, to make my bed
                    And oh my love remind me, what was it that I did?
                    Did I drink too much?
                    Am I losing touch?
                    Did I build this ship to wreck?
                </p>
            </div>
        )
    }

    if(props.isHoveredCatherine && props.isCatherine){
        return(
            //CATHERINE BIO
            <div className='landing-content'>

                <p>"Cause day and night, The lonely stoner seems to free his mind at night,
                    He's all alone somethings will never change,
                    The lonely loner seems to free his mind at night
                    (at, at, at night)"</p>
            </div>
        )
    }

    if(props.isHoveredYuko && props.isYuko){
        return(
            //YUKO BIO
            <div className='landing-content'>
                <p>
                    Last night took an L, but tonight I bounce back ,
                    Wake up every morning, by the night, I count stacks,
                    Knew that ass was real when I hit, it bounce back'
                </p>
            </div>
        )
    }

    else{
        return null
    }


};

export default AboutUsText