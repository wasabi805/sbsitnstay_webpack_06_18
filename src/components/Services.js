import React, {Component} from 'react';
import HeaderNavigation from './layout/nav/HeaderNavigation'

class Services extends Component{
    render(){
        return(
            <main className="app-wrapper">
                <HeaderNavigation/>

                {/*BANNER*/}
                <section className="app-section app-parallax bg-landing">
                    <h1>Services</h1>
                </section>

                <section className="app-section app-static">
                    <h1>Boring</h1>
                </section>

                <section className="section parallax bg2">
                    <h1>SO FWUFFY AWWW</h1>
                </section>

                {/*Body*/}
                <section className="app-section app-static">
                    <h1>Boring</h1>
                </section>
            </main>
        )
    }
}

export default Services