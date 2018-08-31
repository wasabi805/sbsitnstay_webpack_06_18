import {SET_BODY_STATE} from "./action-type";

export const setBodyState =()=>{

    console.log('i ran');

   return{

       type: SET_BODY_STATE,
       payload: 'landing'
   }
};




