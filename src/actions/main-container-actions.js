import {MAIN_CONTAINER} from "./action-type";

export const getInitialState =()=>{
    return{
        type: MAIN_CONTAINER,
        payload:  [350 , 500, 750] //breakPoints for gallery
    }
};