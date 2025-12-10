'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  // SVG gradient definition for icons
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
  const projects = [
    {
      title: "Barangay Appointment System",
      description: "A comprehensive PHP-based appointment management system for barangay offices.",
      tags: ["PHP", "MySQL"],
      link: "https://github.com/AldrianLoberiano/sto_tomas_appointment_system",
      image: "/images/project1.png"
    },
    {
      title: "Smart Fruit Detection",
      description: "A modern dark-themed UI with glowing neon-green accents designed for Smart Fruit Detection, showcasing AI-powered features like real-time detection, accurate counting, and visual analytics. The clean layout and vibrant highlights create a futuristic and user-friendly experience.",
      tags: ["Django", "OpenCV", "MySQL", "TensorFlow"],
      link: "https://github.com/AldrianLoberiano/website",
      image: "/images/project2.png"
    },
    {
      title: "Project Three",
      description: "A brief description of your third project and its impact.",
      tags: ["Python", "Flask", "PostgreSQL"],
      link: "https://github.com/yourusername/project3",
      image: "/images/project3.jpg"
    }
  ];

  return (
    <>
      {iconGradient}
      <Header />
      <main>
        <Hero />
        
        <section id="about" className={styles.section}>
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
                    <img src="/images/profile.jpg" alt="Aldrian Loberiano" />
                  </div>
                </div>
                
                <div className={styles.aboutTextSection}>
                  <p className={styles.aboutDescription}>
                    I&apos;m a passionate developer with experience in building web applications.
                    I love creating solutions that make a difference and continuously learning new technologies.
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
                      <span className={styles.infoValue}>Calauan, Laguna,  Philippines</span>
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
              <a href="#contact" className={styles.startProjectBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                <span>Start a Project</span>
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <svg className={styles.sectionIcon} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <h2>Projects</h2>
            </div>
            <div className={styles.projectGrid}>
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section id="stats" className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>Projects Completed</div>
                <div className={styles.statBar}>
                  <div className={styles.statFill} style={{ width: '75%' }}></div>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Technologies Used</div>
                <div className={styles.statBar}>
                  <div className={styles.statFill} style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>Features Developed</div>
                <div className={styles.statBar}>
                  <div className={styles.statFill} style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div className={styles.statNumber}>5+</div>
                <div className={styles.statLabel}>Industries Served</div>
                <div className={styles.statBar}>
                  <div className={styles.statFill} style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <svg className={styles.sectionIcon} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <h2>Technologies & Tools</h2>
            </div>
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
                        <div className={styles.skillFill} style={{ width: '90%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>90%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🟢</div>
                      <span className={styles.skillName}>Vue.js</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '82%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>82%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🅰️</div>
                      <span className={styles.skillName}>Angular</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '75%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>75%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🟩</div>
                      <span className={styles.skillName}>Nuxt.js</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '78%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>78%</span>
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
                      <span className={styles.skillPercent}>85%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🎨</div>
                      <span className={styles.skillName}>HTML / CSS</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '95%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>95%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>💨</div>
                      <span className={styles.skillName}>Tailwind CSS</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '88%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>88%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🅱️</div>
                      <span className={styles.skillName}>Bootstrap</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '85%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>85%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>⚡</div>
                      <span className={styles.skillName}>Vite</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '80%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>80%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>💲</div>
                      <span className={styles.skillName}>jQuery</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '90%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>90%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.skillCategory}>
                <div className={styles.categoryIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
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
                      <span className={styles.skillPercent}>85%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🚂</div>
                      <span className={styles.skillName}>Express.js</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '88%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>88%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🦅</div>
                      <span className={styles.skillName}>NestJS</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '80%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>80%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🐍</div>
                      <span className={styles.skillName}>Django</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '85%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>85%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🧪</div>
                      <span className={styles.skillName}>Flask</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '82%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>82%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🎼</div>
                      <span className={styles.skillName}>Laravel</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '80%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>80%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🍃</div>
                      <span className={styles.skillName}>Spring Boot</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '75%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>75%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🔷</div>
                      <span className={styles.skillName}>ASP.NET Core</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '78%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>78%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.skillCategory}>
                <div className={styles.categoryIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3>Infrastructure & Databases</h3>
                <div className={styles.skillsList}>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🐬</div>
                      <span className={styles.skillName}>MySQL</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '85%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>85%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🐘</div>
                      <span className={styles.skillName}>PostgreSQL</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '80%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>80%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🗃️</div>
                      <span className={styles.skillName}>SQLite</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '82%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>82%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🔷</div>
                      <span className={styles.skillName}>Microsoft SQL Server</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '78%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>78%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.skillCategory}>
                <div className={styles.categoryIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                  </svg>
                </div>
                <h3>Cloud Platforms & Services</h3>
                <div className={styles.skillsList}>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🔷</div>
                      <span className={styles.skillName}>Microsoft Azure</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '82%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>82%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>☁️</div>
                      <span className={styles.skillName}>Google Cloud Platform</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '78%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>78%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🔥</div>
                      <span className={styles.skillName}>Firebase</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '85%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>85%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>▲</div>
                      <span className={styles.skillName}>Vercel</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '88%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>88%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🌐</div>
                      <span className={styles.skillName}>Hostinger</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '80%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>80%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>📛</div>
                      <span className={styles.skillName}>Name.com</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '75%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>75%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>💰</div>
                      <span className={styles.skillName}>Namecheap</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '75%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>75%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.skillCategory}>
                <div className={styles.categoryIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <circle cx="12" cy="12" r="4"></circle>
                  </svg>
                </div>
                <h3>AI, Machine Learning & Data Science</h3>
                <div className={styles.skillsList}>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🧠</div>
                      <span className={styles.skillName}>TensorFlow</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '80%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>80%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🔥</div>
                      <span className={styles.skillName}>PyTorch</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '78%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>78%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>👁️</div>
                      <span className={styles.skillName}>OpenCV</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '85%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>85%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>📓</div>
                      <span className={styles.skillName}>Jupyter Notebook</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '90%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>90%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🤖</div>
                      <span className={styles.skillName}>OpenAI API</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '82%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>82%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🔮</div>
                      <span className={styles.skillName}>Google AI APIs</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '80%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>80%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>📊</div>
                      <span className={styles.skillName}>Google Colab</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '88%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>88%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.skillCategory}>
                <div className={styles.categoryIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                    <path d="M14 6h4"></path>
                    <path d="M14 18h4"></path>
                  </svg>
                </div>
                <h3>IoT & Embedded Systems</h3>
                <div className={styles.skillsList}>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🤖</div>
                      <span className={styles.skillName}>Arduino</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '85%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>85%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>📡</div>
                      <span className={styles.skillName}>ESP32</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '82%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>82%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>💻</div>
                      <span className={styles.skillName}>Arduino IDE</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '88%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>88%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>⚙️</div>
                      <span className={styles.skillName}>PlatformIO</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '80%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>80%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>📱</div>
                      <span className={styles.skillName}>Blynk</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '78%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>78%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>📊</div>
                      <span className={styles.skillName}>ThingsBoard</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '75%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>75%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>☁️</div>
                      <span className={styles.skillName}>Google Cloud IoT</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '72%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>72%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🔌</div>
                      <span className={styles.skillName}>Circuit Designer</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '80%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>80%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🧪</div>
                      <span className={styles.skillName}>Wokwi</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '85%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>85%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.skillCategory}>
                <div className={styles.categoryIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <h3>Design & Prototyping</h3>
                <div className={styles.skillsList}>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🎨</div>
                      <span className={styles.skillName}>Canva</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '90%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>90%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🎯</div>
                      <span className={styles.skillName}>Figma</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '85%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>85%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>📷</div>
                      <span className={styles.skillName}>Adobe Photoshop</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '80%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>80%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>✏️</div>
                      <span className={styles.skillName}>Adobe Illustrator</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '78%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>78%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.skillCategory}>
                <div className={styles.categoryIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3>Collaboration & Project Management</h3>
                <div className={styles.skillsList}>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🐙</div>
                      <span className={styles.skillName}>GitHub</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '90%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>90%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🦊</div>
                      <span className={styles.skillName}>GitLab</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '85%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>85%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>👥</div>
                      <span className={styles.skillName}>Microsoft Teams</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '88%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>88%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>📝</div>
                      <span className={styles.skillName}>Notion</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '82%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>82%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>💬</div>
                      <span className={styles.skillName}>Slack</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '85%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>85%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.skillCategory}>
                <div className={styles.categoryIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 1v6m0 6v6m5.2-14.2l-4.2 4.2m-2 2l-4.2 4.2m14.2-.8l-6-6m-6-6l-6 6m20.2 5.2l-4.2-4.2m-2-2l-4.2-4.2"></path>
                  </svg>
                </div>
                <h3>Miscellaneous Tools & Utilities</h3>
                <div className={styles.skillsList}>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>📦</div>
                      <span className={styles.skillName}>NPM</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '90%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>90%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🧶</div>
                      <span className={styles.skillName}>Yarn</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '85%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>85%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🎼</div>
                      <span className={styles.skillName}>Composer</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '88%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>88%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🐍</div>
                      <span className={styles.skillName}>Pip</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '90%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>90%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>💻</div>
                      <span className={styles.skillName}>VS Code</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '95%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>95%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🌐</div>
                      <span className={styles.skillName}>NetBeans</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '75%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>75%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🤖</div>
                      <span className={styles.skillName}>Android Studio</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '80%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>80%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🐍</div>
                      <span className={styles.skillName}>PyCharm</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '82%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>82%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🌙</div>
                      <span className={styles.skillName}>Eclipse</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '75%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>75%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>📮</div>
                      <span className={styles.skillName}>Postman</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '85%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>85%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>💡</div>
                      <span className={styles.skillName}>IntelliJ IDEA</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '80%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>80%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>🌊</div>
                      <span className={styles.skillName}>WebStorm</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '78%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>78%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>📝</div>
                      <span className={styles.skillName}>Sublime Text</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '85%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>85%</span>
                    </div>
                  </div>
                  <div className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIconPlaceholder}>⚛️</div>
                      <span className={styles.skillName}>Atom</span>
                    </div>
                    <div className={styles.skillProgress}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillFill} style={{ width: '80%' }}></div>
                      </div>
                      <span className={styles.skillPercent}>80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <svg className={styles.sectionIcon} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <h2>Let&apos;s Connect</h2>
            </div>
            <p>Feel free to reach out if you want to collaborate or just chat!</p>
            
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="your.email@example.com" 
                  required 
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="Subject" 
                  required 
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6} 
                  placeholder="Your message..." 
                  required
                ></textarea>
              </div>
              
              <button type="submit" className={styles.contactBtn}>
                <span>Send Message</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className={styles.scrollToTop}
          aria-label="Scroll to top"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </>
  );
}
