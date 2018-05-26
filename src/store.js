import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import commonReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  commonReducer,
  initialState,
  composedEnhancers
);

export default store;