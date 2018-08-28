import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getInitState} from "../../../actions/services-action";


import {pic02} from '../../../assets/images/background/pic02.jpg';


class Services extends Component{

    constructor(props){
        super(props);
        this.state={
            content:[],
            backgroundImg:[],
        }

    }

    componentWillMount() {
        let {services} = this.props.serviceReducer

        let content =[];

        services.map((data)=>{

            let card =
                <div key={data.id} className="card">
                    <img className="card-img" src={data.cardBg} alt=""/>
                        <div className="card-img-overlay">
                            <h4 className="card-title text-white">{data.name}</h4>
                            <img src={data.src}/>


                            <p className="card-text text-light">This is a wider card with supporting text below as a natural lead-in to additional content. This content
                                is a little bit longer.</p>
                            <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>

            content.push(card)

        });



        this.setState({
            content: content
        })


    }


    render(){

        let {content} = this.state
        return(
            <div className='services-main container-fluid'>
                {content}
            </div>
        )
    }
};



const mapStateToProps = (state)=>{
    return{
        serviceReducer: state.serviceReducer
    }
};
const mapDispatchToProps = (dispatch, props)=>{
    return{
        getInitState : bindActionCreators(getInitState, dispatch)
    }

};
export default connect(mapStateToProps, mapDispatchToProps)(Services)