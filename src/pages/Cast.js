import React, { Component } from 'react';
import { fetchCast } from '../services/fetcher';
import PropTypes from 'prop-types';

const getIdFromProps = props => props.match.params.movieId;
const imageUrl = 'https://image.tmdb.org/t/p/w500';

export default class Cast extends Component {
  state = {
    casts: [],
    message: null,
  };

  componentDidMount() {
    this.getCast();
  }

  getCast = async () => {
    try {
      const id = getIdFromProps(this.props);
      const casts = await fetchCast(id);
      this.setState({ casts: casts.data.cast });
    } catch (message) {
      this.setState({ message });
    }
  };

  render() {
    const { casts } = this.state;
    return (
      <ul>
        {casts.map(cast => (
          <li key={cast.id}>
            <img
              style={{ width: 80, height: 'auto' }}
              src={imageUrl + `${cast.profile_path}`}
              alt="cast"
            />
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}

Cast.propTypes = {
  id: PropTypes.number,
};
