import React, {Component} from 'react'
import {Route,Link} from 'react-router-dom'

class SectionBody extends Component{
    constructor(props){
        super(props);
        this.state={
            title: '',
            titleContent: '',
            sections: [],
        }
    }


    componentDidMount(){

        if(this.props.thisPath == 'about-us'){
            this.setState(
                {
                    title: "About Us",
                    titleContent: "Who Are We? We are a small network of local sitters who cater your busy schedule",
                    sections:[
                        {title:'Kayla', content: 'Meet Kayla!', img: '../../images/kayla-profile.jpg', setImgSize: 'section-image00'},
                        {title:'Catherine', content: 'Meet Catherine', img: '../../images/catherine.jpg', setImgSize: 'section-image00'},
                        // {title:'Yuko', content: 'Meet Yuko', img: '../../images/yuko.jpg', setImgSize: 'section-image00'}
                    ],
                    sectionSize : {
                        aboutUs: 'employee-image00',
                        services: 'employee-image01'
                    }
                })
        }

        if(this.props.thisPath == 'services'){
            console.log('what-we-do');
            this.setState({
                title: 'What We Do',
                titleContent: "A list of services",
                sections:[
                    {title:'Walking', content: 'We walk your dog', img: '../../images/dog-leash-02.jpg', setImgSize: 'section-image01'},
                    {title:'Feeding', content: 'We feed you dog', img: '../../images/pups-eating.jpg', setImgSize: 'section-image01'},
                    {title:'Overnight Care', content: "We Sleep at your house", img: '../../images/dog-sleeping-01.jpg', setImgSize: 'section-image01'},
                    {title:'Drop-ins', content: "We'll dip by and check on your dog", img: '../../images/dog-sleeping-00.jpg', setImgSize: 'section-image01'},
                    {title:'Adventures', content: 'We take your dog on adventures', img: '../../images/dog-on-hike-00.jpg', setImgSize: 'section-image01'}
                ]
            })
        }

        if(this.props.thisPath == 'gallery'){
            console.log('gallery');
            this.setState({
                title: 'Gallery',
                titleContent: "Some of our friends",
                sections:[
                    {title:'Gallery', content: 'more friends'},

                ]
            })
        }

        if(this.props.thisPath == 'contact'){
            console.log('contact');
            this.setState({
                title: 'Contact us',
                titleContent: "We'd love to hear from you!",
                sections:[]
            })

        }





    }


    render(){

        const SectionMapper = this.state.sections.map(item=>{

            let sections= [];

            let section =
                //START HERE
                <section id='two' className='spotlights'>
                    <a href="generic.html" className="image">
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






        // console.log(this.state.title, 'sectionBody did mount');


        return(


                <div id='main'>

                    <section id="one">
                        <div className="inner">

                            <header className="major">
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




        )
    }
}

export default SectionBody