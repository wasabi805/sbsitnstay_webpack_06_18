import {combineReducers} from 'redux';

import mainReducer from './main-container-reducer'
import galleryReducer from './gallery-reducer';






// console.log(store,'frm reducers/index');

export default combineReducers({
    // bodyReducer: bodyReducer,
    mainReducer: mainReducer,
    galleryReducer: galleryReducer,

});