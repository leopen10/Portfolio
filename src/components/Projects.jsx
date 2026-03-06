import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Projects.css';

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Application E-commerce',
      description: 'Plateforme de vente en ligne complète avec panier, paiement sécurisé et gestion des commandes.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Tableau de bord interactif pour visualiser des données en temps réel avec graphiques et statistiques.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Application Mobile Fitness',
      description: 'App de suivi d\'entraînement avec programmes personnalisés et statistiques de progression.',
      image: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Firebase', 'Redux'],
      github: '#',
      demo: '#'
    },
    {
      title: 'API REST',
      description: 'API robuste avec authentification JWT, documentation Swagger et tests automatisés.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Node.js', 'Express', 'JWT', 'Docker'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Plateforme de Blog',
      description: 'CMS moderne avec éditeur de texte riche, gestion des médias et système de commentaires.',
      image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'Tailwind', 'Prisma', 'MySQL'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Outil DevOps',
      description: 'Pipeline CI/CD automatisé avec monitoring et déploiement sur Kubernetes.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'AWS'],
      github: '#',
      demo: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Mes <span className="gradient-text">Projets</span></h2>
          <p className="section-subtitle">Découvrez mes réalisations récentes</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>GitHub</span>
                    </a>
                    <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
