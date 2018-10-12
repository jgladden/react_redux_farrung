import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import router from './router';
import { store } from './store';
import Admin from './containers/AdminContainer';
import Website from './containers/WebsiteContainer';

store.subscribe(router);

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <Admin />
      <Website />
    </React.Fragment>
  </Provider>, 
  document.getElementById('react-application')
);












