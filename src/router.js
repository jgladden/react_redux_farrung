import { Router } from 'director';
import { setPortfolioType } from './actions';
import { store } from './store';

Router({
  '/portfolio/:type': type => store.dispatch(setPortfolioType({type}))
})
.configure({
  notfound: () => {}, 
  html5history: true
}).init();

const router = () => {
  const {
    selected_portfolio_type: type
  } = store.getState();

  let path = `/portfolio/${type}`;

  if (path !== window.location.pathname) 
    window.history.pushState(null, null, path);
};

export default router;
