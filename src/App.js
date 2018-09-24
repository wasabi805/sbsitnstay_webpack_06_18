import React, {Component} from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getInitialState} from "./actions/main-container-actions";


import './assets/css/main.css';
import './assets/sass/main.scss';


import MainContainer from './components/MainContainer'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

import Banner from './components/BannerParent'
import Body from './components/BodyParent'

class App extends Component{
    constructor(props){
        super(props);
        this.state={

            landing:'',
            aboutContent:'',
            servicesContent: '',
            galleryContent: '',
            contactContent: ''
        }
    }
    componentWillMount(){
        console.log(this.props.mainReducer, 'main reducer');
      // console.log(this.props.mainReducer, 'wutang');
      let {landing, about, gallery} = this.props.mainReducer

        this.setState({
            landing: landing,
            aboutContent: about,
            galleryContent: gallery
        })

        // console.log(this.props.mainReducer, 'THE INITAL');
    }



    render(){
        console.log(this.state, 'state from APP');
        console.log(this.props, 'APP: Router stuff');

        return(
            <Switch>
                <Route exact path='/' render={(props)=> <MainContainer{...props} landing={this.state.landing}/>  } />
                <Route exact path='/location/about-us' render={(props)=> <About{...props} about={this.state.aboutContent}/>  } />
                <Route exact path='/location/gallery' render={(props)=> <Gallery{...props} gallery={this.state.galleryContent}/>  } />
                <Route path='/location/services' component={Services} />
                {/*<Route path='/location/gallery' component={Gallery} />*/}
                {/*<Route path='/location/contact' component={Contact} />*/}
            </Switch>


        )
    }
};

const mapStateToProps =(state)=> {
    return{mainReducer : state.mainReducer}};

const mapDispatchToProps =(dispatch)=> {
    return{getInitialState : bindActionCreators(dispatch, getInitialState)}};

export default connect(mapStateToProps, mapDispatchToProps)(App)

