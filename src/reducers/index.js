import {combineReducers} from 'redux';


import bodyReducer from './body-parent-reducer';



// console.log(store,'frm reducers/inde');

export default combineReducers(

    {bodyParent: bodyReducer}

    );