import React, {Component} from 'react'
import {Link, Route, Switch} from 'react-router-dom';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getInitialState} from "./actions/main-container-actions";


import './assets/css/main.css';
import './assets/sass/main.scss';


import Banner from './components/BannerParent'
import Body from './components/BodyParent'
import TestComp02 from './components/testComp02'



class App extends Component{
    constructor(props){
        super(props);

    }

    render(){

        console.log(this.props, 'from APP');
        const {history, location, match} = this.props;
        const {body} = this.props.mainReducer

        return(
            <div className='main container-fluid p-0'>
                <Banner/>
                <Body history={history} location={location} match={match} content={body}/>
            </div>

        )
    }
};

const mapStateToProps =(state)=> {
    return{mainReducer : state.mainReducer}};

const mapDispatchToProps =(dispatch)=> {
    return{getInitialState : bindActionCreators(dispatch, getInitialState)}};

export default connect(mapStateToProps, mapDispatchToProps)(App)

