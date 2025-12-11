'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects, categories, type Project } from '@/lib/data';
import styles from '../page.module.css';

export default function ProjectsPage(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    const filtered = selectedCategory === 'All' 
      ? projects 
      : projects.filter(project => project.category === selectedCategory);
    setFilteredProjects(filtered);
  }, [selectedCategory]);

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
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <h2>My Projects</h2>
            </div>
            <p className={styles.sectionDescription}>
              Explore my portfolio of innovative solutions across government, AI, and business applications. 
              Each project showcases my expertise in building scalable, user-centric systems.
            </p>
            
            <div className={styles.projectFilters}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.filterBtn} ${selectedCategory === category ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(category)}
                  type="button"
                  aria-label={`Filter by ${category}`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className={styles.projectGrid}>
              {filteredProjects.map((project, index) => (
                <ProjectCard key={`${project.title}-${index}`} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
