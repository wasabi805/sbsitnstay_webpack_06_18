import {SET_LANDING} from "../actions/action-type";
import {setLandingState} from "../actions/landing-actions";

const initialState = {
    placeholder:{},
};

export default function (state=initialState, action) {
    action=SET_LANDING


    switch (action.type){

        case SET_LANDING:

            return {
                ...state,
                placeholder: action.payload,


            }


        default:
            return state;

    }
}
