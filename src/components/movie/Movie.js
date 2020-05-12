import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Cast from '../../pages/Cast';
import Reviews from '../../pages/Reviews';
import AddInfo from '../addInfo/AddInfo';
import styles from './movie.module.css';
import PropTypes from 'prop-types'

const imageUrl = 'https://image.tmdb.org/t/p/w500'

const Movie = ({ title, vote_average, overview, genres, poster_path, onGoBack, id, match}) => (
  <>
  <div className={styles.container}>
    <button type="button" onClick={onGoBack}>&#129044; Go back</button>	
    <div className={styles.movieBox}>
  <div>
    <img className={styles.image} alt="movie" src={imageUrl + `${poster_path}`}></img>
    </div>
  <div className={styles.movieDiv}>
    <h2>{title}</h2>
    <p>User score: {vote_average*10}%</p>
    <h3>Overview</h3>
    <p>{overview}</p>
    <h3>Genres</h3>
    <p style={{wordSpacing: 15}}>{genres.join(' ')}</p>
  </div>
    </div>
    </div>
  <div className={styles.infoBlock}>
    <p className={styles.title}>Additional information</p>
    <AddInfo id={id}/>
    <Switch>
    <Route path={`${match.path}/cast`} exact render={props=><Cast {...props} id={id} />}/>
    <Route path={`${match.path}/reviews`} exact render={props=><Reviews {...props} id={id} />}/>
    </Switch>
    </div>
    </>
);

Movie.propTypes = {
  title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.array,
  poster_path: PropTypes.string,
  onGoBack: PropTypes.func,
  id: PropTypes.number,
}

export default withRouter(Movie);


