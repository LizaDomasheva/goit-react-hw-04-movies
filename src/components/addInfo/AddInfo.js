import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './addInfo.module.css';
import PropTypes from 'prop-types'

const AddInfo = ({ id }) => (
  <ul className={styles.list}>
    <li>
      <NavLink
        exact
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}
        to={{
          pathname: `/movies/${id}/cast`,
          state: { from: '/'},
        }}
      >
        Cast
      </NavLink>
    </li>
    <li>
      <NavLink
        exact
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}
        to={{
          pathname: `/movies/${id}/reviews`,
          state: { from: '/'},
        }}
      >
        Reviews
      </NavLink>
    </li>
  </ul>
);

AddInfo.propTypes = {
id: PropTypes.number.isRequired,
}

export default AddInfo;



