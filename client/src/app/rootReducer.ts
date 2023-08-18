// reducers/index.js
import { combineReducers } from 'redux';
import userReducer from '@/features/useSlice';
import postReducer from '@/features/Post/postSlice';

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});

export default rootReducer;