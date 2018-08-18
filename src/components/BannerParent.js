import React, {Component} from 'react';
import {Route, Link } from 'react-router-dom';


import BannerLanding from './layout/banner-and-nav/banner-landing'
import BannerGeneric from './layout/banner-and-nav/banner-generic'



class BannerParent extends Component{

    constructor(props){
        super(props);
        this.state={

            showBannerLanding : false,
            showBannerGeneric: false,
            content: this.props.content

        }
    }

    componentWillMount(){

        let pathname = this.props.location.pathname;

       // console.table('My Table' + [this.state.content]);

        switch(pathname){

            case '/':
                this.setState({content: this.state.content[0], showBannerLanding: true});
                break;

            case '/location/about-us':

                this.setState({content: this.state.content[1], showBannerGeneric: true});
                break;

            case '/location/services':

                this.setState({content: this.state.content[2], showBannerGeneric: true});
                break;

            case '/location/gallery':

                this.setState({content: this.state.content[3], showBannerGeneric: true});
                break;

            case '/location/contact':

                this.setState({content: this.state.content[4], showBannerGeneric: true});
                break;
        }
    }

    render(){

        // console.log(this.props, 'banner-parent');

        let {match, history, location, content} = this.props;


        return(
                <div className='banner-parent'>
                    {this.state.showBannerLanding && <BannerLanding/>},
                    {this.state.showBannerGeneric && <BannerGeneric content={content} match={match} history={history} location={location} />}

                </div>

        )
    }
}

export default BannerParent


