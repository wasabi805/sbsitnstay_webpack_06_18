import React, {Component} from 'react'
import Navbar from './side-nav'


class BannerGeneric extends Component {
    constructor(props){
        super(props);
        this.state={
            content: ''
        }
    }

    componentWillMount(){

        let {pathname} = this.props.location;

        switch(pathname){
            case '/':
                this.setState({ content: this.props.content[0]});
                break;

            case '/location/about-us':
                this.setState({ content: this.props.content[1]});
                break;

            case '/location/services':
                this.setState({ content: this.props.content[2]});
                break;

            case '/location/gallery':
                this.setState({ content: this.props.content[3]});
                break;

            case '/location/contact':
                this.setState({ content: this.props.content[4]});
                break;
        }

    }


    render(){

        let {content} = this.state;

        console.table([content]);


        return(
            <div className='banner-generic-main'>
                <Navbar/>


                <div className='banner-generic-img-cont'>
                    <img src={content.src} />
                </div>

                <div className='banner-generic-content'>
                    <h1 className='display-4'>{content.title}</h1>

                    <div className='btm-border'></div>


                    <p>{content.small}</p>

                </div>

            </div>
        )
    }

};

export default BannerGeneric