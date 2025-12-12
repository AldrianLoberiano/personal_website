'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

interface NavLink {
  href: string;
  label: string;
  route: string;
}

const navLinks: NavLink[] = [
  { href: '#home', label: 'Home', route: '/' },
  { href: '#about', label: 'About', route: '/about' },
  { href: '#projects', label: 'Projects', route: '/projects' },
  { href: '#skills', label: 'Skills', route: '/skills' },
  { href: '#contact', label: 'Contact', route: '/contact' },
];

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('#home');
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }

      // If at the very top, set home as active
      if (window.scrollY < 100) {
        setActiveSection('#home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: NavLink): void => {
    closeMenu();
    
    // If on homepage and clicking a section, scroll to it
    if (isHomePage) {
      e.preventDefault();
      
      if (link.href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('#home');
        return;
      }

      const targetId = link.href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    // If not on homepage, use the route to navigate to the page
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
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={isHomePage ? link.href : link.route}
                onClick={(e) => handleClick(e, link)}
                className={activeSection === link.href ? styles.active : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
