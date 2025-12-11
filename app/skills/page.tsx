'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../page.module.css';

export default function SkillsPage(): JSX.Element {
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
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <h2>Technologies & Tools</h2>
            </div>
            <p className={styles.sectionDescription}>
              My diverse technical toolkit spans modern frameworks, cloud platforms, AI/ML technologies, 
              and IoT systems. I continuously expand my skills to deliver cutting-edge solutions.
            </p>
            
            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}>
                <div className={styles.categoryIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3>Frontend</h3>
                <div className={styles.skillsList}>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>⚛️</div>
                      <span className={styles.skillName}>React / Next.js</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>📘</div>
                      <span className={styles.skillName}>TypeScript</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🎨</div>
                      <span className={styles.skillName}>CSS / Tailwind</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.skillCategory}>
                <div className={styles.categoryIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  </svg>
                </div>
                <h3>Backend</h3>
                <div className={styles.skillsList}>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🟢</div>
                      <span className={styles.skillName}>Node.js</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🐍</div>
                      <span className={styles.skillName}>Python</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🐘</div>
                      <span className={styles.skillName}>PHP</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.skillCategory}>
                <div className={styles.categoryIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  </svg>
                </div>
                <h3>Databases & Cloud</h3>
                <div className={styles.skillsList}>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🐬</div>
                      <span className={styles.skillName}>MySQL</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>☁️</div>
                      <span className={styles.skillName}>Cloud Platforms</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
