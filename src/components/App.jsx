import { lazy, Suspense } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './Layout/Layout';
import { Loader } from './Loader/loader';

const Home = lazy(() => import('Pages/HomePage'));
const Movies = lazy(() => import('Pages/MovisePage'));
const MovieDetails = lazy(() => import('Pages/MovieDetails'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Cast = lazy(() => import('components/Cast/Cast'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="reviews" element={<Reviews />} />
              <Route path="cast" element={<Cast />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
