import React, {Component} from 'react';
import HeaderNavigation from './layout/nav/HeaderNavigation'
import  Gallery1 from './layout/body/Gallery'

class Gallery extends Component{
    render(){
        return(
            <main className="app-wrapper">
                <HeaderNavigation/>

                {/*BANNER*/}
                <section className="app-section-sidekick app-hero-parallax bg-landing">
                    <h1>Gallery</h1>
                </section>

                <section className="app-section-sidekick app-static">
                    <h1>Boring</h1>
                </section>

                <section className="app-section-sidekick sidekick-parallax bg2">
                    <h1>SO FWUFFY AWWW</h1>
                </section>

                {/*Body*/}
                {/*<section className="app-section app-static">*/}
                    {/*<h1>Boring</h1>*/}
                {/*</section>*/}
                <Gallery1/>

            </main>
        )
    }
}

export default Gallery