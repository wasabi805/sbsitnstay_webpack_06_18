import {LOAD_GALLERY, SHOW_MODAL_IMG, GET_THUMB_DATA, GET_MODAL_DATA} from "./action-type";

export const fetchGalleryData =()=>{
    return{
        type: LOAD_GALLERY,
        payload: true
    }
};

export const getModalId =(id)=>{
    return{
        type: SHOW_MODAL_IMG,
        payload: id
    }
};

export const getThumbData =(thumbData)=>{
    return{
        type: GET_THUMB_DATA,

        payload: ''
    }
};

export const getModalData =(data)=>{
    return{
        type: GET_MODAL_DATA,

        payload: ''
    }
};


