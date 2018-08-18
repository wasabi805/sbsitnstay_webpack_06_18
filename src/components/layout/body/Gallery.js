import * as React from 'react';
import Masonry from 'react-masonry-component'




const Gallery = (props)=>{

    let {imgs} = props;

    let style1 = {
        backgroundColor : '#7a43b6',
        maxWidth : '400px',
        maxHeight: '400px',
    };

    let style2={
        height: '100%',
        width: '100%',

    }

    const childElements = imgs.map((imgTest, key)=>{

        key = imgTest.id;

        console.log(key);


        return(
            <li key={key} style={style1} className='image-element-class'>
                <img style={style2} src={imgTest.src}/>
            </li>
        )
    });

    return(

        <Masonry className={'my-gallery-class'}
                 elementType={'ul'}

        >
           { childElements}
        </Masonry>

    )
};

export default Gallery



