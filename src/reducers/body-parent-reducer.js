import {LOAD_BODY_LANDING} from ".././actions/action-type";

const initialState = {

};

const defaults = {

};

export default function (state=initialState, action) {

    switch (action.type){

        case LOAD_BODY_LANDING:{
            state = { ...state, bodyData : defaults, toggle :action.payload};
            return state
        }

        default:
            return state;

    }
}

