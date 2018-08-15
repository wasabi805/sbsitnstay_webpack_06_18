import {combineReducers} from 'redux';

import mainReducer from './main-container-reducer'
// import bodyReducer from './body-parent-reducer';
import bannerReducer from './banner-parent-reducer'
import landingReducer from './landing-reducer';






// console.log(store,'frm reducers/index');

export default combineReducers({
    // bodyReducer: bodyReducer,
    mainReducer: mainReducer,
});