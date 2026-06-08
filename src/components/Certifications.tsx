// src/components/Certifications.tsx
import { useScrollReveal } from "../hooks/useScrollReveal";
import { CERTIFICATIONS } from "../data/portfolio";
import styles from "../styles/Certifications.module.css";

const Certifications = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="certifications" ref={ref} className={`${styles.certs} section`} aria-label="Certifications">
      <span className="section-label">Credentials</span>
      <h2 className={`section-title reveal ${isVisible ? "visible" : ""}`}>Certifications</h2>
      <p className={`section-desc reveal reveal-delay-1 ${isVisible ? "visible" : ""}`}>
        Industry and academic certifications from premier Indian institutions via the NPTEL platform.
      </p>

      <div className={styles.grid}>
        {CERTIFICATIONS.map((cert, i) => (
          <article
            key={i}
            className={`glass-card ${styles.card} reveal reveal-delay-${i + 1} ${isVisible ? "visible" : ""}`}
            aria-label={`${cert.name} certification from ${cert.issuer}`}
          >
            <div className={styles.icon}>{cert.icon}</div>
            <div className={styles.content}>
              <h3 className={styles.name}>{cert.name}</h3>
              <p className={styles.issuer}>
                {cert.issuer} · <span className={styles.platform}>{cert.platform}</span>
              </p>
              <div className={styles.footer}>
                <div className={styles.meta}>
                  <span className="badge">{cert.date}</span>
                  {cert.score && (
                    <span className="badge accent">Score: {cert.score}</span>
                  )}
                </div>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewBtn}
                  aria-label={`View ${cert.name} certificate`}
                >
                  View Certificate ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* NPTEL note */}
      <p className={`${styles.note} reveal reveal-delay-3 ${isVisible ? "visible" : ""}`}>
        ✦ NPTEL is an initiative by IITs and IISc funded by MHRD, Government of India,
        offering university-level online courses in engineering and science.
      </p>
    </section>
  );
};

export default Certifications;
