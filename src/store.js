import { createStore } from 'redux';
import rootReducer from './reducers';
import posts from './data/posts';
import comments from './data/comments';

const defaultState = {
  posts,
  comments,
};

const store = createStore(
  rootReducer,
  defaultState,
  // so that we can integerate the redux dev tools here
  typeof window === 'object' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

export default store;
