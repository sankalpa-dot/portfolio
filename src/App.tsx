// src/App.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import GitHubStats from "./components/GitHubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Research />
        <Skills />
        <Certifications />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
