'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../page.module.css';

export default function ContactPage(): JSX.Element {
  const [formStatus, setFormStatus] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (formStatus) {
      const timer = setTimeout(() => {
        setFormStatus('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [formStatus]);

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setFormStatus('Message sent successfully! I\'ll get back to you soon.');
        form.reset();
      } else {
        setFormStatus(data.message || 'Failed to send message. Please try again or email me directly.');
      }
    } catch (error) {
      setFormStatus('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <h2>Contact</h2>
            </div>
            <p className={styles.sectionDescription}>
              Get in touch with me through any of the following methods or send a message directly.
            </p>
            
            <div className={styles.contactWrapper}>
              <div className={styles.contactSection}>
                <h3 className={styles.contactSubtitle}>Let&apos;s Connect</h3>
                <p className={styles.contactDescription}>
                  Feel free to reach out if you want to collaborate or just chat!
                </p>
                <div className={styles.contactInfo}>
                  <div className={styles.contactCard}>
                    <div className={styles.contactCardIcon}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <h3>Email</h3>
                    <a href="mailto:loberianorian@gmail.com">loberianorian@gmail.com</a>
                  </div>

                  <div className={styles.contactCard}>
                    <div className={styles.contactCardIcon}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <h3>Phone</h3>
                    <a href="tel:+639914852326">+63 991 485 2326</a>
                  </div>

                  <div className={styles.contactCard}>
                    <div className={styles.contactCardIcon}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <h3>Location</h3>
                    <p>Calauan, Laguna, Philippines</p>
                  </div>
                </div>
              </div>

              <div className={styles.contactSection}>
                <h3 className={styles.contactSubtitle}>Send Me a Message</h3>
                {formStatus && (
                  <div className={formStatus.includes('successfully') ? styles.successMessage : styles.errorMessage}>
                    {formStatus}
                  </div>
                )}
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <input type="hidden" name="access_key" value="d5ee3d7a-b967-4c66-bc77-8564b9babf9b" />
                  <input type="hidden" name="redirect" value="false" />
                  <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                  
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
                  
                  <button type="submit" className={styles.contactBtn} disabled={isSubmitting}>
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {!isSubmitting && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
