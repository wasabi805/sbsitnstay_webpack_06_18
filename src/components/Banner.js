import React, {Component} from 'react';
import {Route, Link } from 'react-router-dom';



const dog_leash_01 = 'https://res.cloudinary.com/ocampot/image/upload/v1532397239/sbsitnstay/dog-leash-01.jpg'
const dogs_on_leash = 'https://res.cloudinary.com/ocampot/image/upload/v1532397698/sbsitnstay/dogs_on_leash.jpg'

// const bannerBgImg = {
//     backgroundImage: [`url(${dogOnLeash01})`]
// };


class Banner extends Component{

    constructor(props){
        super(props);
        this.state={

            thisPath: '',

            bannerBgData:[
                {title: "South Bay Sit N' Stay!!", backgroundImage: dog_leash_01},
                {title: "Who We Are!!!", backgroundImage: dog_leash_01}
            ]
        }
    }


    render(){

        const bannerBgImg01={
            backgroundImage: `url(${dog_leash_01})`
        };

        return(

            <section id="banner" className="major" style={bannerBgImg01}>

                <div className="inner">
                    <header className="major">
                        <div className="container">
                            <span className='text1'><h1>South Bay Sit N Stay</h1></span>
                        </div>


                    </header>

                    <div className="content">
                        <p>Welcome</p>
                        <ul className="actions">
                            <li><a href="#one" className="button next scrolly">Get Started</a></li>
                        </ul>
                    </div>
                </div>
            </section>

        )
    }
}

export default Banner

