import React, {Component} from 'react'
// import CSSModules from 'react-css-modules'
// import styles from '../.././assets/css/home-about.css'
const test1 = "https://res.cloudinary.com/ocampot/image/upload/v1535753491/joanna-kosinska-453787-REVERSED-unsplash.jpg"
const test2 = 'https://res.cloudinary.com/ocampot/image/upload/v1535744895/joanna-kosinska-453787-unsplash.jpg'
const test3 ='https://res.cloudinary.com/ocampot/image/upload/q_60/jesse-schoff-56768-unsplash.jpg'
const test4 ='https://res.cloudinary.com/ocampot/image/upload/q_60/german-shepherd-using-laptop-desktop-background.jpg'

const Kayla = 'https://res.cloudinary.com/ocampot/image/upload/v1533777073/kayla-portrait.jpg'


const solidBg = 'https://res.cloudinary.com/ocampot/image/upload/v1535745196/background-white-sand-beach-ameen-fahmy-527435-unsplash.jpg';

const AboutUs =(props)=>{

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
        <div className='about-us-wrapper'>

            {/*/!*ABOUT*!/*/}
            <div className='container'>
                <div className='row'>

                    <section className='section' style={introTile}></section>


                        <div className='textBoxCenter'>
                            <h1>{props.content[0].name}</h1>
                            <p>{props.content[0].small}</p>
                        </div>

                </div>
            </div>






            {/*/!*KAYLA*!/*/}
            <div className='container'>
                <div className='row'>

                    <section className='section' style={bgImg1}></section>



                    <div className='homeAboutTextBox'>
                        <h1>{props.content[0].name}</h1>
                        <p>{props.content[0].small}</p>
                    </div>

                    <div className='card' style={tempTest} ></div>



                </div>
            </div>


            {/*/!*CATHERINE*!/*/}
            <div className='container'>
                <div className='row'>

                    <section className='section' style={bgImg2}></section>

                    <div className='homeAboutTextBox'>
                        <h1>{props.content[1].name}</h1>
                        <p>{props.content[1].small}</p>
                    </div>

                    <div className='card' style={tempTest} ></div>
                </div>
            </div>

            {/*/!*YUKO*!/*/}
            <div className='container'>
                <div className='row'>

                    <section className='section' style={bgImg1}></section>

                    <div className='homeAboutTextBox'>
                        <h1>{props.content[2].name}</h1>
                        <p>{props.content[2].small}</p>
                    </div>

                    <div className='card' style={tempTest} ></div>
                </div>
            </div>

        </div>
    )
}


export default AboutUs