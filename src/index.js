import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from 'redux';

function userReducer(state = '', action) {
  switch (action.type) {
    case 'userUpdate':
      return action.payload;
    default:
      return state;
  }
}

function productsReducer(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
});

const store = createStore(/*set initial state to reducers*/
  rootReducer,
  {
    products: [{
      name: 'Samsung',
      type: 'TV'
    }],
    user: 'USER'
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const updateUserAction = {
  type: 'userUpdate',
  payload: {
    user: 'New USER'
  }
};

console.log(store.getState());

store.dispatch(updateUserAction);

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
