import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {Button} from 'react-bootstrap'
import {handleThumbnailClick, fetchGalleryData} from "../../../actions/gallery-actions";

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
            modals:[],

        };

    }

    componentWillMount(){
        //===== =====   =====   MAP THE THUMBNAILS  ======  =====   =====
        const {galleryThumbs, modalImages} = this.props.galleryReducer;


        let col1Imgs = []; let col2Imgs = []; let col3Imgs = []; let col4Imgs = [];

        let w; let x; let y; let z;

        //COL 1 MASONRY IMGS
        for(w=0; w <= galleryThumbs.length -16 ; w++ ) {
            let {id, src, targetModal} = galleryThumbs[w];

            let img = <img key={id} id={id} src={src} data-toggle='modal' data-target={targetModal} />

            col1Imgs.push(img)
            }

        //COL 2 MASONRY IMGS
        for(x=5; x <= galleryThumbs.length -11 ; x++ ) {
            let {id, src, targetModal} = galleryThumbs[x];

            let img = <img key={id} id={id} src={src} data-toggle='modal' data-target={targetModal} />

            col2Imgs.push(img)
        }

        //COL 3 MASONRY IMGS
        for(y=10; y <= galleryThumbs.length -6 ; y++ ) {
            let {id, src, targetModal} = galleryThumbs[y];

            let img = <img key={id} id={id} src={src} data-toggle='modal' data-target={targetModal} />

            col3Imgs.push(img)
        }

        //COL 4 MASONRY IMGS
        for(z=15; z <= galleryThumbs.length -1 ; z++ ) {
            let {id, src, targetModal} = galleryThumbs[z];

            let img = <img key={id} id={id} src={src} data-toggle='modal' data-target={targetModal} />

            col4Imgs.push(img)
        }



        //===== =====   =====   MAP THE MODALS  ======  =====   =====
        const makeModals = modalImages.map((modal,index)=>{
            let modals =

                <div key={index} className='modal' id={modal.id}>

                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h5 className='modal-title'>Take a look at this dirpy little guy :)</h5>
                                <button className='close' data-dismiss="modal">&times;</button>
                            </div>

                            <div className='img-cont'>
                                <img src={modal.src}/>
                            </div>

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

                         <div className='modal-dialog'></div>

                </div>

            return [modals]
        });

        //===== =====   =====   SET COMP STATE FOR MAPPED THUMBS && MODALS  ======  =====   =====
        this.setState({
            galleryThumbs: this.props.galleryReducer.galleryThumbs,
            modalImages: this.props.galleryReducer.modalImages,
            modalBtns : this.props.galleryReducer.modalBtns,

            col1: col1Imgs,
            col2: col2Imgs,
            col3: col3Imgs,
            col4: col4Imgs,
            modals: makeModals
        });
    }

    render(){
                return(
                    <div className='Gallery-Main container w-100'>

                        {/*RENDERS ALL MASONRY IMGS*/}

                        <div className='masonry-main container'>
                            <div className='row '>

                                <div className='column'>
                                    {this.state.col1}
                                </div>

                                <div className='column'>
                                    {this.state.col2}
                                </div>

                                <div className='column'>
                                    {this.state.col3}
                                </div>

                                <div className='column'>
                                    {this.state.col4}
                                </div>
                            </div>
                        </div>



                        {/*RENDERS ALL MODALS WITH IDS*/}
                        <div className='modals-main'>
                            {this.state.modals}
                        </div>


                        {/*Last div*/}
                    </div>
                )
    }

}

const mapStateToProps = (state)=>{
    return{
        galleryReducer: state.galleryReducer
    }
};

const mapDispatchToProps =(dispatch, props )=> {

    return {
        // getModalId: bindActionCreators(getModalId, dispatch),
        fetchGalleryData: bindActionCreators(fetchGalleryData, dispatch),

    }
};

export default connect(mapStateToProps, mapDispatchToProps )(Gallery)





