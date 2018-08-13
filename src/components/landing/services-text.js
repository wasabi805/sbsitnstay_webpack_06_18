import React, {Component} from 'react';


const ServiceText =(props)=>{

    if(props.isHovered && props.isWalking){
        // console.log(props, '1+1=2');

       return(

           <div id='landing-content'>
              <p>
                  'I grew up on the crime side, the New York Times side\n' +
                  'Staying alive was no jive\n' +
                  'Had second hands, moms bounced on old men\n' +
                  'So then we moved to Shaolin land\n' +
                  'A young youth, yo rockin\' the gold tooth, \'Lo goose\n' +
                  'Only way, I begin to G off was drug loo'
              </p>
           </div>
       )
    }

    if(props.isHoveredFeeding && props.isFeeding){
        return(

            <div className='landing-content'>

                <p>"Cause day and night, The lonely stoner seems to free his mind at night,
                    He's all alone somethings will never change,
                    The lonely loner seems to free his mind at night
                    (at, at, at night)"</p>
            </div>
        )
    }

    if(props.isHoveredOverNight && props.isOverNight){
       return(
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

export default ServiceText


