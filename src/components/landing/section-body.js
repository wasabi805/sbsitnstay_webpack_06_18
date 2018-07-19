import React, {Component} from 'react'
import {Route,Link} from 'react-router-dom'

import dogLaptop from '../../images/dog-laptop.jpg'



class SectionBody extends Component{
    constructor(props){
        super(props);
        this.state={
            title: '',
            titleContent: '',
            sections: [],



            showWalkingText: true,
            showFeedingText: true,
            showOvernightCareText: true,
            showDropinsText: true,
            showAdventuresText: true,

        }


        this.handleShowWalkingText = this.handleShowWalkingText.bind(this);
        this.handleShowFeedingText = this.handleShowFeedingText.bind(this);
        this.handleOvernightCareText = this.handleOvernightCareText.bind(this);
        this.handleShowDropinsText = this.handleShowDropinsText.bind(this);
        this.handleAdventuresText = this.handleAdventuresText.bind(this);
        this.onClick = this.onClick.bind(this);

    }

    handleShowWalkingText(){
        console.log('Show Walking Text');

        this.setState(prevState =>({
            showWalkingText: !prevState.showWalkingText
        }))

        console.log(this.state.showWalkingText, '<-------');

    }

    handleShowFeedingText(){
        console.log('Show Feeding Text');
        this.setState(prevState =>({
            showFeedingText: !prevState.showFeedingText
        }))

    }

    handleOvernightCareText(){
        console.log('Show Overnight Text');
        this.setState(prevState =>({
            showOvernightCareText: !prevState.showOvernightCareText
        }))

    }

    handleShowDropinsText(){
        console.log('Show Dropin  Text?');
        this.setState(prevState =>({
            showDropinsText: !prevState.showDropinsText
        }))

    }

    handleAdventuresText(){
        this.setState(prevState =>({
            showAdventuresText: !prevState.showAdventuresText
        }))
    }



    onClick(e){
        console.log(e);

    }


    componentDidMount(){

        if(this.props.thisPath == 'about-us'){
            this.setState(
                {
                    title: "About Us",
                    titleContent: "Who Are We? We are a small network of local sitters who cater your busy schedule",
                    sections:[
                        {key: 1, title:'Kayla', content: 'Meet Kayla!', img: '../../images/kayla-profile.jpg'},
                        {key: 2, title:'Catherine', content: 'Meet Catherine', img: '../../images/catherine.jpg'},
                        {key: 3, title:'Yuko', content: 'Meet Yuko', img: '../../images/yuko.jpg', }
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
                    {key: 1, ref:'Walking', content: 'We walk your dog', img: '../../images/dog-leash-002.jpg', text: 'text for walking', toggle: this.handleShowWalkingText},
                    {key: 2, ref:'Feeding', content: 'We feed you dog', img: '../../images/pups-eating.jpg',  text: 'text for FEEDING', toggle: this.handleShowFeedingText },
                    {key: 3, ref:'Overnight Care', content: "We Sleep at your house", img: '../../images/dog-sleeping-01.jpg', text: 'text for OVERNIGHT', toggle: this.handleOvernightCareText},
                    {key: 4, ref:'Drop-ins', content: "We'll dip by and check on your dog", img: '../../images/dog-sleeping-00.jpg', text: 'text for DROPINS', toggle: this.handleShowDropinsText},
                    {key: 5, ref:'Some Adventures$!#!', content: 'We take your dog on adventures', img: '../../images/dog-on-hike-00.jpg', text: 'text for Adventures', toggle: this.handleAdventuresText}
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

        let buttonFunc =
            [
                {btn: this.handleShowWalkingText},
                {btn: this.handleShowFeedingText},
                {btn: this.handleOvernightCareText}
            ];


        const buttonMapper= buttonFunc.map(item =>{

            let buttons =[];

            let button =

                <div className='row-md-12'>
                    <button
                        onClick={this.handleShowWalkingText}
                    >Click Me {item.btn}</button>
                </div>;

            buttons.push(button)

            return buttons

        });


        const sectionTextMapper = this.state.sections.map(item=>{

            let sections =[];


            if(item.key % 2 !== 0){




                let section =
                    <section id="landing-section">
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='landing-item'>
                                    <img src={item.img}/>
                                </div>
                            </div>

                            <div className='col-md-8'>

                                <div className='landing-content'>

                                    <div className='row-md-12'>
                                        <h2>{item.ref}</h2>
                                    </div>

                                    <div className='landing-drescrip-text'>
                                        <p>Can you see me? </p>
                                        {this.state.showWalkingText ? '' : 'ON'}
                                    </div>

                                </div>



                                <div className='row-md-12'>
                                    <button
                                        onClick={item.toggle}
                                    >Click Me {item.btn}</button>
                                </div>;


                            </div>
                        </div>
                    </section>

                sections.push(section);
            }

            if(item.key % 2 === 0){
                let section =

                    <section id="landing-section">
                        <div className='row'>
                            <div className='col-md-8'>

                                <div className='landing-content'>

                                    <div className='row-md-12'>
                                        <h2>{item.ref}</h2>
                                    </div>

                                    <div className='landing-content'>
                                        <p>This is a test</p>
                                    </div>

                                    <div className='row-md-12'>
                                        <button
                                            onClick={item.toggle}
                                        >Click Me {item.btn}</button>
                                    </div>

                                </div>

                            </div>

                            <div className='col-md-4'>
                                <div className='landing-item'>
                                    <img src={item.img}/>
                                </div>
                            </div>



                        </div>
                    </section>;

                sections.push(section);
            }
            return sections

        });



        const renderSection = function (a,b) {

            let sections = []


        };



        //PUT me back in IN!!! need the css class, dont delete
        {/*<section id="landing-section">*/}

        {/*</section>*/}






        //----- DO NOT DELETE : May need for styling/ SCSS SHEET----

        // const SectionMapper = this.state.sections.map(item=>{
        //
        //     let sections= [];
        //
        //     let section =
        //         //START HERE
        //         <section id='two' className='spotlights'>
        //             <a href="generic.html" className="image">
        //                 <img src={item.img} alt="" data-position="center center" />
        //             </a>
        //             <div className="content">
        //                 <div className="inner">
        //                     <header className="major">
        //                         <h3>{item.title}</h3>
        //                     </header>
        //                     <p>{item.content}</p>
        //                     <ul className="actions">
        //                         <li><Link to='/landing/sub' className="button">Render {item.title}'s Profile </Link></li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </section>;
        //
        //     sections.push(section)
        //
        //
        //     return sections
        //
        // });






        // console.log(this.state.title, 'sectionBody did mount');


        return(

            <div id='main'>


                    {sectionTextMapper}


            </div>



                //
                // {/*<div id='main'>*/}
                //
                //     {/*<section id="one">*/}
                //         {/*<div className="inner">*/}
                //
                //             {/*<header className="major">*/}
                //                 {/*<h2> {this.state.title}</h2>*/}
                //             {/*</header>*/}
                //
                //             {/*<p>{this.state.titleContent}</p>*/}
                //             {/*/!*<Link to="/landing/sub"> HELLO</Link>*!/*/}
                //         {/*</div>*/}
                //     {/*</section>*/}
                //
                //     {/*/!*Two*!/*/}
                //     {/*<section id="two" className="spotlights">*/}
                //         {/*{SectionMapper}*/}
                //     {/*</section>*/}
                //
                // {/*</div>*/}
                //



        )
    }
}

export default SectionBody