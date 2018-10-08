import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import router from './router';
import { store } from './store';
import PortfolioNavContainer from './containers/PortfolioNavContainer';
import PortfolioListContainer from './containers/PortfolioListContainer';
import PortfolioDetailContainer from './containers/PortfolioDetailContainer';

store.subscribe(router);

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <PortfolioNavContainer />
      <PortfolioDetailContainer />
      <PortfolioListContainer />
    </React.Fragment>
  </Provider>, 
  document.getElementById('react-application')
);












