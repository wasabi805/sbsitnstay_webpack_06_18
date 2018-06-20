import React, {Component} from 'react'
import {Route,Link} from 'react-router-dom'

import pic08 from '../../images/pic08.jpg'

import SubContentMain from './subContent/SubContentMain'

class LandingMain extends Component{

    constructor(props){
        super(props);
        this.state={
            title:'',
            titleContent:'',
            sections:[]
        }
    }

    componentDidMount(){
        // console.log(this.props.match.params.id, 'Match');

        if(this.props.match.params.id == 'what-we-do'){
            console.log('Services');
            this.setState({
                title: 'What We Do',
                titleContent: "A list of services",
                sections:[
                    {title:'Walking', content: 'We walk your dog'},
                    {title:'Feeding', content: 'We feed you dog'},
                    {title:'Adventures', content: 'We take your dog on adventures'}
                ]
            })
        }
        else{
            console.log("didn't work");
        }
    };

    render(){

        console.log(this.state, 'Landing Main');
        // console.log(this.props.match.params.id, 'Match');

        const SectionMapper = this.state.sections.map(item=>{

            let sections= [];

            let section =
                <section>
                    <a href="generic.html" className="image">
                        <img src={pic08} alt="" data-position="center center" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>{item.title}</h3>
                            </header>
                            <p>Some other stuff</p>
                            <ul className="actions">
                                <li><Link to='/landing/sub' className="button">Make this the Services Btn</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>;

            sections.push(section)

            return sections

        });

        return(
                <div id="wrapper">
                    {/*Main*/}
                    <div id="main">
                        {/*<SectionHeading title={this.state.title}/>*/}

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
                            {/*<section>*/}
                                {/*<a href="generic.html" className="image">*/}
                                    {/*<img src={pic08} alt="" data-position="center center" />*/}
                                {/*</a>*/}
                                {/*<div className="content">*/}
                                    {/*<div className="inner">*/}
                                        {/*<header className="major">*/}
                                            {/*<h3>Something else</h3>*/}
                                        {/*</header>*/}
                                        {/*<p>Some other stuff</p>*/}
                                        {/*<ul className="actions">*/}
                                            {/*<li><Link to='/landing/sub' className="button">Make this the Services Btn</Link></li>*/}
                                        {/*</ul>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</section>*/}

                            {/*<section>*/}
                                {/*<a href="generic.html" className="image">*/}
                                    {/*<img src="images/pic09.jpg" alt="" data-position="top center" />*/}
                                {/*</a>*/}
                                {/*<div className="content">*/}
                                    {/*<div className="inner">*/}
                                        {/*<header className="major">*/}
                                            {/*<h3>TODO: WHO WE ARE</h3>*/}
                                        {/*</header>*/}
                                        {/*<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>*/}
                                        {/*<ul className="actions">*/}
                                            {/*<li><Link to={SubContentMain} className="button">Learn more</Link></li>*/}
                                        {/*</ul>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</section>*/}
                            {/*<section>*/}
                                {/*<a href="generic.html" className="image">*/}
                                    {/*<img src="images/pic10.jpg" alt="" data-position="25% 25%" />*/}
                                {/*</a>*/}
                                {/*<div className="content">*/}
                                    {/*<div class="inner">*/}
                                        {/*<header className="major">*/}
                                            {/*<h3>GALLERY OF OTHER CLIENT DOGS</h3>*/}
                                        {/*</header>*/}
                                        {/*<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>*/}
                                        {/*<ul className="actions">*/}
                                            {/*<li><a href="generic.html" className="button">Learn more</a></li>*/}
                                        {/*</ul>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</section>*/}
                        </section>

                        {/*/!*Three*!/*/}
                        {/*<section id="three">*/}
                            {/*<div className="inner">*/}
                                {/*<header className="major">*/}
                                    {/*<h2>TODO: CONTACTS </h2>*/}
                                {/*</header>*/}
                                {/*<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>*/}
                                {/*<ul className="actions">*/}
                                    {/*<li><a href="generic.html" className="button next">Get Started</a></li>*/}
                                {/*</ul>*/}
                            {/*</div>*/}
                        {/*</section>*/}

                    </div>

                    {/*Contact*/}
                    {/*<section id="contact">*/}
                        {/*<div className="inner">*/}
                            {/*<section>*/}
                                {/*<form method="post" action="#">*/}
                                    {/*<div className="field half first">*/}
                                        {/*<label for="name">Name</label>*/}
                                        {/*<input type="text" name="name" id="name" />*/}
                                    {/*</div>*/}
                                    {/*<div className="field half">*/}
                                        {/*<label for="email">Email</label>*/}
                                        {/*<input type="text" name="email" id="email" />*/}
                                    {/*</div>*/}
                                    {/*<div className="field">*/}
                                        {/*<label for="message">Message</label>*/}
                                        {/*<textarea name="message" id="message" rows="6"></textarea>*/}
                                    {/*</div>*/}
                                    {/*<ul className="actions">*/}
                                        {/*<li><input type="submit" value="Send Message" className="special" /></li>*/}
                                        {/*<li><input type="reset" value="Clear" /></li>*/}
                                    {/*</ul>*/}
                                {/*</form>*/}
                            {/*</section>*/}
                            {/*<section className="split">*/}
                                {/*<section>*/}
                                    {/*<div class="contact-method">*/}
                                        {/*<span className="icon alt fa-envelope"></span>*/}
                                        {/*<h3>Email</h3>*/}
                                        {/*<a href="#">information@untitled.tld</a>*/}
                                    {/*</div>*/}
                                {/*</section>*/}
                                {/*<section>*/}
                                    {/*<div class="contact-method">*/}
                                        {/*<span className="icon alt fa-phone"></span>*/}
                                        {/*<h3>Phone</h3>*/}
                                        {/*<span>(000) 000-0000 x12387</span>*/}
                                    {/*</div>*/}
                                {/*</section>*/}
                                {/*<section>*/}
                                    {/*<div className="contact-method">*/}
                                        {/*<span class="icon alt fa-home"></span>*/}
                                        {/*<h3>Address</h3>*/}
                                        {/*<span>1234 Somewhere Road #5432<br />*/}
										{/*Nashville, TN 00000<br />*/}
										{/*United States of America</span>*/}
                                    {/*</div>*/}
                                {/*</section>*/}
                            {/*</section>*/}
                        {/*</div>*/}
                    {/*</section>*/}

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