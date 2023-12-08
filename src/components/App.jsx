// import { Component } from 'react';
import Home from 'Pages/HomePage';
import Movies from 'Pages/MovisePage';
import MovieDetails from 'Pages/MovieDetails';
// import NotFound from 'Pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import { Cast } from './Cast/Cast';
// import { SerchBar } from './SerchBar/SerchBar';

import Layout from './Layout/Layout';
import { Reviews } from './Reviews/Reviews';
// import { useState } from 'react';

// import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
};
