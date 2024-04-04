import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootElement from "../../../2. pages/RootElement/RootElement";
import PostsList from "../../../components/PostsList";
import PostPage from "../../../components/PostPage";
// import { AboutPage } from "pages/AboutPage";
// import { PageLoader } from "widgets/PageLoader";
import { Suspense } from "react";
// import { ErrorPage } from "shared/ui/ErrorPage";

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
