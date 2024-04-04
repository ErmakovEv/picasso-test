import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../../../5. entities/Post/model/models/IPost';
import { postsSlice } from '../../../1. app/storeProvider/reducers/postsSlice';
import { store } from '../../../main';

const { init, addPosts } = postsSlice.actions;

export const postApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (build) => ({
    fetchPost: build.query<IPost[], number>({
      query: (num = 10) => ({
        url: `posts`,
        params: {
          _limit: num,
        },
      }),
      transformResponse: (response: IPost[], meta) => {
        const headers = meta?.response?.headers;
        if (headers) {
          const customHeader = headers.get('X-Total-Count');
          store.dispatch(init(customHeader ? +customHeader : 0));
          store.dispatch(addPosts(response));
        }
        return response;
      },
    }),
  }),
});
