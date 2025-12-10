import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';

export default function Home() {
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
            <p>
              I&apos;m a passionate developer with experience in building web applications.
              I love creating solutions that make a difference and continuously learning new technologies.
            </p>
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
              <h2>Get In Touch</h2>
            </div>
            <p>Feel free to reach out if you want to collaborate or just chat!</p>
            <a href="mailto:your.email@example.com" className={styles.contactBtn}>
              Send Me an Email
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
