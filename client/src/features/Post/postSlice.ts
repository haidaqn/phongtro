import { Post } from '@/models/Post';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as actions from './postAction';

export interface post {
    posts: Post[];
    isLoading: boolean;
    count: number;
    type: {};
}

let initialState: post = {
    posts: [],
    isLoading: false,
    count: 0,
    type: {},
};

export const PostSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actions.getPostLimit.fulfilled, (state, action) => {
            state.posts = action.payload.rows;
            state.count = action.payload.count;
            state.type = action.payload.type;
        });
    },
});

export const {} = PostSlice.actions;

export default PostSlice.reducer;
