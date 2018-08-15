import {combineReducers} from 'redux';


import bodyReducer from './body-parent-reducer';
import bannerReducer from './banner-parent-reducer'
import landingReducer from './landing-reducer';



// console.log(store,'frm reducers/index');

export default combineReducers({
    bodyReducer: bodyReducer,
});