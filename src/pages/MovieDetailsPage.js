import React, { Component, lazy, Suspense } from 'react';
// import Movie from '../components/movie/Movie';
import { fetchMovieDetail } from '../services/fetcher';

const getIdFromProps = props => props.match.params.movieId;
const Movie = lazy(() =>
  import('../components/movie/Movie.js' /* webpackChunkName: 'movie' */),
);

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    genres: [],
    massage: null,
    search: '',
    from: '',
  };

  componentDidMount() {
    this.props.location.state &&
      this.setState({
        search: this.props.location.state.search,
        from: this.props.location.state.from,
      });
    this.getMovieDetail();
  }

  getMovieDetail = async () => {
    try {
      const id = getIdFromProps(this.props);
      const movie = await fetchMovieDetail(id);
      const genres = movie.data.genres
        .map(genre => genre.name.toString().replace(/,/g, ', '))
        .slice(0, 3);
      this.setState({
        movie: movie.data,
        genres: genres,
      });
    } catch (message) {
      this.setState({ message });
    }
  };

  handleGoBack = () => {
    this.state.search
      ? this.props.history.push({
          pathname: this.state.from,
          search: `query=${this.state.search}`,
          state: { search: this.state.search },
        })
      : this.props.history.push('/');
  };

  render() {
    const { movie, genres } = this.state;
    return (
      movie && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Movie {...movie} genres={genres} onGoBack={this.handleGoBack} />
        </Suspense>
      )
    );
  }
}
