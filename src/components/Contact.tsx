// src/components/Contact.tsx
import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "../styles/Contact.module.css";

type FormStatus = "idle" | "sending" | "sent" | "error";

// [REPLACE: Sign up at formspree.io, create a form, and paste the form ID here]
const FORMSPREE_ID = "mbdeodjy";

const Contact = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (FORMSPREE_ID === "mbdeodjy") {
      alert("Please set your Formspree form ID in src/components/Contact.tsx");
      return;
    }
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={ref} className={`${styles.contact} section`} aria-label="Contact">
      <span className="section-label">Contact</span>
      <h2 className={`section-title reveal ${isVisible ? "visible" : ""}`}>Let's Connect</h2>
      <p className={`section-desc reveal reveal-delay-1 ${isVisible ? "visible" : ""}`}>
        Open to research collaborations, software engineering internships, teaching assistant roles,
        and graduate trainee opportunities. I respond within 24 hours.
      </p>

      <div className={styles.grid}>
        {/* Form */}
        <div className={`reveal reveal-delay-1 ${isVisible ? "visible" : ""}`}>
          <form
            onSubmit={handleSubmit}
            className={`glass-card ${styles.form}`}
            aria-label="Contact form"
            noValidate
          >
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className={styles.input}
                placeholder="Your full name"
                required
                aria-required="true"
                minLength={2}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className={styles.input}
                placeholder="your.email@example.com"
                required
                aria-required="true"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject</label>
              <select id="subject" name="subject" className={styles.select} required>
                <option value="">Select a topic…</option>
                <option value="internship">Software Engineering Internship</option>
                <option value="research">Research Collaboration</option>
                <option value="teaching">Teaching Assistant Role</option>
                <option value="project">Project Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                placeholder="Tell me about the opportunity or what you'd like to discuss…"
                rows={5}
                required
                aria-required="true"
                minLength={20}
              />
            </div>

            <button
              type="submit"
              className={`${styles.submitBtn} ${status === "sending" ? styles.loading : ""}`}
              disabled={status === "sending" || status === "sent"}
              aria-label={status === "sending" ? "Sending message..." : "Send message"}
            >
              {status === "idle" && "Send Message →"}
              {status === "sending" && (
                <>
                  <span className={styles.spinner} aria-hidden="true" />
                  Sending…
                </>
              )}
              {status === "sent" && "✓ Message Sent!"}
              {status === "error" && "Error — Try Again"}
            </button>

            {status === "sent" && (
              <p className={styles.successMsg} role="status" aria-live="polite">
                Thank you! I'll get back to you within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className={styles.errorMsg} role="alert" aria-live="assertive">
                Something went wrong. Please email me directly at{" "}
                <a href="mailto:sankalpasovansamal@gmail.com">sankalpasovansamal@gmail.com</a>
              </p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className={`${styles.info} reveal reveal-delay-2 ${isVisible ? "visible" : ""}`}>
          <h3 className={styles.infoTitle}>Contact Details</h3>

          <div className={styles.infoItems}>
            <a href="mailto:sankalpasovansamal@gmail.com" className={styles.infoItem}>
              <div className={styles.infoIcon}>📧</div>
              <div>
                <p className={styles.infoLabel}>Email</p>
                <p className={styles.infoValue}>sankalpasovansamal@gmail.com</p>
              </div>
            </a>

            <a href="tel:+918926371917" className={styles.infoItem}>
              <div className={styles.infoIcon}>📱</div>
              <div>
                <p className={styles.infoLabel}>Phone</p>
                <p className={styles.infoValue}>+91-8926371917</p>
              </div>
            </a>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📍</div>
              <div>
                <p className={styles.infoLabel}>Location</p>
                <p className={styles.infoValue}>Odisha, India</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>⏰</div>
              <div>
                <p className={styles.infoLabel}>Response Time</p>
                <p className={styles.infoValue}>Within 24 hours</p>
              </div>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://github.com/sannskaarr"
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card ${styles.socialCard}`}
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sankalpasovansamal"
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card ${styles.socialCard}`}
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>

          <div className={styles.availability}>
            <span className={styles.availDot} />
            <p>Available for internships, research roles, and collaborations starting immediately.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
