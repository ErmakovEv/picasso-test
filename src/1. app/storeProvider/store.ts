import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postsTotalSlice from './reducers/postsSlice';
import scrollSlice from './reducers/scrollSlice';
import { postApi } from '../../4. features/PostList/api/PostService';

const rootReducer = combineReducers({
  postsTotalSlice,
  scrollSlice,
  [postApi.reducerPath]: postApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
