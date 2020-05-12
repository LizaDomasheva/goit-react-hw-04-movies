import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import HomePage from '../pages/HomePage';
// import MoviesPage from '../pages/moviesPage/MoviesPage';
// import MovieDetailsPage from '../pages/MovieDetailsPage';
// import ErrorPage from '../pages/ErrorPage';
import Nav from './nav/Nav';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: 'home-page' */),
);

const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage' /* webpackChunkName: 'movieDetails-page' */),
);

const MoviesPage = lazy(() =>
  import('../pages/moviesPage/MoviesPage' /* webpackChunkName: 'movies-page' */),
);

const ErrorPage = lazy(() =>
  import('../pages/ErrorPage' /* webpackChunkName: 'error-page' */),
);

function App() {
  return (
    <>
      <Nav />
      <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path="/" exact render={props => <HomePage {...props} />} />
        <Route
          path="/movies/:movieId"
          render={props => <MovieDetailsPage {...props} />}
        />
        <Route path="/movies" render={props => <MoviesPage {...props} />} />
        <Route component={ErrorPage} />
      </Switch>
      </Suspense>
    </>
  );
}

export default App;


