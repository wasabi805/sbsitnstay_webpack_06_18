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
            banner:[],

        }
    }


    componentWillMount(){
        let {banner} = this.props.bannerReducer

        this.setState({
            banner : banner
        });

    }

    render(){

        console.log(this.props, "Clean up");

        let {match, history, location, content} = this.props;



        return(
            <React.Fragment>

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


                <BannerStyled/>





            </React.Fragment>

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


