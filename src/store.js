import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index'

const middleware = [thunk];
const initialState = {};

//BASIC params that need to get passed into createStore
// const store = createStore(()=>[], {}, applyMiddleWare(...middleware));


const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);




export default store;