'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../page.module.css';

export default function AboutPage(): JSX.Element {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add(styles.fadeInSection);
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
      observer.disconnect();
    };
  }, []);

  const iconGradient = (
    <svg width="0" height="0" style={{ position: 'absolute' }}>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="50%" stopColor="#764ba2" />
          <stop offset="100%" stopColor="#f093fb" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <>
      {iconGradient}
      <Header />
      <main>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <svg className={styles.sectionIcon} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <h2>About Me</h2>
            </div>
            <div className={styles.aboutContent}>
              <div className={styles.aboutGrid}>
                <div className={styles.aboutImageSection}>
                  <div className={styles.aboutImageFrame}>
                    <Image src="/images/profile.jpg" alt="Aldrian Loberiano" width={400} height={400} />
                  </div>
                </div>
                
                <div className={styles.aboutTextSection}>
                  <p className={styles.aboutDescription}>
                    Hi! I&apos;m a versatile IT professional specializing in full-stack development, system administration, network engineering, and UI/UX design. I build end-to-end web solutions, maintain reliable IT infrastructure, and ensure seamless network operations. Passionate about AI and machine learning, I&apos;m expanding into computer vision technologies, exploring image processing, object detection, and deep learning models while crafting intuitive user experiences to create innovative digital solutions that enhance performance and security.
                  </p>
                  
                  <div className={styles.aboutInfo}>
                    <div className={styles.infoItem}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span className={styles.infoLabel}>Age:</span>
                      <span className={styles.infoValue}>24</span>
                    </div>
                    
                    <div className={styles.infoItem}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span className={styles.infoLabel}>Phone:</span>
                      <span className={styles.infoValue}>+63 991 485 2326</span>
                    </div>
                    
                    <div className={styles.infoItem}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <span className={styles.infoLabel}>Email:</span>
                      <span className={styles.infoValue}>loberianorian@gmail.com</span>
                    </div>
                    
                    <div className={styles.infoItem}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span className={styles.infoLabel}>Place:</span>
                      <span className={styles.infoValue}>Calauan, Laguna, Philippines</span>
                    </div>
                    
                    <div className={styles.infoItem}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                      <span className={styles.infoLabel}>Education:</span>
                      <span className={styles.infoValue}>Bachelor of Science in Information Technology</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.aboutActions}>
              <a href="/resume.pdf" download className={styles.resumeBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download Resume</span>
              </a>
              <Link href="/contact" className={styles.startProjectBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                <span>Start a Project</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
