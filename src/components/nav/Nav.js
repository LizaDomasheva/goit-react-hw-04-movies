import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';

const Nav = () => (
  <ul className={styles.nav}>
    <li className={styles.item}>
      <NavLink
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}
        exact
        to="/"
      >
        Home
      </NavLink>
    </li>
    <li className={styles.item}>
      <NavLink
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}
        to={'/movies'}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Nav;
