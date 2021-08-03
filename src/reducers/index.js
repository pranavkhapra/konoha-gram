import { combineReducers } from 'redux';
import comments from './comments';
import posts from './posts';
import numbers from './numbers';

export default combineReducers({
  comments,
  posts,
  numbers,
});
