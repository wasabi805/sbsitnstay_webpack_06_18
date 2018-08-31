import React, {Component} from 'react';
import {Route, Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {setBannerState} from '.././actions/banner-actions'

import { Parallax, Background } from 'react-parallax';
import CSSModules from 'react-css-modules';


import styles from '.././assets/css/banner.css';
import BannerStyled from './layout/banner-and-nav/banner-styled'


import BannerLanding from './layout/banner-and-nav/banner-landing'
import BannerGeneric from './layout/banner-and-nav/banner-generic'



class BannerParent extends Component{

    constructor(props){
        super(props);
        this.state={
            content:[],

        }
    }


    componentWillMount(){


        let{pathname} = this.props.location;
        let {banner} = this.props.bannerReducer;


        switch (pathname){
            case '/':
                this.setState({
                    content: banner[0]
                })
                break;

            case '/location/about-us':
                this.setState({
                    content: banner[1]
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



        let {match, history, location, content} = this.props;



        return(
            <div className='banner-wrapper'>

                <header>
                    <img src="#" alt="#"/>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Service</a></li>
                        </ul>
                    </nav>
                </header>


                <BannerStyled content={this.state.content}/>

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


