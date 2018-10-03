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

const action2 = {
  type: 'changeTheChange',
  payload: {
    newState: 'new state 2'
  }
};

store.subscribe(() => {
  console.log('Store updated:', store.getState());
});

store.dispatch(action);
store.dispatch(action2);

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
