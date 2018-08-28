import {combineReducers} from 'redux';

import mainReducer from './main-container-reducer'
import galleryReducer from './gallery-reducer';
import serviceReducer from './services-reducer'
import bannerReducer from './banner-reducer'






// console.log(store,'frm reducers/index');

export default combineReducers({
    // bodyReducer: bodyReducer,
    mainReducer: mainReducer,
    galleryReducer: galleryReducer,
    serviceReducer : serviceReducer,
    bannerReducer: bannerReducer
});