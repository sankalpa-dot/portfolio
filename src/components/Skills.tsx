// src/components/Skills.tsx
import { useScrollReveal } from "../hooks/useScrollReveal";
import { SKILL_CATEGORIES } from "../data/portfolio";
import styles from "../styles/Skills.module.css";

const SkillBar = ({ level }: { level: number }) => (
  <div className={styles.skillBar} aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <div
        key={i}
        className={`${styles.skillBarSegment} ${i < level ? styles.filled : ""}`}
      />
    ))}
  </div>
);

const Skills = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" ref={ref} className={`${styles.skills} section`} aria-label="Skills">
      <span className="section-label">Expertise</span>
      <h2 className={`section-title reveal ${isVisible ? "visible" : ""}`}>Technical Skills</h2>
      <p className={`section-desc reveal reveal-delay-1 ${isVisible ? "visible" : ""}`}>
        Core competencies developed through academic coursework, personal projects, and active
        research — listed honestly without inflating proficiency.
      </p>

      <div className={styles.categories}>
        {SKILL_CATEGORIES.map((cat, ci) => (
          <div
            key={ci}
            className={`reveal reveal-delay-${Math.min(ci + 1, 5)} ${isVisible ? "visible" : ""}`}
          >
            <h3 className={styles.categoryTitle}>
              {cat.name}
            </h3>
            <div className={styles.skillGrid}>
              {cat.skills.map((skill, si) => (
                <div key={si} className={`glass-card ${styles.skillCard}`}>
                  <div className={styles.skillTop}>
                    <i
                      className={`${skill.icon} colored ${styles.skillIcon}`}
                      aria-hidden="true"
                    />
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                  <SkillBar level={skill.level} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Proficiency legend */}
      <div className={`${styles.legend} reveal reveal-delay-4 ${isVisible ? "visible" : ""}`}>
        <span className={styles.legendLabel}>Proficiency:</span>
        {["Beginner", "Basic", "Proficient", "Advanced", "Expert"].map((l, i) => (
          <div key={i} className={styles.legendItem}>
            <SkillBar level={i + 1} />
            <span>{l}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
