import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from 'redux';

function userReducer(state = '', action) {
  return state;
}

function productsReducer(state = [], action) {
  return state;
}

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
});

const store = createStore(rootReducer);

console.log(store.getState());

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
