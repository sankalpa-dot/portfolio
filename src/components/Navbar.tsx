// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { NAV_ITEMS } from "../data/portfolio";
import { useActiveSection } from "../hooks/useScrollReveal";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      role="banner"
    >
      <nav className={styles.nav} aria-label="Main navigation">
        <a
          href="#home"
          className={styles.logo}
          aria-label="Sankalpa Sovan Samal - Home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
        >
          <span className={styles.logoMark}>SS</span>
          <span className={styles.logoName}>Sankalpa</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`} role="list">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`${styles.link} ${activeSection === href.slice(1) ? styles.active : ""}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                aria-current={activeSection === href.slice(1) ? "page" : undefined}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/portfolio-react-ts/Resume_Sankalpa_Sovan_Samal.pdf"
              download
              className={styles.resumeBtn}
              onClick={() => setMenuOpen(false)}
            >
              Resume ↓
            </a>
          </li>
        </ul>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Navbar;
