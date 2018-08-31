import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import {Provider} from 'react-redux';
import store from './store';



import bodyActions from './actions/body-actions'



import App from './App'
import Main from "./components/Main";


const AppRoot = <Provider store={store}>
                    <BrowserRouter>
                        <Route path="/" component={App}/>
                    </BrowserRouter>
                </Provider>




// const mountElement = document.querySelector('#root');
// const boldElement = React.createElement('b', null, "Text (as a string)");
// ReactDOM.render([boldElement], mountElement);
// ReactDOM.render( [AppRoot, boldElement], document.getElementById('root'));

ReactDOM.render( AppRoot, document.getElementById('root'));

