import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/layout/DefaultLayout';
const Home = React.lazy(() => import('./pages/Home'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<>...</>}>
              <Home />
            </Suspense>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
