import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app'
import { Provider } from 'react-redux'
import store from './store'
import Home from './components/Home'

ReactDOM.render(
  <App />,
  document.getElementById('app')
);