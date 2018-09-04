import React, {Component} from 'react';
import {Route, Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {setBannerState} from '.././actions/banner-actions'

import HeaderNavigation from './layout/nav/HeaderNavigation'
import BannerLanding from './layout/banner/BannerLanding'
import BannerGeneric from './layout/banner/BannerGeneric'



class BannerParent extends Component{

    constructor(props){
        super(props);
        this.state={
            content:[],
            bannerBgImg: ' section parallax banner-bg-about',

            isLandingVisible : false,
            isGenericVisible : false,

        }
    }


    componentWillMount(){


        let{pathname} = this.props.location;
        let {banner} = this.props.bannerReducer;

        switch (pathname){
            case '/':
                this.setState({
                    content: banner[0],
                    isLandingVisible: true
                })
                break;

            case '/location/about-us':


                this.setState({
                    content: banner[1],
                    isGenericVisible: true
                })
                break;

            case '/location/services':
                this.setState({
                    content: banner[2]
                })
                break;

            case '/location/gallery':
                this.setState({
                    content: banner[3]
                })
                break;

            case '/location/contact':
                this.setState({
                    content: banner[4]
                })
                break;

        }


        this.setState({
            banner : banner
        });

    }

    render(){

        console.log(this.state.content, 'TESTING');


        let {title} = this.state.content;
        let {bannerBgImg, content} = this.state;

        console.log(this.state, 'sanity check');


        return(
            <div className='banner-wrapper-landing'>

                <HeaderNavigation placeHoldForProps='ToDO'/>
                {this.state.isLandingVisible && <BannerLanding/>}
                {this.state.isGenericVisible && <BannerGeneric content={content}/>}


                {/*<BannerStyled content={this.state.content}/>*/}

            </div>

        )
    }
}


const mapStateToProps = (state, props)=>{return{
        bannerReducer : state.bannerReducer
    }
};

const mapDispatchToProps =(dispatch, props)=>{return{
        handleLoadState: bindActionCreators( setBannerState, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BannerParent)


