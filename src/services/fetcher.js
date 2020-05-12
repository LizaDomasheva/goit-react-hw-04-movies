import axios from 'axios';


axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchReviews = async id => {
  try {
    const reviews = await axios.get(
      `/movie/${id}/reviews?api_key=${process.env.REACT_APP_UNIQUE_KEY}&language=en-US&page=1`,
    );
    return reviews
  } catch (error) {
    console.log(error);
  }
};

export const fetchCast = async id => {
  try {
    const casts = await axios.get(
      `/movie/${id}/credits?api_key=${process.env.REACT_APP_UNIQUE_KEY}`,
    );
    return casts
  } catch (error) {
    console.log(error);
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const movies = await axios.get(
      `/trending/movie/day?api_key=${process.env.REACT_APP_UNIQUE_KEY}`,
    );
    return movies
  } catch (error) {
    this.setState({ error: error });
  }
};

export const fetchSearchMovie = async (query) => {
  try {
    const moviesList = await axios.get(
      `/search/movie?api_key=${process.env.REACT_APP_UNIQUE_KEY}&language=en-US&query=${query}&page=1`,
    );
   return moviesList
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetail = async (id) => {
   try {
       const movie = await axios.get(
         `/movie/${id}?api_key=${process.env.REACT_APP_UNIQUE_KEY}&language=en-US`,
       );
       return movie
   } catch (error) {
    console.log(error);
   }
  };
