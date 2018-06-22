import React, {Component} from 'react'

import { BrowserRouter as Router,Route, Link } from 'react-router-dom';
import dogLeash from '.././images/dog-leash.jpg'



// console.log(this.props.children, 'THIS.PROPS.CHILDREN');
class IndexMain extends Component{

    constructor(props){
        super(props);
        this.state={

            tiles: [
                {title:'Meet the Crew!',pathSrc:'/about-us', msg: 'Get acquainted with out sitters', img: '.././images/dog-leash.jpg'},
                {title: 'Services', pathSrc: '/services', msg: 'What we can do for you and your pup', img: '.././images/dog-leash.jpg'},
                {title: 'Gallery', pathSrc: '/gallery', msg: 'Join the gang!', img: '.././images/dog-leash.jpg'},
                {title: 'Contact', pathSrc: '/contact', msg: 'Get in touch with us!', img: '.././images/dog-leash.jpg'}
            ]
        }
    }


    render(){

        console.log(typeof dogLeash);

        const titleMapper = this.state.tiles.map((item)=> {

            let tiles=[];

            const tileMapper =
                <article>
                    <span class="index-tile-image">
                        <img src={item.img} alt="" />
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

                {/*<p>I'm coming from indexMain</p>*/}

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