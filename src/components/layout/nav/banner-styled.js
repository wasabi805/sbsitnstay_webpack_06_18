import React, {Component} from 'react';




class BannerStyled extends Component{
    constructor(props){
        super(props);
    }


    render(){

        const bannerBgImg = this.props.content.src

        const landingBg={
            backgroundImage: `url(${bannerBgImg})`,
        };


        return(
                <React.Fragment>
                    {/*<section className="section parallax bg1">*/}
                        {/*<h1>Such Adorableness</h1>*/}
                    {/*</section>*/}

                    {/*<section className="section static">*/}

                        {/*<p>Watching haters wonder why Gambino got the game locked*/}
                            {/*Half-Thai thickie, all she wanna do is Bangkok*/}
                            {/*Got her hair done, French braids, now she A$AP*/}
                            {/*Bino so insensitive, she asking, "Why you say that?!"*/}
                            {/*I'm chillin', real nigga feeling*/}
                            {/*Rich kid, asshole: paint me as a villain*/}
                            {/*Still spitting that cash flow: DJ Khaled*/}
                            {/*I got a penthouse on both coasts, pH balance*/}
                            {/*Real nigga, I rep those, why though? Cause I said so*/}
                            {/*Hip deep in the Pepto, I got five on her like Ben Folds*/}
                            {/*I got more tail than that PetCo, you faker than some Sweet'N Low*/}
                            {/*Yeah, you got some silverware, but really are you eating though?*/}
                            {/*Are you eating though? Nigga, are you eating though?*/}
                            {/*Breakfast, lunch and dinner's for beginners, you ain't even know</p>*/}
                    {/*</section>*/}
                    {/*<section className="section parallax bg2" >*/}
                        {/*<h1>SO FWUFFY AWWW</h1>*/}
                    {/*</section>*/}
                </React.Fragment>


        )
    }

}

// export default CSSModules(BannerStyled, styles)
export default BannerStyled



