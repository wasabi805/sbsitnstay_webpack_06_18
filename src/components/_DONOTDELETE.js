import React, {Component} from 'react'
import {Link, Route, Switch} from 'react-router-dom';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getInitialState} from "./actions/main-container-actions";


import './assets/css/main.css';
import './assets/sass/main.scss';


import Banner from './components/BannerParent'
import Body from './components/BodyParent'




class App extends Component{
    constructor(props){
        super(props);

    }

    render(){
        console.log(this.props, 'Router stuff');


        const {history, location, match} = this.props;
        const {body} = this.props.mainReducer

        return(
            <main className="wrapper">
                {/*<div className='main container-fluid p-0'>*/}
                <Banner history={history} location={location} match={match}/>
                <Body history={history} location={location} match={match} content={body}/>


                {/*</div>*/}
            </main>

        )
    }
};

const mapStateToProps =(state)=> {
    return{mainReducer : state.mainReducer}};

const mapDispatchToProps =(dispatch)=> {
    return{getInitialState : bindActionCreators(dispatch, getInitialState)}};

export default connect(mapStateToProps, mapDispatchToProps)(App)