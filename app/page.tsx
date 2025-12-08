import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';

export default function Home() {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of your first project and what it does.",
      tags: ["Next.js", "TypeScript", "React"],
      link: "https://github.com/yourusername/project1",
      image: "/images/project1.jpg"
    },
    {
      title: "Project Two",
      description: "A brief description of your second project and its features.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/project2",
      image: "/images/project2.jpg"
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
      <Header />
      <main>
        <Hero />
        
        <section id="about" className={styles.section}>
          <div className={styles.container}>
            <h2>About Me</h2>
            <p>
              I&apos;m a passionate developer with experience in building web applications.
              I love creating solutions that make a difference and continuously learning new technologies.
            </p>
          </div>
        </section>

        <section id="projects" className={styles.section}>
          <div className={styles.container}>
            <h2>Projects</h2>
            <div className={styles.projectGrid}>
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className={styles.section}>
          <div className={styles.container}>
            <h2>Skills</h2>
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
            <h2>Get In Touch</h2>
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
