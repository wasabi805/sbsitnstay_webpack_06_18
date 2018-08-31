import React, {Component} from 'react'
// import CSSModules from 'react-css-modules'
// import styles from '../.././assets/css/home-about.css'
const test1 = "https://res.cloudinary.com/ocampot/image/upload/q_60/erica-magugliani-446666-unsplash.jpg"
const test2 = 'https://res.cloudinary.com/ocampot/image/upload/q_60/nicolas-tessari-218491-unsplash-FLIPPED.jpg'
const test3 ='https://res.cloudinary.com/ocampot/image/upload/q_60/jesse-schoff-56768-unsplash.jpg'
const test4 ='https://res.cloudinary.com/ocampot/image/upload/q_60/german-shepherd-using-laptop-desktop-background.jpg'

const solidBg = 'https://res.cloudinary.com/ocampot/image/upload/v1535745196/background-white-sand-beach-ameen-fahmy-527435-unsplash.jpg';

const LandingBody =(props)=>{


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
    }

    const bgImg2={
        backgroundImage: `url(${test2})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }

    const bgImg3={
        backgroundImage: `url(${test3})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }

    const bgImg4={
        backgroundImage: `url(${test4})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }


    return(
        <div className='landing-tiles-wrapper'>

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

                            {/*/!*ABOUT*!/*/}
            <div className='container'>
                <div className='row'>

                    <section className='section' style={bgImg1}></section>

                    <div className='homeAboutTextBox'>
                        <h1>{props.content[0].name}</h1>
                        <p>{props.content[0].small}</p>
                    </div>
                </div>
            </div>


                            {/*/!*SERVICES*!/*/}
            <div className='container'>
                <div className='row'>

                    <section className='section' style={bgImg2}></section>

                    <div className='homeAboutTextBox'>
                        <h1>{props.content[1].name}</h1>
                        <p>{props.content[1].small}</p>
                    </div>
                </div>
            </div>

                            {/*/!*GALLERY*!/*/}
            <div className='container'>
                <div className='row'>

                    <section className='section' style={bgImg3}></section>

                    <div className='homeAboutTextBox'>
                        <h1>{props.content[2].name}</h1>
                        <p>{props.content[2].small}</p>
                    </div>
                </div>
            </div>

                            {/*/!*CONTACT*!/*/}
            <div className='container'>
                <div className='row'>

                    <section className='section' style={bgImg4}></section>

                    <div className='homeAboutTextBox'>
                        <h1>{props.content[3].name}</h1>
                        <p>{props.content[3].small}</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

// export default CSSModules(LandingBody, styles)
export default LandingBody