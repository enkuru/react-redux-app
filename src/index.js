import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import userReducer from './reducers/userReducer';
import productsReducer from './reducers/productsReducer';

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
/*
const updateUserAction = {
  type: 'userUpdate',
  payload: {
    user: 'New USER'
  }
};

store.dispatch(updateUserAction);*/

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
serviceWorker.unregister();
