import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {Button} from 'react-bootstrap'
import {getThumbData, getModalData, getModalId, fetchGalleryData} from "../../../actions/gallery-actions";

import MasonryGallery from './gallery-children/gallery-masonry-gallery';

import pic1 from'../../.././images/g1_Jazz-G1MT.jpg'

class Gallery extends Component{

    constructor(props){
        super(props);
        this.state={
            galleryThumbs: [],
            modalImages: [],
            modalBtns:[],
            col1 : '',
            col2 : '',
            col3 : '',
            col4 : '',
            mappedModalImgs : [],
            modalThumb: '', // id & src for clicked thumb

        };

        this.handleThumbClick = this.handleThumbClick.bind(this);


    }

    //gets all data needed, set state, THEN... open modal
    handleThumbClick(event, modalThumb){
        modalThumb = event.target;//targets the <img/> el that was clicked

        this.setState({ //update state of clicked clicked thumb id
            modalThumb: {
                id : event.target.id,
                src : event.target.src
            }
        });
        console.log(modalThumb);
    }

    componentWillMount(){

        //===== =====   =====   MAP Gallery Thumbs  =====   =====   =====
        const {galleryThumbs} = this.props.galleryReducer;

        let w; let x; let y; let z;
        let col1Imgs = []; let col2Imgs = []; let col3Imgs = []; let col4Imgs = [];
        //Col 1
        for(w=0; w <= galleryThumbs.length -16 ; w++ ){

            let imgId = galleryThumbs[w].id;
            let imgSrc = galleryThumbs[w].src;

            let img =
                <li key={imgId}>
                    <img id={imgId} src={imgSrc}/>;
                </li>;

            col1Imgs.push(img);

        }
        //Col 2
        for(x=5; x <= galleryThumbs.length-11; x++ ){
            let imgId = galleryThumbs[x].id;
            let img = <img key={x} id={galleryThumbs[x].id} src={galleryThumbs[x].src} onClick={()=> {

                this.updateSelectedImg(imgId);

            }}/>;

            col2Imgs.push(img);
        }
        // Col 3
        for(y=10; y <= galleryThumbs.length-6; y++ ){
            let imgId = galleryThumbs[y].id;
            let img = <img key={y} id={galleryThumbs[y].id} src={galleryThumbs[y].src} onClick={()=> {

                // this.updateSelectedImg(imgId);
                this.handleThumbClick(event,modalImages, imgId)

            }}/>;

            col3Imgs.push(img);
        }
        // Col 4
        for(z=15; z <= galleryThumbs.length-1; z++ ){
            let imgId = galleryThumbs[z].id;

            let img = <img key={z} id={galleryThumbs[z].id} src={galleryThumbs[z].src} onClick={()=> {

                this.updateSelectedImg(imgId);

            }}/>;

            col4Imgs.push(img);
        }

        //===== =====   =====   MAP Modal Images  =====   =====   =====
        const {modalImages} = this.props.galleryReducer;

        let mappedModalImgs = modalImages.map((pic, index)=>{
            let imgs=[]; let img = <img key={index} className="modal-content" id={pic.id}/>; imgs.push(img);
            return imgs

        });

        //===== =====   =====   set mapped props  =====   =====   =====
        this.setState({
            galleryThumbs: this.props.galleryReducer.galleryThumbs,
            modalImages: this.props.galleryReducer.modalImages,
            modalBtns : this.props.galleryReducer.modalBtns,
            col1 : col1Imgs,
            col2 : col2Imgs,
            col3 : col3Imgs,
            col4 : col4Imgs,
            mappedModalImgs: mappedModalImgs,
            getModalId: this.props.galleryReducer.getModalId,

        })
    }

    render(){

        const {col1, col2, col3, col4, } = this.state;

                return(
                    <div className='Gallery-Main container w-100'>
                        <MasonryGallery col1={col1} col2={col2} col3={col3} col4={col4}/>

                        <Button data-toggle='modal' data-target='#myModal1'>Open Modal</Button>


                        <div className='modal' id="myModal1">
                            <div className='modal-dialog'>
                                <div className='modal-content'>
                                    <div className='modal-header'>
                                        <h5 className='modal-title'>Modal Title</h5>
                                        <button className='close' data-dismiss="modal">&times;</button>
                                    </div>

                                    <img src='../../.././images/g1_Jazz-G1MT.jpg'/>
                                    {/*TODO : SEE HOW TO GET THIS TO WORK WITH AN OUTSIDE SRC: MAY NEED TO DO A FETCH REQ*/}

                                </div>

                                <div className='modal-boddy'>
                                    "It was all a dream, I used to read Word Up magazine,
                                    Salt 'N Peppa up in the limousine.
                                </div>

                                <div className='modal-footer'>
                                    <Button className='btn btn-secondary' data-dismiss="modal">
                                        close
                                    </Button>
                                </div>


                            </div>

                        </div>


                    </div>
                )}

}

const mapStateToProps = (state)=>{
    return{
        galleryReducer: state.galleryReducer
    }
};

const mapDispatchToProps =(dispatch, props )=> {

    return {
        getModalId : bindActionCreators(getModalId, dispatch),
        getThumbData :bindActionCreators(getThumbData, dispatch),
        getModalData :bindActionCreators(getModalData, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps )(Gallery)





