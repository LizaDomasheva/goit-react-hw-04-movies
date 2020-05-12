import React, { Component } from 'react';
import { fetchTrendingMovies } from '../services/fetcher';
import { Home } from '../components/home/Home';

export default class HomePage extends Component {
  state = {
    movies: [],
    message: null,
  };

  componentDidMount() {
    this.getTrendingMovies();
  }

  getTrendingMovies = async () => {
    try {
      const movies = await fetchTrendingMovies();
      this.setState({ movies: movies.data.results });
    } catch (message) {
      this.setState({ message });
    }
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <Home movies={movies} />
      </>
    );
  }
}

