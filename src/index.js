import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

function reducer(state, action) {
  if (action.type === 'changeTheChange') {
    return action.payload.newState;
  }
  return 'state';
}

const store = createStore(reducer);

console.log(store.getState());

const action = {
  type: 'changeTheChange',
  payload: {
    newState: 'new state'
  }
};

store.dispatch(action);
console.log(store.getState());

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
