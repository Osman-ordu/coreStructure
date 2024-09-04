import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorBoundary from '../utils/ErrorBoundary/ErrorBoundary';
import Loader from '../components/Loader';
const Home = lazy(() => import('../pages/Home'));
const Blog = lazy(() => import('../pages/Blog'));
const Services = lazy(() => import('../pages/Services'));
const Team = lazy(() => import('../pages/Team'));
const Testimonials = lazy(() => import('../pages/Testimonials'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path="/blog"
        element={
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Blog />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path="/services"
        element={
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Services />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path="/team"
        element={
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Team />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path="/testimonials"
        element={
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Testimonials />
            </Suspense>
          </ErrorBoundary>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
