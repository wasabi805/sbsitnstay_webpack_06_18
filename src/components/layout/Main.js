import React from 'react';


import BannerParent from '../BannerParent';
import BodyParent from '../BodyParent'


const Main =(props)=>{

    console.log(props);
    return(
        <div className='bg-info'>
            <BannerParent/>
            <BodyParent/>
        </div>
    )
};

export default Main