import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { router, updateUri } from './router';
import { store } from './store';
import WebsiteContainer from 'containers/Website/WebsiteContainer';

store.subscribe(updateUri);
router.init();

ReactDOM.render(
  <Provider store={store}>
    <WebsiteContainer />
  </Provider>, 
  document.getElementById('react-application')
);











