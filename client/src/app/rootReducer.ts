// reducers/index.js
import { combineReducers } from 'redux';
import postReducer from '@/features/Post/postSlice';
import categoryReducer from '@/features/Category/categorySlice';
import authReducer from '@/features/auth/AuthSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    category: categoryReducer,
});

export default rootReducer;
