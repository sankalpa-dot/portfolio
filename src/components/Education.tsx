// src/components/Education.tsx
import { useScrollReveal } from "../hooks/useScrollReveal";
import { EDUCATION } from "../data/portfolio";
import styles from "../styles/Education.module.css";

const Education = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="education" ref={ref} className={`${styles.education} section`} aria-label="Education">
      <span className="section-label">Education</span>
      <h2 className={`section-title reveal ${isVisible ? "visible" : ""}`}>Academic Journey</h2>
      <p className={`section-desc reveal reveal-delay-1 ${isVisible ? "visible" : ""}`}>
        Built on a strong foundation of computer science fundamentals with progressive specialization
        in AI, networks, and systems.
      </p>

      <div className={styles.timeline} role="list">
        {EDUCATION.map((edu, i) => (
          <article
            key={i}
            className={`${styles.item} reveal reveal-delay-${Math.min(i + 1, 5)} ${isVisible ? "visible" : ""}`}
            role="listitem"
          >
            <div className={styles.timelineLine} aria-hidden="true">
              <div className={styles.dot} />
              {i < EDUCATION.length - 1 && <div className={styles.connector} />}
            </div>

            <div className={`glass-card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <p className={styles.institution}>{edu.institution}</p>
                  <p className={styles.location}>{edu.location}</p>
                </div>
                <div className={styles.meta}>
                  <span className="badge accent">{edu.cgpa}</span>
                  <span className={styles.duration}>{edu.duration}</span>
                </div>
              </div>

              {edu.highlights.length > 0 && (
                <ul className={styles.highlights} aria-label="Highlights">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className={styles.highlight}>
                      <span className={styles.highlightDot} aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              {edu.coursework.length > 0 && (
                <div className={styles.coursework}>
                  <p className={styles.courseworkLabel}>Key Coursework</p>
                  <div className={styles.courseworkTags}>
                    {edu.coursework.map((c, j) => (
                      <span key={j} className="badge">{c}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
