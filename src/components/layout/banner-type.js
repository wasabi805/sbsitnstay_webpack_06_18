import React, {Component} from 'react';


import dogWithTrainerSunset from '../../images/dog-trainer-silhouettes-sunset.jpg'

class BannerType extends Component{

    constructor(props){
        super(props);
        this.state={
            thisPath: '',

            banner:[
                {name: 'About Us Banner', bgImg: '../../images/dog-trainer-silhouettes-sunset.jpg'}
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







        })

        return(
           <div>
               {BannerMapper}
           </div>
        )
    }
}


export default BannerType