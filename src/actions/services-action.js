import {SET_SERVICES_STATE} from './action-type'


export const getInitState =()=>{
    return{
        type: SET_SERVICES_STATE,
        payload: ''
    }
};
