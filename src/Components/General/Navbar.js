import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Style/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/login" className={styles.navLink}>
            Login
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/signup" className={styles.navLink}>
            Signup
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
