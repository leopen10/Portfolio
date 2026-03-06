import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Experience.css';

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: 'Stage Développeur Full Stack',
      company: 'Entreprise Tech',
      period: 'Juin 2024 - Août 2024',
      description: 'Développement d\'une application web avec React et Node.js. Mise en place de tests unitaires et intégration continue.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker']
    },
    {
      title: 'Projet Étudiant',
      company: 'CESI',
      period: 'Janvier 2024 - Mai 2024',
      description: 'Conception et développement d\'une plateforme collaborative pour étudiants. Gestion d\'une équipe de 5 développeurs.',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Git']
    },
    {
      title: 'Freelance Web',
      company: 'Auto-entrepreneur',
      period: '2023 - Présent',
      description: 'Création de sites web pour PME et associations. Conseils en transformation digitale et optimisation SEO.',
      technologies: ['WordPress', 'JavaScript', 'CSS', 'SEO']
    }
  ];

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experiences" className="experience" ref={ref}>
      <div className="experience-container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Mes <span className="gradient-text">Expériences</span></h2>
          <p className="section-subtitle">Mon parcours professionnel et académique</p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
            >
              <div className="timeline-dot"></div>
              <motion.div
                className="timeline-content"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="timeline-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-technologies">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
