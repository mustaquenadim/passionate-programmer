import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import QuestionAnswer from './pages/questions/question-answer';
const Home = lazy(() => import('./pages/home'));
const SignIn = lazy(() => import('./pages/signin'));
const SignUp = lazy(() => import('./pages/signup'));
const Questions = lazy(() => import('./pages/questions'));
const Ask = lazy(() => import('./pages/questions/ask'));
const NotFound = lazy(() => import('./pages/404'));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<>...</>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="sign-up"
          element={
            <Suspense fallback={<>...</>}>
              <SignUp />
            </Suspense>
          }
        />
        <Route
          path="sign-in"
          element={
            <Suspense fallback={<>...</>}>
              <SignIn />
            </Suspense>
          }
        />
        <Route
          path="questions"
          element={
            <Suspense fallback={<>...</>}>
              <Questions />
            </Suspense>
          }
        />
        <Route
          path="questions/ask"
          element={
            <Suspense fallback={<>...</>}>
              <Ask />
            </Suspense>
          }
        />
        <Route
          path="questions/:questionId"
          element={
            <Suspense fallback={<>...</>}>
              <QuestionAnswer />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
