import React, { Component, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import styles from './moviesPage.module.css';

const QueryList = lazy(() =>
  import('../QueryList' /* webpackChunkName: 'queryList' */),
);

export default class MoviesPage extends Component {
  state = {
    query: '',
    value: '',
  };

  componentDidMount() {
    this.props.location.state &&
      this.setState({ query: this.props.location.state.search });
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const q = e.target.elements[0].value;
    if (q === '') {
      alert('Make your search');
    } else {
      this.props.history.push({
        search: `?query=${q}`,
        state: { search: q },
      });
      this.setState({ query: q });
    }
  };

  render() {
    const { query, value } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Find movies"
            value={value}
            onChange={this.handleChange}
          />
          <button
            className={styles.button}
            type="submit"
            onChange={this.handleChange}
          >
            Search
          </button>
        </form>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Route
            path="/movies"
            render={props => <QueryList {...props} query={query} />}
          />{' '}
        </Suspense>
      </>
    );
  }
}
