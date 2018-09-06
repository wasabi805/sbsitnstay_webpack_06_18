import React, {Component} from 'react';
import HeaderNavigation from './layout/nav/HeaderNavigation'

class Services extends Component{
    render(){

        const classNames = require('classnames');
        let ServiceStyle = classNames('app-section2','app-parallax', 'bgServices1')
        return(
            <main className="app-wrapper2">
                <HeaderNavigation/>

                {/*BANNER*/}
                <section className={ServiceStyle}>
                    <h1>Services</h1>
                </section>

                <section className="app-section app-static">
                    <h1>Boring</h1>
                </section>

                <section className="section parallax bgServices2">
                    <h1>WU TANG</h1>
                </section>

                {/*Body*/}
                <div className='body' >
                    <div className='card-landing bg-primary mb-5' onClick={this.handleClickAbout}>
                        <div className='card-text-box-left'>
                            <h1>Walking</h1>
                            <p>MORE TEXT TO COME</p>
                        </div>

                        <div className='about-profile-pic-right'>
                            <img src="https://res.cloudinary.com/ocampot/image/upload/w_400,h_400/leonides-ruvalcabar-738807-unsplash.jpg"/>
                        </div>


                        <img src="https://res.cloudinary.com/ocampot/image/upload/v1536108371/joe-woods-739738-unsplash.jpg"/>
                    </div>

                    <div className='card-landing bg-primary mb-5' onClick={this.handleClickServices}>
                        <div className='card-text-box-right'>
                            <h1>Feeding</h1>
                            <p>MORE TEXT TO COME</p>
                        </div>

                        <div className='about-profile-pic-left'>
                            <img src="https://res.cloudinary.com/ocampot/image/upload/w_400,h_400/sbsitnstay/pups_eating.jpg"/>
                        </div>

                        <img src="https://res.cloudinary.com/ocampot/image/upload/v1536108371/joe-woods-739738-unsplash.jpg"/>
                    </div>

                    <div className='card-landing bg-primary mb-5' onClick={this.handleClickGallery}>
                        <div className='card-text-box-left'>
                            <h1>Drop ins</h1>
                            <p>MORE TEXT TO COME</p>

                        </div>

                        <div className='about-profile-pic-right'>
                            <img src="https://res.cloudinary.com/ocampot/image/upload/w_400,h_400/pug-life-sarandy-westfall-603305-unsplash.jpg"/>
                        </div>

                        <img src="https://res.cloudinary.com/ocampot/image/upload/v1536108371/joe-woods-739738-unsplash.jpg"/>
                    </div>


                    <div className='card-landing bg-primary mb-5' onClick={this.handleClickServices}>
                        <div className='card-text-box-right'>
                            <h1>Overnights</h1>
                            <p>MORE TEXT TO COME</p>
                        </div>

                        <div className='about-profile-pic-left'>
                            <img src="https://res.cloudinary.com/ocampot/image/upload/w_400,h_400/tj-kolesnik-506656-dog-sleeping2-unsplash.jpg"/>
                        </div>

                        <img src="https://res.cloudinary.com/ocampot/image/upload/v1536108371/joe-woods-739738-unsplash.jpg"/>
                    </div>

                    <div className='card-landing bg-primary mb-5' onClick={this.handleClickGallery}>
                        <div className='card-text-box-left'>
                            <h1>Adevntures
                            </h1>
                            <p>MORE TEXT TO COME</p>

                        </div>

                        <div className='about-profile-pic-right'>
                            <img src="https://res.cloudinary.com/ocampot/image/upload/w_400,h_400/savs-511877-cropped-unsplash.jpg"/>
                        </div>

                        <img src="https://res.cloudinary.com/ocampot/image/upload/v1536108371/joe-woods-739738-unsplash.jpg"/>
                    </div>
                </div>
            </main>
        )
    }
}

export default Services