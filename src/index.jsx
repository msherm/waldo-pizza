import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store.js';
import AppContainer from './containers/AppContainer.jsx';

//stylesheets
import './scss/meyer-reset.scss';
import './scss/main.scss';

render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>
  , document.getElementById('app')
);