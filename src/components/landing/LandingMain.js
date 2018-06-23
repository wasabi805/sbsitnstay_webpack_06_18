import React, {Component} from 'react'
import {Route,Link} from 'react-router-dom'



import LandingSections from './LandingSections'
import TextFieldGroup from '../common/TextFieldGroup'
import pups from '../../images/pups-eating.jpg'


class LandingMain extends Component{

    constructor(props){
        super(props);
        this.state={
            title:'',
            titleContent:'',
            sections:[],
            isHidden: false

        }
    }

    componentDidMount(){
        console.log(this.props.match.params.id, 'Match');

        if(this.props.match.params.id == 'about-us'){
            console.log('About US');
            this.setState({
                title: 'About Us',
                titleContent: "Who Are We? We are a small network of local sitters who cater your busy schedule",
                sections:[
                    {title:'Kayla', content: 'Meet Kayla!', img: '../../images/kayla-profile.jpg'},
                    {title:'Catherine', content: 'Meet Catherine', img: '../../images/catherine.jpg'},
                    {title:'Yuko', content: 'Meet Yuko', img: '../../images/yuko.jpg'}
                ]
            })
        }

        if(this.props.match.params.id == 'services'){
            console.log('what-we-do');
            this.setState({
                title: 'What We Do',
                titleContent: "A list of services",
                sections:[
                    {title:'Walking', content: 'We walk your dog', img: '../../images/dog-leash-02.jpg'},
                    {title:'Feeding', content: 'We feed you dog', img: '../../images/pups-eating.jpg'},
                    {title:'Overnight Care', content: "We Sleep at your house", img: '../../images/dog-sleeping-01.jpg'},
                    {title:'Drop-ins', content: "We'll dip by and check on your dog", img: '../../images/dog-sleeping-00.jpg'},
                    {title:'Adventures', content: 'We take your dog on adventures', img: '../../images/dog-on-hike-00.jpg'}
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


        // console.log(this.props.match.params.id, 'Match');

        const SectionMapper = this.state.sections.map(item=>{

            let sections= [];

            let section =

                //TODO : make an if or switch check for the url param and change section id + a className
                //TODO: then, add css for those classes : all images shouldnt be the same size

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


        console.log(this.props.match.params.id, 'outside of compDidMount');
        //
        //

        console.log('this is landingMain');
        return(
                <div>
                    {/*Main*/}
                    <div>

                        <section id="one">
                            <div className="inner">

                                <header class="major">
                                    <h2> {this.state.title}</h2>
                                </header>

                                <p>{this.state.titleContent}</p>
                                {/*<Link to="/landing/sub"> HELLO</Link>*/}
                            </div>
                        </section>

                        {/*Two*/}
                        <section id="two" className="spotlights">
                            {SectionMapper}
                        </section>

                    </div>

                    {/*Footer*/}
                    <footer id="footer">
                        <div className="inner">
                            <ul class="icons">
                                <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                                <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                                <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                                <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                                <li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                            </ul>
                            <ul className="copyright">
                                <li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
                            </ul>
                        </div>
                    </footer>

                </div>


        )
    }
}

export default LandingMain