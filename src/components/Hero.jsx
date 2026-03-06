import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-image-container"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-image">
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Profile" />
          </div>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Bienvenue sur le portfolio de <span className="gradient-text">Votre Nom</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span className="highlight">Développeur</span> passionné par la création d'expériences numériques exceptionnelles
        </motion.p>

        <motion.p
          className="hero-description"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Étudiant en informatique à <span className="highlight">CESI</span>, je recherche une alternance
          pour mettre en pratique mes compétences en développement web et DevOps.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <button
            className="hero-button primary"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            Voir mes projets
          </button>
          <button
            className="hero-button secondary"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Me contacter
          </button>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  );
}

export default Hero;
