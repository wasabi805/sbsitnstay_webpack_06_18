import React, {Component} from 'react'
import {Route,Link} from 'react-router-dom'

import pups from '../../images/pups-eating.jpg'

class LandingSections extends Component{

    constructor(props){
        super(props);
        this.state={
            title:'',
            titleContent:'',
            sections:[],

        }
    }

    componentDidMount(){
        // console.log(this.props.match.params.id, 'Match');

        if(this.props.match.params.id == 'about-us'){
            console.log('About US');
            this.setState({
                title: 'About Us',
                titleContent: "Who Are We? We are a small network of local sitters who cater your busy schedule",
                sections:[
                    {title:'Kayla', content: 'Meet Kayla!'},
                    {title:'Catherine', content: 'Meet Catherine'},
                    {title:'Kimmy', content: 'Meet Kimmy'}
                ]
            })
        }

        if(this.props.match.params.id == 'services'){
            console.log('what-we-do');
            this.setState({
                title: 'What We Do',
                titleContent: "A list of services",
                sections:[
                    {title:'Walking', content: 'We walk your dog', img: '../../images/pups-eating.jpg'},
                    {title:'Feeding', content: 'We feed you dog', img: '../../images/pups-eating.jpg'},
                    {title:'Overnight Care', content: "We Sleep at your house", img: '../../images/pups-eating.jpg'},
                    {title:'Drop-ins', content: "We'll dip by and check on your dog", img: '../../images/pups-eating.jpg'},
                    {title:'Adventures', content: 'We take your dog on adventures', img: '../../images/pups-eating.jpg'}
                ]
            })
        }

        if(this.props.match.params.id == 'gallery'){
            console.log('gallery');
            this.setState({
                title: 'Gallery',
                titleContent: "Some of our friends",
                sections:[
                    {title:'Gallery', content: 'more friends'},

                ]
            })
        }

        if(this.props.match.params.id == 'contact'){
            console.log('contact');
            this.setState({
                title: 'Contact us',
                titleContent: "We'd love to hear from you!",
                sections:[]
            })



        }


        else{
            console.log("didn't work");
        }
    };


    render(){
        console.log('FROM LANDINGSECTIONS',this.props);

        const SectionMapper = this.state.sections.map(item=>{

            let sections= [];

            let section =
                <section id='employee-profile'>
                    <a href="generic.html" className="employee-image">
                        <img src={item.img} alt="" data-position="center center" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>{item.title}</h3>
                            </header>
                            <p>{item.content}</p>
                            <ul className="actions">
                                <li><Link to='/landing/sub' className="button">Render {item.title}'s Profile </Link></li>
                            </ul>
                        </div>
                    </div>
                </section>;

            sections.push(section)


            return sections

        });

        console.log('This is LandingSections');



        // console.log(this.props.match.params.id);

        return(
            <div id='wrapper'>
                <div id="main">
                    <h1>LandingSections : THIS IS A TEST COMP</h1>
                    {SectionMapper}
                </div>
            </div>
        )
    }
}

export default LandingSections