// reducers/index.js
import { combineReducers } from 'redux';
import userReducer from '@/features/User/useSlice';
import postReducer from '@/features/Post/postSlice';
import categoryReducer from '@/features/Category/categorySlice';

const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    category :categoryReducer,
});

export default rootReducer;
