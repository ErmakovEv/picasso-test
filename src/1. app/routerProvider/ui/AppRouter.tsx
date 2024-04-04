import { RouterProvider } from "react-router-dom";
import router from "../model/router";

export function AppRouter() {
  return <RouterProvider router={router} />;
}
