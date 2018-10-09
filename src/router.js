import { Router } from 'director';
import { setPortfolioType, setPortfolioId } from './actions';
import { store } from './store';

Router({
  '/portfolio/:type': type => store.dispatch(setPortfolioType({type})),
  '/portfolio/:type/:id': (type, id) => store.dispatch(setPortfolioId({id}))
})
.configure({
  notfound: () => {}, 
  html5history: true
}).init();

const router = () => {
  const {
    type,
    id
  } = store.getState().display_portfolio;

  let path = `/portfolio/${type}`;
  if(id) path = `${path}/${id}`;

  if (path !== window.location.pathname) 
    window.history.pushState(null, null, path);
};

export default router;
