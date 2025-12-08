import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m <span>Your Name</span></h1>
        <p className={styles.subtitle}>Full Stack Developer | Designer | Creator</p>
        <p className={styles.description}>
          I build exceptional digital experiences that make people&apos;s lives better.
        </p>
        <div className={styles.buttons}>
          <a href="#projects" className={styles.primaryBtn}>View My Work</a>
          <a href="#contact" className={styles.secondaryBtn}>Get In Touch</a>
        </div>
      </div>
    </section>
  );
}
