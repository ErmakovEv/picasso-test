import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootElement from '../../../2. pages/RootElement/RootElement';
import PostsList from '../../../4. features/PostList/ui/PostsList';
import PostPage from '../../../2. pages/PostPage/PostPage';
import { Suspense } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootElement />} errorElement={<>Error</>}>
      <Route
        index
        element={
          <Suspense fallback={<>Loading...</>}>
            <PostsList />
          </Suspense>
        }
      />
      <Route
        path="/:id"
        element={
          <Suspense fallback={<>Loading...</>}>
            <PostPage />
          </Suspense>
        }
      />
    </Route>
  )
);

export default router;
