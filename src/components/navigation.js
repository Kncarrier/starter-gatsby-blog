import React from 'react'
import { Link } from 'gatsby'

import {
  Icon
} from '@mui/material'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          <Icon baseClassName="fak" className="fa-alert" sx={{ color: "#c1531b" }} /> COVID-19
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/animal-nutrition" activeClassName="active">
          <Icon baseClassName="fak" className="fa-flask" sx={{ color: "#c1531b" }} /> Animal Nutrition
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          <Icon baseClassName="fak" className="fa-grain" sx={{ color: "#c1531b" }} /> Crop Science
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          <Icon baseClassName="fak" className="fa-alltech-a" sx={{ color: "#c1531b" }} /> About
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          <Icon baseClassName="fak" className="fa-page" sx={{ color: "#c1531b" }} /> News
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          <Icon baseClassName="fak" className="fa-cart" sx={{ color: "#c1531b" }} /> Store
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          <Icon baseClassName="fak" className="fa-magnifying-glass" sx={{ color: "#c1531b" }} />
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          <Icon baseClassName="fak" className="fa-network" sx={{ color: "#c1531b" }} />
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          <Icon baseClassName="fak" className="fa-sphere" sx={{ color: "#c1531b" }} />
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
