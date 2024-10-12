import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.subscribe}>
          <h4>BE THE FIRST TO KNOW</h4>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <p>+44 22 193 5831</p>
          <p>customercare@mettamuse.com</p>
          <p>Currency: USD</p>
        </div>
        <div className={styles.social}>
          <h4>Follow Us</h4>
          <p>Social Media Links</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
