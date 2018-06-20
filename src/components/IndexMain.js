import React, {Component} from 'react'

import { BrowserRouter as Router,Route, Link } from 'react-router-dom';
import pic01 from '.././images/pic01.jpg'
import routes from '../routes';

import LandingMain from './landing/LandingMain'


// console.log(this.props.children, 'THIS.PROPS.CHILDREN');
class IndexMain extends Component{

    constructor(props){
        super(props);
        this.state={

            tiles: [
                {title:'Meet the Crew!',pathSrc:'/landing/about-us', msg: 'Get acquainted with out sitters' },
                {title: 'Services', pathSrc: '/landing/services', msg: 'What we can do for you and your pup'},
                {title: 'Gallery', pathSrc: '/landing/gallery', msg: 'Join the gang!'},
                {title: 'Contact', pathSrc: '/landing/contact', msg: 'Get in touch with us!'}
            ]
        }
    }


    render(){

        const titleMapper = this.state.tiles.map((item)=> {

            let tiles=[];

            const tileMapper =
                <article>

                    <span class="image">
                        <img src="images/pic01.jpg" alt="" />
                    </span>
                    <header className="major">
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