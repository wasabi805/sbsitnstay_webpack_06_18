import {LANDING} from "../actions/action-type";



let initialState = {
    user: 'hope you dont see me',
};



export default function (state=initialState, action) {

    switch (action.type){
        //LANDING
        case LANDING:
            return {
                user: action.payload
            };


        default:
            return state;

    }
}

