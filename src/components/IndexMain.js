import React, {Component} from 'react'

import {Route, Link } from 'react-router-dom';

// import dogLeash from '.././images/dog-leash.jpg'
// import dogsOnLeash from '.././images/dogs-on-leash.jpg'
const kayla = 'https://res.cloudinary.com/ocampot/image/upload/v1532396652/sbsitnstay/kayla-profile.jpg';
const dogs_on_leash = 'https://res.cloudinary.com/ocampot/image/upload/v1532397698/sbsitnstay/dogs_on_leash.jpg';
const dog_leash = 'https://res.cloudinary.com/ocampot/image/upload/v1532398583/sbsitnstay/dog_leash.jpg';
const dog_laptop = 'https://res.cloudinary.com/ocampot/image/upload/v1532398723/sbsitnstay/dog_laptop.jpg'

// console.log(this.props.children, 'THIS.PROPS.CHILDREN');
class IndexMain extends Component{

    constructor(props){
        super(props);
        this.state={

            tiles: [
                {title:'Meet the Crew!',pathSrc:'/about-us', msg: 'Get acquainted with out sitters', img: kayla},
                {title: 'Services', pathSrc: '/services', msg: 'What we can do for you and your pup', img: dogs_on_leash},
                {title: 'Gallery', pathSrc: '/gallery', msg: 'Join the gang!', img: dog_leash},
                {title: 'Contact', pathSrc: '/contact', msg: 'Get in touch with us!', img: dog_laptop}
            ]
        }

    }


    render(){

        const titleMapper = this.state.tiles.map((item)=> {

            let tiles=[];

            const tileMapper =
                <article id='myTile'>
                    <span class="index-tile">
                        <img className='index-tile-image' src={item.img} alt="" />
                    </span>
                    <header className="major-tile-cont">
                        <h3>
                            <Link to={item.pathSrc} className="link">
                                {item.title}
                            </Link>
                        </h3>
                        <p>{item.msg}</p>
                    </header>
                </article>;

            tiles.push(tileMapper);

            return tiles

        });

        console.log(titleMapper);

        return(
            <div id="main">


                {/*One*/}
                <section id="one" className="tiles">

                    {titleMapper[0]}
                    {titleMapper[1]}
                    {titleMapper[2]}
                    {titleMapper[3]}

                </section>



            </div>


        )
    }
}


export default IndexMain