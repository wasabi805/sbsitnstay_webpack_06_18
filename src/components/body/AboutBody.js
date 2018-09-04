import React, {Component} from 'react'
// import CSSModules from 'react-css-modules'
// import styles from '../.././assets/css/home-about.css'
const test1 = "https://res.cloudinary.com/ocampot/image/upload/v1535753491/joanna-kosinska-453787-REVERSED-unsplash.jpg"
const test2 = 'https://res.cloudinary.com/ocampot/image/upload/v1535744895/joanna-kosinska-453787-unsplash.jpg'
const test3 ='https://res.cloudinary.com/ocampot/image/upload/q_60/jesse-schoff-56768-unsplash.jpg'
const test4 ='https://res.cloudinary.com/ocampot/image/upload/q_60/german-shepherd-using-laptop-desktop-background.jpg'

const Kayla = 'https://res.cloudinary.com/ocampot/image/upload/h_300,w_300/kayla-portrait.jpg'
const Catherine = 'https://res.cloudinary.com/ocampot/image/upload/v1532396286/sbsitnstay/catherine.jpg'

const solidBg = 'https://res.cloudinary.com/ocampot/image/upload/v1535745196/background-white-sand-beach-ameen-fahmy-527435-unsplash.jpg';

const AboutBody =(props)=>{

    const introTile = {
        backgroundImage: `url(${solidBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '22em',
    }


    const bgImg1 = {
        backgroundImage: `url(${test1})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        zIndex: -1,
    }

    const bgImg2={
        backgroundImage: `url(${test2})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }

    const tempTest ={
        backgroundImage: `url(${Kayla})`,
        height: '18em',
        width: '34%',
        margin: 'auto',
        backgroundPosition: 'center',
        backgroundSize: 'cover',

        // left:' 49em',
        top: '-19em',
        right: '-5em'
    }



    return(

            <div className='container w-100'>

                <div className='row'>

                    <div className='col-8 textBoxGeneric'>
                        <h1>Meet Kayla</h1>
                        <p>OTHER THINGS about kayla</p>
                    </div>

                    <div className='col-4 mb-2 img-cont'>
                       <div className='img-cont-kayla'>
                           {/*<img src={Kayla}/>*/}
                       </div>
                    </div>

                </div>

                <div className='row'>

                    <div className='col-4 mb-2 img-cont-catherine'>
                        <div className='img-cont'>
                            {/*<img src={Kayla}/>*/}
                        </div>
                    </div>

                    <div className='col-8 textBoxGeneric'>
                        <h1>Meet Kayla</h1>
                        <p>OTHER THINGS about kayla</p>
                    </div>

                </div>


                <div className='row'>

                    <div className='col-8 textBoxGeneric'>
                        <h1>Meet Kayla</h1>
                        <p>OTHER THINGS about kayla</p>
                    </div>

                    <div className='col-4 mb-2 img-cont-yuko'>
                        <div className='img-cont'>
                            {/*<img src={Kayla}/>*/}
                        </div>
                    </div>

                </div>

            </div>

    )
}


export default AboutBody