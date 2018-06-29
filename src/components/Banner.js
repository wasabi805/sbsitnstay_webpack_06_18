import React, {Component} from 'react';
import { BrowserRouter as Router,Route, Link } from 'react-router-dom';



import dogOnLeash01 from '.././images/dog-leash-01.jpg'
import dogSunset from '.././images/dog-trainer-silhouettes-sunset.jpg'

// const bannerBgImg = {
//     backgroundImage: [`url(${dogOnLeash01})`]
// };


class Banner extends Component{

    constructor(props){
        super(props);
        this.state={

            thisPath: '',

            bannerBgData:[
                {title: "South Bay Sit N' Stay!!", backgroundImage: dogOnLeash01},
                {title: "Who We Are!!!", backgroundImage: dogOnLeash01}
            ]
        }
    }

    // componentDidMount() {
        // console.log('from Main Banner', this.props.location.pathname);

    //     this.setState({
    //         thisPath: this.props.location.pathname
    //     })
    //
    //
    // }

    render(){

        const bannerBgImg01={
            backgroundImage: `url(${dogOnLeash01})`
        };

        return(

            <section id="banner" className="major" style={bannerBgImg01}>

                <div className="inner">
                    <header className="major">
                        <div className="container">
                            <span className='text1'><h1>SB SIT N STAY!!</h1></span>
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

        )
    }
}

export default Banner

