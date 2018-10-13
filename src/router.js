import { Router } from 'director';
import { store } from './store';
import { setSection } from './actions';

export const router = Router({
  '': () => store.dispatch(setSection({primary: 'portfolio'})),
  '/:primary': primary => store.dispatch(
    setSection({ primary })
  ),
  '/:primary/:secondary': (primary, secondary) => store.dispatch(
    setSection({ primary, secondary })
  ),
  '/:primary/:secondary/:tertiary': (primary, secondary, tertiary) => store.dispatch(
    setSection({ primary, secondary, tertiary })
  )
})
.configure({
  notfound: () => {}, 
  html5history: true
});

export const updateUri = () => {
  const {
    section: {
      primary,
      secondary,
      tertiary
    }
  } = store.getState();
  let path = `/${primary}`;
  if(secondary) path += `/${secondary}`;
  if(tertiary) path += `/${tertiary}`;
  if (path !== window.location.pathname) 
    window.history.pushState(null, null, path);
};

