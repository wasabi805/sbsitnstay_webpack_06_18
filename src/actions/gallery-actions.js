import {LOAD_GALLERY, SHOW_MODAL_IMG} from "./action-type";

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


