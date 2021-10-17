import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const initialState = {
  items: []
};

const middleware = [thunk];

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk),
    typeof window === 'object' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
          window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  /*initialState,
  composeWithDevTools(applyMiddleware(...middleware))*/
);

export default store;
