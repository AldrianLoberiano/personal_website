'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>drian.dev</span>
          </Link>
        </div>
        
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          <li><Link href="#home" onClick={closeMenu}>Home</Link></li>
          <li><Link href="#about" onClick={closeMenu}>About</Link></li>
          <li><Link href="#projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link href="#skills" onClick={closeMenu}>Skills</Link></li>
          <li><Link href="#contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
