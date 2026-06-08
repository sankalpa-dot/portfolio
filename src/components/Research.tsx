// src/components/Research.tsx
import { useScrollReveal } from "../hooks/useScrollReveal";
import { RESEARCH_PAPERS, RESEARCH_INTERESTS } from "../data/portfolio";
import styles from "../styles/Research.module.css";

const STATUS_CONFIG = {
  "under-review": { label: "Under Review", color: "accent" },
  ongoing: { label: "Ongoing", color: "green" },
  published: { label: "Published", color: "green" },
};

const Research = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="research" ref={ref} className={`${styles.research} section`} aria-label="Research">
      <span className="section-label">Research</span>
      <h2 className={`section-title reveal ${isVisible ? "visible" : ""}`}>Research Work</h2>
      <p className={`section-desc reveal reveal-delay-1 ${isVisible ? "visible" : ""}`}>
        Active researcher applying AI and computer vision to solve real-world problems in
        agriculture, transportation, and network systems.
      </p>

      {/* Papers */}
      <div className={styles.papers}>
        {RESEARCH_PAPERS.map((paper, i) => {
          const status = STATUS_CONFIG[paper.status];
          return (
            <article
              key={i}
              className={`glass-card ${styles.paper} reveal reveal-delay-${i + 1} ${isVisible ? "visible" : ""}`}
              aria-label={`Research paper: ${paper.title}`}
            >
              <div className={styles.paperHeader}>
                <span className={`badge ${status.color}`}>{status.label}</span>
                <span className={styles.paperDate}>{paper.date}</span>
              </div>

              <h3 className={styles.paperTitle}>{paper.title}</h3>
              <p className={styles.paperAbstract}>{paper.abstract}</p>

              <div className={styles.paperMeta}>
                {paper.coAuthors && (
                  <div className={styles.authors}>
                    <span className={styles.metaLabel}>Co-Authors:</span>
                    <span>{paper.coAuthors.join(", ")} · {paper.institution}</span>
                  </div>
                )}
                <div className={styles.areas}>
                  {paper.area.map((a, j) => (
                    <span key={j} className="badge">{a}</span>
                  ))}
                </div>
              </div>

              {paper.url && (
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewLink}
                  aria-label={`View paper: ${paper.title}`}
                >
                  View Paper →
                </a>
              )}
            </article>
          );
        })}
      </div>

      {/* Research Interests */}
      <div className={styles.interestsSection}>
        <h3 className={`${styles.interestsTitle} reveal reveal-delay-2 ${isVisible ? "visible" : ""}`}>
          Research Interests
        </h3>
        <div className={styles.interestsGrid}>
          {RESEARCH_INTERESTS.map((interest, i) => (
            <div
              key={i}
              className={`glass-card ${styles.interest} reveal reveal-delay-${Math.min(i + 1, 5)} ${isVisible ? "visible" : ""}`}
            >
              <span className={styles.interestIcon}>{interest.icon}</span>
              <h4 className={styles.interestTitle}>{interest.title}</h4>
              <p className={styles.interestDesc}>{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
