import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { router, updateUri } from './router';
import { store } from './store';
import Website from 'components/Website/Website';

store.subscribe(updateUri);
router.init();

ReactDOM.render(
  <Provider store={store}>
    <Website />
  </Provider>, 
  document.getElementById('react-application')
);











