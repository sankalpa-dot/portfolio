// src/components/GitHubStats.tsx
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "../styles/GitHubStats.module.css";

// GitHub username — update if changed
const GITHUB_USER = "sankalpa-dot";

const GitHubStats = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="github"
      ref={ref}
      className={`${styles.github} section`}
      aria-label="GitHub Statistics"
    >
      <span className="section-label">Activity</span>
      <h2 className={`section-title reveal ${isVisible ? "visible" : ""}`}>GitHub Stats</h2>
      <p className={`section-desc reveal reveal-delay-1 ${isVisible ? "visible" : ""}`}>
        Open-source contributions, repositories, and coding activity on GitHub.
      </p>

      <div className={`${styles.statsGrid} reveal reveal-delay-2 ${isVisible ? "visible" : ""}`}>
        {/* GitHub Stats Card */}
        <div className={`glass-card ${styles.statCard}`}>
          <img
  src={`https://github-readme-stats.vercel.app/api?username=sankalpa-dot&show_icons=true&theme=tokyonight&hide_border=true&cache_seconds=86400`}
  alt="GitHub Statistics"
  className={styles.statImg}
/>
        </div>

        {/* Top Languages Card */}
        <div className={`glass-card ${styles.statCard}`}>
         <img
  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=sankalpa-dot&layout=compact&theme=tokyonight&hide_border=true&cache_seconds=86400`}
  alt="Top Languages"
  className={styles.statImg}
/>
        </div>

        {/* Streak Card */}
        <div className={`glass-card ${styles.streakCard}`}>
          <img
            src={`https://streak-stats.demolab.com?user=${GITHUB_USER}&theme=transparent&hide_border=true&stroke=0000&ring=63b3ed&fire=76e4bc&currStreakLabel=63b3ed&sideLabels=94a3b8&dates=4b6280&sideNums=f1f5f9&currStreakNum=f1f5f9`}
            alt="GitHub Streak Statistics for Sankalpa Sovan Samal"
            loading="lazy"
            width="700"
            height="165"
            className={styles.statImg}
          />
        </div>
      </div>

      <div className={`${styles.profileLink} reveal reveal-delay-3 ${isVisible ? "visible" : ""}`}>
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          View Full GitHub Profile
        </a>
      </div>
    </section>
  );
};

export default GitHubStats;
