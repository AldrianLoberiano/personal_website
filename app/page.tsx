'use client';

import { useState, useEffect } from 'react';
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
              <p>
                I&apos;m a passionate developer with experience in building web applications.
                I love creating solutions that make a difference and continuously learning new technologies.
              </p>
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
              <h2>Skills</h2>
            </div>
            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}>
                <h3>Frontend</h3>
                <ul>
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>HTML / CSS</li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h3>Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>Databases</li>
                </ul>
              </div>
              <div className={styles.skillCategory}>
                <h3>Tools</h3>
                <ul>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                </ul>
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
