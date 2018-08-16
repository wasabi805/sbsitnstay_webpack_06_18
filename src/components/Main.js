import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';

import {getInitialState} from "../actions/main-container-actions";


import BannerParent from './BannerParent';
import BodyParent from './BodyParent'


class Main extends Component{
   constructor(props){
       super(props);
   }

   render(){

       let appStateBanner = this.props.mainReducer.bannerParentState;
       let appStateBody = this.props.mainReducer.bodyParentState;

       let {match, location, history} = this.props;
       
       console.log(this.props.mainReducer);

       return(
           <div className='main-cont bg-info'>
               <BannerParent content={appStateBanner} match={match} location={location} history={history}/>
               <BodyParent content={appStateBody} match={match} location={location} history={history}/>
           </div>
       )
   }
};

const mapStateToProps = (state)=>{
    return{
        mainReducer: state.mainReducer
    }
};

export default connect(mapStateToProps,{getInitialState} )(Main)