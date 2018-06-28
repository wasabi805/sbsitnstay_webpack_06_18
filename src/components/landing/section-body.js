import React, {Component} from 'react'

class SectionBody extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){

        console.log(this.props);
        return(
            <div>
                This is the section body : {this.props.thisPath}
            </div>
        )
    }
}

export default SectionBody