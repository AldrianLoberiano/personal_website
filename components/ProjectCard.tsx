import React from 'react';
import Image from 'next/image';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export default function ProjectCard({ title, description, tags, link, image }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.imageContainer}>
          <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
        </div>
      )}
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
            View Project →
          </a>
        )}
      </div>
    </div>
  );
}
