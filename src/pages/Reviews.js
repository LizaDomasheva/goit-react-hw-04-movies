import React, { Component } from 'react';
import { fetchReviews } from '../services/fetcher';
import PropTypes from 'prop-types';

const getIdFromProps = props => props.match.params.movieId;

export default class Reviews extends Component {
  state = {
    reviews: [],
    message: null,
  };

  componentDidMount() {
    this.getReviews();
  }

  getReviews = async () => {
    try {
      const id = getIdFromProps(this.props);
      const reviews = await fetchReviews(id);
      this.setState({ reviews: reviews.data.results });
    } catch (message) {
      this.setState({ message });
    }
  };

  render() {
    const { reviews } = this.state;
    return (
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    );
  }
}

Reviews.propTypes = {
  id: PropTypes.number,
};
