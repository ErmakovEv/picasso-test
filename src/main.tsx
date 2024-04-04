import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import { AppRouter } from "./1. app/routerProvider/ui/AppRouter.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { setupStore } from "./store/store.ts";

export const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
