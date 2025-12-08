'use client';

import React from 'react';
import Header from './Header';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <Header />
      <div className={styles.backgroundGradient}></div>
      <div className={styles.content}>
        <div className={styles.greeting}>Hello, I&apos;m</div>
        <h1 className={styles.title}>
          <span className={styles.name}>Your Name</span>
        </h1>
        <p className={styles.subtitle}>
          <span className={styles.highlight}>Full Stack Developer</span> <span className={styles.divider}>|</span> Designer <span className={styles.divider}>|</span> Creator
        </p>
        <p className={styles.description}>
          Crafting exceptional digital experiences with cutting-edge technology.
          Transforming ideas into elegant, scalable solutions.
        </p>
        <div className={styles.buttons}>
          <a href="#projects" className={styles.primaryBtn}>
            <span>View My Work</span>
            <svg className={styles.arrow} width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            <span>Get In Touch</span>
          </a>
        </div>
      </div>
    </section>
  );
}
