import {MAIN_CONTAINER, TEST_MAIN, OPEN_NAV_MODAL, CLOSE_NAV_MODAL} from "./action-type";

export const getInitialState =()=>{
    return{
        type: MAIN_CONTAINER,
        payload:  [350 , 500, 750] //breakPoints for gallery
    }
};

export const testTheMain =(num)=>{
    num = num * 100;
    return{
        type:TEST_MAIN,
        payload: num
    }
}

export const openNavModal = ()=>{
    return{
        type: OPEN_NAV_MODAL,
        payload: 'block'
    }
};

export const closeNavModal =()=>{
    return{
        type: CLOSE_NAV_MODAL,
        payload: 'none'
    }
}