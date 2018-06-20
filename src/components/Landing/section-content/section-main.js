import React, {Component} from 'react'

class SectionMain extends Component{

    render(){
        return(
            <section id="two" className="spotlights">
                <section>
                    <a href="generic.html" className="image">
                        <img src="images/pic08.jpg" alt="" data-position="center center" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>TODO: SERVICES</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to='/landing/sub' className="button">Make this the Services Btn</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}

export default SectionMain

