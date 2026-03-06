import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'competences', 'experiences', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <motion.div
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
        >
          Portfolio
        </motion.div>

        <ul className="navbar-menu">
          <li>
            <button
              onClick={() => scrollToSection('home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Accueil
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('competences')}
              className={activeSection === 'competences' ? 'active' : ''}
            >
              Compétences
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('experiences')}
              className={activeSection === 'experiences' ? 'active' : ''}
            >
              Expériences
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('projects')}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projets
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </button>
          </li>
        </ul>

        <motion.a
          href="/cv.pdf"
          className="cv-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          download
        >
          Télécharger CV
        </motion.a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
