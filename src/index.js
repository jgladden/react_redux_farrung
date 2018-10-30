import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { router, updateUri } from './router';
import { store } from './store';
import AppContainer from './containers/AppContainer';

store.subscribe(updateUri);
router.init();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, 
  document.getElementById('react-application')
);











