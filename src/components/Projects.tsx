// src/components/Projects.tsx
import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { PROJECTS } from "../data/portfolio";
import styles from "../styles/Projects.module.css";

const STATUS_LABELS = {
  completed: { label: "Completed", color: "green" },
  ongoing: { label: "Ongoing", color: "accent" },
  research: { label: "Research", color: "accent" },
};

const Projects = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" ref={ref} className={`${styles.projects} section`} aria-label="Projects">
      <span className="section-label">Work</span>
      <h2 className={`section-title reveal ${isVisible ? "visible" : ""}`}>Projects</h2>
      <p className={`section-desc reveal reveal-delay-1 ${isVisible ? "visible" : ""}`}>
        End-to-end applications and research prototypes built with a focus on engineering quality
        and real-world impact.
      </p>

      <div className={styles.grid} role="list">
        {PROJECTS.map((project, i) => {
          const isOpen = expanded === project.id;
          const statusConfig = STATUS_LABELS[project.status];
          return (
            <article
              key={project.id}
              className={`glass-card ${styles.card} reveal reveal-delay-${Math.min(i + 1, 5)} ${isVisible ? "visible" : ""} ${isOpen ? styles.expanded : ""}`}
              role="listitem"
            >
              {/* Card Header */}
              <div className={styles.cardTop}>
                <div className={styles.cardMeta}>
                  <span className={`badge ${statusConfig.color}`}>{statusConfig.label}</span>
                  <span className={styles.year}>{project.year}</span>
                </div>

                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                {/* Tech Stack */}
                <div className={styles.tech} aria-label="Technologies used">
                  {project.tech.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
              </div>

              {/* Expandable Details */}
              {isOpen && (
                <div className={styles.details} aria-expanded="true">
                  <p className={styles.longDesc}>{project.longDescription}</p>

                  <div className={styles.features}>
                    <p className={styles.featLabel}>Key Features</p>
                    <ul>
                      {project.features.map((f, j) => (
                        <li key={j} className={styles.feature}>
                          <span className={styles.featureDot} aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.impact}>
                    <span className={styles.impactIcon}>💡</span>
                    <p>{project.impact}</p>
                  </div>
                </div>
              )}

              {/* Card Footer */}
              <div className={styles.cardFooter}>
                <div className={styles.links}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.link} ${styles.liveLink}`}
                      aria-label={`View ${project.title} live demo`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                      Live Demo
                    </a>
                  )}
                </div>

                <button
                  className={styles.toggleBtn}
                  onClick={() => setExpanded(isOpen ? null : project.id)}
                  aria-expanded={isOpen}
                  aria-label={isOpen ? "Show less" : "Show more details"}
                >
                  {isOpen ? "Show less ↑" : "Details ↓"}
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* GitHub CTA */}
      <div className={`${styles.githubCta} reveal reveal-delay-3 ${isVisible ? "visible" : ""}`}>
        <p>More projects on GitHub</p>
        <a
          href="https://github.com/sankalpa-dot"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          View GitHub Profile →
        </a>
      </div>
    </section>
  );
};

export default Projects;
