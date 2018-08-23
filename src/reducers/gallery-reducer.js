import {LOAD_GALLERY, SHOW_MODAL_IMG, GET_THUMB_DATA, GET_MODAL_DATA, } from ".././actions/action-type";

const initialState = {

    //Gallery Thumnails
    galleryThumbs: [

        {id: 'gal-thumb-00', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/sbsitnstay/gallery-sbsitnstay/20180129_192156.jpg', targetModal: '#gal-modal-img-00'},
        {id: 'gal-thumb-01', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/sbsitnstay/gallery-sbsitnstay/20170304_110838.jpg', targetModal: '#gal-modal-img-01'},
        {id: 'gal-thumb-02', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/sbsitnstay/gallery-sbsitnstay/20161231_140603.jpg', targetModal: '#gal-modal-img-02'},
        {id: 'gal-thumb-03', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/sbsitnstay/gallery-sbsitnstay/20170710_203907.jpg', targetModal: '#gal-modal-img-03'},
        {id: 'gal-thumb-04', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/sbsitnstay/gallery-sbsitnstay/20161015_162730.jpg', targetModal: 'gal-modal-img-00'},
        {id: 'gal-thumb-05', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/sbsitnstay/gallery-sbsitnstay/20171122_132128.jpg', targetModal: 'gal-modal-img-00'},
        {id: 'gal-thumb-06', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/sbsitnstay/gallery-sbsitnstay/20160801_182236.jpg', targetModal: 'gal-modal-img-00'},
        {id: 'gal-thumb-07', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/sbsitnstay/gallery-sbsitnstay/20160508_191857.jpg', targetModal: 'gal-modal-img-00'},
        {id: 'gal-thumb-08', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/sbsitnstay/gallery-sbsitnstay/20170529_124148.jpg', targetModal: 'gal-modal-img-00'},
        {id: 'gal-thumb-09', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/sbsitnstay/gallery-sbsitnstay/20171028_215554.jpg', targetModal: 'gal-modal-img-00'},

        {id: 'gal-thumb-10', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/20160716_183734.jpg', targetModal: 'gal-modal-img-00'},
        {id: 'gal-thumb-11', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/20160618_093938.jpg', targetModal: 'gal-modal-img-00'},
        {id: 'gal-thumb-12', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/20160701_174543.jpg', targetModal: 'gal-modal-img-00'},
        {id: 'gal-thumb-13', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/20180127_224819.jpg', targetModal: 'gal-modal-img-00'},
        {id: 'gal-thumb-14', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/20171222_195748.jpg', targetModal: 'gal-modal-img-00'},
        {id: 'gal-thumb-15', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/20161008_111823.jpg', targetModal: 'gal-modal-img-00'},
        {id: 'gal-thumb-16', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/20161007_185518.jpg', targetModal: 'gal-modal-img-00'},
        {id: 'gal-thumb-17', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/20170203_194845.jpg', targetModal: 'gal-modal-img-00'},
        {id: 'gal-thumb-18', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/20161220_201416.jpg', targetModal: 'gal-modal-img-00'},
        {id: 'gal-thumb-19', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/20160702_204520.jpg', targetModal: 'gal-modal-img-00'},
    ],

    //MODAL IMGS : FULL SCREEN

    modalImages: [

        {id: 'gal-modal-img-00', src: 'https://res.cloudinary.com/ocampot/image/upload/sbsitnstay/gallery-sbsitnstay/20180129_192156.jpg', style:''},
        {id: 'gal-modal-img-01', src: 'https://res.cloudinary.com/ocampot/image/upload/sbsitnstay/gallery-sbsitnstay/20170304_110838.jpg', style:''},
        {id: 'gal-modal-img-02', src: 'https://res.cloudinary.com/ocampot/image/upload/sbsitnstay/gallery-sbsitnstay/20161231_140603.jpg', style:''},
        {id: 'gal-modal-img-03', src: 'https://res.cloudinary.com/ocampot/image/upload/sbsitnstay/gallery-sbsitnstay/20170710_203907.jpg', style:''},
        {id: 'gal-modal-img-04', src: 'https://res.cloudinary.com/ocampot/image/upload/sbsitnstay/gallery-sbsitnstay/20161015_162730.jpg', style:''},
        {id: 'gal-modal-img-05', src: 'https://res.cloudinary.com/ocampot/image/upload/sbsitnstay/gallery-sbsitnstay/20171122_132128.jpg', style:''},
        {id: 'gal-modal-img-06', src: 'https://res.cloudinary.com/ocampot/image/upload/sbsitnstay/gallery-sbsitnstay/20160801_182236.jpg', style:''},
        {id: 'gal-modal-img-07', src: 'https://res.cloudinary.com/ocampot/image/upload/sbsitnstay/gallery-sbsitnstay/20160508_191857.jpg', style:''},
        {id: 'gal-modal-img-08', src: 'https://res.cloudinary.com/ocampot/image/upload/sbsitnstay/gallery-sbsitnstay/20170529_124148.jpg', style:''},
        {id: 'gal-modal-img-09', src: 'https://res.cloudinary.com/ocampot/image/upload/sbsitnstay/gallery-sbsitnstay/20171028_215554.jpg', style:''},

        {id: 'gal-modal-img-10', src: 'https://res.cloudinary.com/ocampot/image/upload/20160716_183734.jpg', style:''},
        {id: 'gal-modal-img-11', src: 'https://res.cloudinary.com/ocampot/image/upload/20160618_093938.jpg', style:''},
        {id: 'gal-modal-img-12', src: 'https://res.cloudinary.com/ocampot/image/upload/20160701_174543.jpg', style:''},
        {id: 'gal-modal-img-13', src: 'https://res.cloudinary.com/ocampot/image/upload/20180127_224819.jpg', style:''},
        {id: 'gal-modal-img-14', src: 'https://res.cloudinary.com/ocampot/image/upload/20171222_195748.jpg', style:''},
        {id: 'gal-modal-img-15', src: 'https://res.cloudinary.com/ocampot/image/upload/20161008_111823.jpg', style:''},
        {id: 'gal-modal-img-16', src: 'https://res.cloudinary.com/ocampot/image/upload/20161007_185518.jpg', style:''},
        {id: 'gal-modal-img-17', src: 'https://res.cloudinary.com/ocampot/image/upload/20170203_194845.jpg', style:''},
        {id: 'gal-modal-img-18', src: 'https://res.cloudinary.com/ocampot/image/upload/20161220_201416.jpg', style:''},
        {id: 'gal-modal-img-19', src: 'https://res.cloudinary.com/ocampot/image/upload/20160702_204520.jpg', style:''},
    ],

    //MODAL BTNS

    modalBtns:[
        {id:1, name: 'loading', src:'.././assets/images/loading.gif'},
        {id:2, name: 'next', src:'.././assets/images/next.gif'},
        {id:3, name: 'prev', src:'.././assets/images/prev.gif'},
        {id:4, name: 'close', src:'.././assets/images/close.gif'},
    ],


};


export default function (state=initialState, action) {

    switch (action.type){

        case LOAD_GALLERY:{
            state = { ...state};
            return state
        }

        default:
            return state;

    }
}

