import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchGalleryData} from "../../../actions/gallery-actions";

import MasonryGallery from './gallery-children/gallery-masonry-gallery';
import GalleryModal from './gallery-children/gallery-modal';

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
        };
    }

    componentWillMount(){

        //===== =====   =====   MAP Gallery Thumbs  =====   =====   =====
        const {galleryThumbs} = this.props.galleryReducer;

        let w; let x; let y; let z;
        let col1Imgs = []; let col2Imgs = []; let col3Imgs = []; let col4Imgs = [];
        //Col 1
        for(w=0; w <= galleryThumbs.length -16 ; w++ ){
            let img = <img key={w} id={galleryThumbs[w].id} src={galleryThumbs[w].src} />;
            col1Imgs.push(img);
        }
        //Col 2
        for(x=5; x <= galleryThumbs.length-11; x++ ){
            let img = <img key={x} id={galleryThumbs[x].id} src={galleryThumbs[x].src} />;
            col2Imgs.push(img);
        }
        // Col 3
        for(y=10; y <= galleryThumbs.length-6; y++ ){
            let img = <img key={y} id={galleryThumbs[y].id} src={galleryThumbs[y].src} />;
            col3Imgs.push(img);
        }
        // Col 4
        for(z=15; z <= galleryThumbs.length-1; z++ ){
            let img = <img key={z} id={galleryThumbs[z].id} src={galleryThumbs[z].src} />;
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
            mappedModalImgs: mappedModalImgs
        })

    }

    render(){
        const {col1, col2, col3, col4, mappedModalImgs, modalBtns} = this.state;
                return(
                    <div className='Gallery-Main container w-100'>
                        <MasonryGallery col1={col1} col2={col2} col3={col3} col4={col4} />
                        <GalleryModal mappedModalImgs={mappedModalImgs} modalBtns={modalBtns} />
                    </div>
                )}

}

const mapStateToProps = (state)=>{
    return{
        galleryReducer: state.galleryReducer
    }
};

export default connect(mapStateToProps,{fetchGalleryData} )(Gallery)





