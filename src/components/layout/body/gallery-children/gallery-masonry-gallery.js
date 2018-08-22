import React, {Component} from 'react'

const MasonryGallery = (props)=>{


    return(

        <div className='masonry-main container'>
            <div className='row '>

                <div className='column'>
                    {props.col1}
                </div>

                <div className='column'>
                    {props.col2}
                </div>

                <div className='column'>
                    {props.col3}
                </div>

                <div className='column'>
                    {props.col4}
                </div>
            </div>
        </div>
    )
}

export default MasonryGallery