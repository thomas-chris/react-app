import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import reducers from './reducers/reducers'
import index from './sagas/index'
import './css/index.css';
import Router from './pages/Router';
import registerServiceWorker from './registerServiceWorker';


const sagaMiddleware = createSagaMiddleware()


const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(index)

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
