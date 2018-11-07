import { Router } from 'director';
import { store } from './store';
import { setRoute } from './actions';

export const router = Router({
  '': () => store.dispatch(setRoute('/portfolio')),
  '/:primary': primary => store.dispatch(
    setRoute(`/${primary}`)
  ),
  '/:primary/:secondary': (primary, secondary) => store.dispatch(
    setRoute(`/${primary}/${secondary}`)
  ),
  '/:primary/:secondary/:tertiary': (primary, secondary, tertiary) => store.dispatch(
    setRoute(`/${primary}/${secondary}/${tertiary}`)
  )
})
  .configure({
    notfound: () => {}, 
    html5history: true
  });

export const updateUri = () => {
  const {
    route: {
      url: path
    }
  } = store.getState();
  if (path !== window.location.pathname) 
    window.history.pushState(null, null, path);
};

