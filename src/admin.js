import './admin.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { router, updateUri } from './router';
import { store } from './store';
import AdminContainer from 'containers/Admin/AdminContainer';

store.subscribe(updateUri);
router.init();

ReactDOM.render(
  <Provider store={store}>
    <AdminContainer />
  </Provider>,
  document.getElementById('react-application')
);
