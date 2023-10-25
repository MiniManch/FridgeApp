import React from 'react';
import styles from '../../Style/HomepageHeader.module.css'

const HomepageHeader = () => {
  return (
    <div className={styles.homepageHeader}>
      <h1 className={styles.headerTitle}>Welcome to My Fridge App</h1>
      <p className={styles.headerSubtitle}>Keep your fridge organized and your food fresh!</p>
      <button className={styles.headerButton}>Get Started</button>
    </div>
  );
}

export default HomepageHeader;
