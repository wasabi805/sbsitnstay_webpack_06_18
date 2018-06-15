import React, {Component} from 'react'

import { Link } from 'react-router-dom';
import pic01 from '.././images/pic01.jpg'

console.log(pic01);
class Main extends Component{
    render(){
        return(
            <div id="main">

                {/*One*/}
                <section id="one" className="tiles">
                    <article>
                        <span className="image">
                            <img src={pic01} alt="" />
                        </span>

                        <header className="major">
                            <h3><Link to="/landing" className="link">Who We Are</Link></h3>
                            <p>Check us out, Meet the crew!</p>
                        </header>
                    </article>
                    <article>
									<span class="image">
										<img src="images/pic02.jpg" alt="" />
									</span>
                        <header className="major">
                            <h3><a href="landing.html" className="link">Tempus</a></h3>
                            <p>feugiat amet tempus</p>
                        </header>
                    </article>
                    <article>
									<span className="image">
										<img src="images/pic03.jpg" alt="" />
									</span>
                        <header className="major">
                            <h3><a href="landing.html" className="link">Magna</a></h3>
                            <p>Lorem etiam nullam</p>
                        </header>
                    </article>
                    <article>
									<span className="image">
										<img src="images/pic04.jpg" alt="" />
									</span>
                        <header className="major">
                            <h3><a href="landing.html" className="link">Ipsum</a></h3>
                            <p>Nisl sed aliquam</p>
                        </header>
                    </article>
                    <article>
									<span className="image">
										<img src="images/pic05.jpg" alt="" />
									</span>
                        <header className="major">
                            <h3><a href="landing.html" className="link">Consequat</a></h3>
                            <p>Ipsum dolor sit amet</p>
                        </header>
                    </article>
                    <article>
									<span className="image">
										<img src="images/pic06.jpg" alt="" />
									</span>
                        <header className="major">
                            <h3><a href="landing.html" className="link">Etiam</a></h3>
                            <p>Feugiat amet tempus</p>
                        </header>
                    </article>
                </section>

                {/*Two*/}
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>Massa libero</h2>
                        </header>
                        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                        <ul className="actions">
                            <li><a href="landing.html" className="button next">Get Started</a></li>
                        </ul>
                    </div>
                </section>

            </div>
        )
    }
}


export default Main