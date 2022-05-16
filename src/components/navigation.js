import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          <i className="fak fa-alert nav-icon"></i> COVID-19
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          <i className="fak fa-flask nav-icon"></i> Animal Nutrition
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          <i className="fak fa-grain nav-icon"></i> Crop Science
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          About
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          <i className="fak fa-grain nav-icon"></i> News
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          <i className="fak fa-cart nav-icon"></i> Store
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          <i className="fak fa-magnifying-glass nav-icon"></i>
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          <i className="fak fa-network nav-icon"></i>
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          <i className="fak fa-sphere nav-icon"></i>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
