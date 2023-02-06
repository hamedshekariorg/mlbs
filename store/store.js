import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export default function initializeStore(initialState = {}) {
  // add redux loading bar middleware
  const loadingMD = loadingBarMiddleware({
    promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'],
  });

  return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunk, loadingMD)),
  );
}
