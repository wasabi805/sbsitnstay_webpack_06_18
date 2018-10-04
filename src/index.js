import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import {Provider} from 'react-redux';
import store from './store';


import App from './App'



const AppRoot = <Provider store={store}>
                    <BrowserRouter>
                        <Route path="/" render={(props)=><App {...props}/>}/>
                    </BrowserRouter>
                </Provider>

// const mountElement = document.querySelector('#root');
// const boldElement = React.createElement('b', null, "Text (as a string)");
// ReactDOM.render([boldElement], mountElement);
// ReactDOM.render( [AppRoot, boldElement], document.getElementById('root'));

ReactDOM.render( AppRoot, document.getElementById('root'));

