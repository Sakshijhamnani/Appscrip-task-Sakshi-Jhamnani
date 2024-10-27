import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        LOGO
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Shop</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/stories">Stories</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
