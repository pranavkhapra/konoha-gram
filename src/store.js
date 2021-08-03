import { createStore } from 'redux';
import reducer from './reducers/index';
import posts from './data/posts';
import comments from './data/comments';

// create an object for the default data
const defaultState = {
  posts,
  comments,
  numbers: 1,
};
const store = createStore(
  reducer,
  defaultState,
  // so that we can integerate the redux dev tools here
  typeof window === 'object' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

export default store;
