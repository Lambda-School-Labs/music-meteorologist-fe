import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

import * as Sentry from '@sentry/browser';
import ReactGA from 'react-ga';

import rootReducer from './Redux/reducers';
import './index.css';
import App from './App';

// import 'typeface-roboto';

ReactGA.initialize('UA-145979080-2');

Sentry.init({
  dsn: 'https://d1fc669b08fb4d33b336f1b64a48ae5b@sentry.io/1537793',
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root'),
);