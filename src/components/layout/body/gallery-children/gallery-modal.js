import React, {Component} from 'React'

class GalleryModal extends Component{

    constructor(props){
        super(props);
        this.state={
        };


    }


    render(){



        console.log(this.props, 'MODAL');



        return(
            <div>
                <div id={this.props.myModal} className={this.props.modalClass}>

                    <span className="close">&times;</span>
                    <img id={this.props.modalImgId} className={this.props.modalImgClass} />

                    <div id={this.props.captionText}></div>
                </div>
            </div>
        )

    }



};

export default GalleryModal