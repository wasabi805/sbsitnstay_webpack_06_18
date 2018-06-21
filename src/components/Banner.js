import React, {Component} from 'react';

class Banner extends Component{
    render(){
        return(
            <div id="wrapper">
                <section id="banner" className="major">
                    <div className="inner">
                        <header className="major">



                            <div className="container">
                                <span className='text1'><h1>South Bay Sit N' Stay</h1></span>
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
            </div>
        )
    }
}

export default Banner