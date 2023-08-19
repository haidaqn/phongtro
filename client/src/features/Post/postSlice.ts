import { Post } from '@/models/Post';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as actions from './postAction';

export interface post {
    posts: Post[];
    isLoading: boolean;
    count: number;
}

let initialState: post = {
    posts: [],
    isLoading: false,
    count: 0,
};

export const PostSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
    },
    extraReducers: (builder)=> {
        // builder.addCase(actions.getPosts.fulfilled, (state, action) => {
        //     state.posts = action.payload.rows;
        //     state.count = action.payload.count;
        // })
        builder.addCase(actions.getPostLimit.fulfilled, (state, action) => {
            state.posts = action.payload.rows;
            state.count = action.payload.count;
        });
        // builder.addMatcher(
        //     (action) => action.type === 'getPostLimit/fulfilled',
        //     (state, action) => {
        //         console.log(action.payload);
        //     state.posts = action.payload;
        // })
    }
});

export const {  } = PostSlice.actions;

export default PostSlice.reducer;