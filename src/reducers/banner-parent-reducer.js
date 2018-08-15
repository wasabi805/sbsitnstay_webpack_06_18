import {LOAD_BANNER} from "../actions/action-type";

const initialState = {
    toggle:{},

};

export default function (state=initialState, action) {

    switch(action.type){

        case LOAD_BANNER:
            return[ ...state, action.payload];
        default:
            return state;
    }
}