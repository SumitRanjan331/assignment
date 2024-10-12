import React from 'react';
import Link from 'next/link';
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li><Link href="/">Shop</Link></li>
          <li><Link href="/">Skills</Link></li>
          <li><Link href="/">Stories</Link></li>
          <li><Link href="/">About</Link></li>
          <li><Link href="/">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
