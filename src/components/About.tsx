// src/components/About.tsx
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "../styles/About.module.css";

const CARDS = [
  { icon: "🎓", label: "Academic", value: "M.Sc. CS @ Sambalpur University" },
  { icon: "🔬", label: "Research", value: "Computer Vision & AI for Agriculture" },
  { icon: "🌐", label: "Engineering", value: "Full-Stack Web & Network Systems" },
  { icon: "🚀", label: "Goal", value: "Research Role & Software Engineering" },
];

const About = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className={`${styles.about} section`} aria-label="About Sankalpa">
      <span className="section-label">About</span>
      <h2 className={`section-title ${isVisible ? "visible" : ""} reveal`}>
        Building at the intersection of<br />
        <em className={styles.em}>research & engineering</em>
      </h2>

      <div className={styles.grid}>
        <div className={`${styles.bio} reveal ${isVisible ? "visible" : ""}`}>
          <p>
            I'm a final-year M.Sc. Computer Science student at Sambalpur University with a{" "}
            <strong>CGPA of 8.81</strong>, specializing in AI/ML, computer networks, and full-stack
            web development. I actively pursue research alongside building real software — currently
            with two papers in progress on computer vision and intelligent transportation systems.
          </p>
          <p>
            My work spans deep learning models for livestock behaviour recognition, IPv6-based IoT
            network architectures, and production web applications. I'm drawn to problems where
            systems thinking and applied AI intersect — building things that are both technically
            rigorous and genuinely useful.
          </p>
          <p>
            I'm actively seeking <strong>software engineering internships</strong>,{" "}
            <strong>research assistant roles</strong>, and{" "}
            <strong>graduate trainee positions</strong> where I can contribute meaningfully from
            day one.
          </p>

          <div className={styles.quickFacts}>
            <div className={styles.fact}>
              <span className={styles.factIcon}>📍</span>
              <span>Odisha, India</span>
            </div>
            <div className={styles.fact}>
              <span className={styles.factIcon}>📧</span>
              <a href="mailto:sankalpasovansamal@gmail.com">sankalpasovansamal@gmail.com</a>
            </div>
            <div className={styles.fact}>
              <span className={styles.factIcon}>📱</span>
              <a href="tel:+918926371917">+91-8926371917</a>
            </div>
          </div>
        </div>

        <div className={styles.cards}>
          {CARDS.map((c, i) => (
            <div
              key={i}
              className={`glass-card ${styles.card} reveal reveal-delay-${i + 1} ${isVisible ? "visible" : ""}`}
            >
              <span className={styles.cardIcon}>{c.icon}</span>
              <div>
                <p className={styles.cardLabel}>{c.label}</p>
                <p className={styles.cardValue}>{c.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
