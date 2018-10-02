import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

function reducer() {
  return 'state';
}

const store = createStore(reducer);

console.log(store.getState())

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
