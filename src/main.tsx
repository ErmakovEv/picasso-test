import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from './1. app/routerProvider/ui/AppRouter.tsx';
import './1. app/styles/index.css';
import { Provider } from 'react-redux';
import { setupStore } from './1. app/storeProvider/store.ts';

export const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
