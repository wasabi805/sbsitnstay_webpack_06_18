import React,{Component} from 'react';

import MasonryGallery from './gallery-children/gallery-masonry-gallery';

class Gallery extends Component{

    constructor(props){
        super(props);
        this.state={

            content: [],
            modalBtns:[],

            slides: '',
            slideIndex: '',
            slideLength:'',
            dots: '',
            captionText: '',
            openModal : '',
            closeModal :'',
        };


    }

    componentWillMount(){

        this.setState({
            content: this.props.content,
            modalBtns: this.props.modalBtns,
        })



    }

    componentDidMount(){


    }





    render(){
        let style={
            width: 100,
        }

        // let {style} = this.state.style;

        console.log(this.props, 'see all props');

        const {content, modalBtns} = this.state;



        let{slideLength, slideIndex, dots, captionText} = this.state;




                //-------   ------  ------  -----   ----    -

                return(

                    <div className='Gallery-Main container w-100'>

                       <MasonryGallery content={this.state.content} modalBtns={this.state.modalBtns}/>

                    </div>
                )}


}

export default Gallery





