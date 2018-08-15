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
       console.log('IM THE MAIN', this.props);

       let appState = this.props.mainReducer.bodyParentState;
       let{landing} = appState;

       // console.log(landing, "i'm appState");
       return(
           <div className='main-cont bg-info'>
               <BannerParent />
               <BodyParent content={appState}/>
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