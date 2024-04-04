import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPost } from '../../../5. entities/Post/model/models/IPost';

interface PostsState {
  total: number;
  current: number;
  posts: IPost[];
}

const initialState: PostsState = {
  total: 0,
  current: 10,
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    init: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    increment: (state) => {
      if (state.total > state.current) {
        state.current += 10;
      }
    },
    addPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    },
    getPost: (state, action: PayloadAction<number>) => {
      state.posts.find((item) => item.id === action.payload);
    },
  },
});

export default postsSlice.reducer;
