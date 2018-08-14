import {LANDING, ABOUT_US} from "../actions/action-type";



let initialState = {
    toggle: false
};


export default function (state=initialState, action) {

    switch (action.type){
        //LANDING
        case LANDING:
            initialState.toggle = action.payload;
            return state;

        case ABOUT_US:
            initialState.toggle = action.payload;
            return state;


        default:
            return state;

    }
}

