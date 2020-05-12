import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import PropTypes from 'prop-types';

export const Home = ({ movies }) => (
  <>
    <h2 className={styles.title}>Trending today</h2>
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: '/' },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  </>
);

Home.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
};

export default Home;
