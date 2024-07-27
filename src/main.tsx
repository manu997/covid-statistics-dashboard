import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './Main.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './i18n';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './routes/unknown-route/index.tsx';
import Exercice1 from './routes/exercice-1/Exercice1.tsx';
import Exercice2 from './routes/exercice-2/Exercice2.tsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/exercice-1',
    element: <Exercice1 />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/exercice-2',
    element: <Exercice2 />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
