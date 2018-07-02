import React, {Component} from 'react';

import dogAndOwnerSunset from '../../images/dog-and-owner-sunset.jpg'
import dogAndTrainerSilho from '../../images/dog-trainer-silhouettes-sunset.jpg'
import dogSelfie from '../../images/dog-selfie.jpg'

class BannerType extends Component{

    constructor(props){
        super(props);
        this.state={
            thisPath: '',

            banner:[
                {name: 'About Us', bgImg: '../../images/dog-and-owner-sunset.jpg'},
                {name: 'Services', bgImg: '../../images/dog-trainer-silhouettes-sunset.jpg'},
                {name: 'Gallery', bgImg: '../../images/dog-selfie.jpg'}
            ]
        };


    }

    render(){

        console.log(this.state);
        // console.log('>>>>>>>>>>',this.props.location.pathname);
        // console.log(this.state.thisPath, '<---------');

        // const bannerBgImg01={
        //     backgroundImage: `url(${dogWithTrainerSunset})`
        // };


        const BannerMapper = this.state.banner.map((item)=>{

            let banner =[];

            const mapper =

                <section id="banner" className="major" style={{backgroundImage: `url(${item.bgImg})`}}>

                    <div className="inner">
                        <header className="major">
                            <div className="container">
                                <span className='text1'><h1>{item.name}</h1></span>
                            </div>

                        </header>

                    </div>
                </section>

            banner.push(mapper)

            return banner

        });

        //----- -----   -----   -----   -----   -----   -----


        const location = this.props.location.pathname

        const test =(path, arr)=>{

            path = location
            arr = BannerMapper;

            switch (path){
                case '/about-us':
                    return arr[0];

                case '/services':
                    return arr[1];

                case '/gallery':
                    return arr[2];

                default:
                    return arr[0]
            }

        };

        console.log(test(), 'This is test');


        return(
           <div>
               {test()}
           </div>
        )
    }
}


export default BannerType