import React from 'react';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.logoContainer}>
          <img src="/images/logo.svg" alt="Logo" className={styles.logoImage} />
        </div>
        
        <h1 className={styles.logoText}>LOGO</h1>

        <div className={styles.navIcons}>
          <img src="/images/search-icon.svg" alt="Search" className={styles.icon} />
          <img src="/images/heart-icon.svg" alt="Favorites" className={styles.icon} />
          <img src="/images/cart-icon.svg" alt="Cart" className={styles.icon} />
          <img src="/images/user-icon.svg" alt="User" className={styles.icon} />
        </div>
      </div>
    </header>
  );
}
