import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Skills.css';

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'JavaScript', level: 85, icon: '🟨' },
    { name: 'TypeScript', level: 80, icon: '🔷' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'Docker', level: 80, icon: '🐳' },
    { name: 'Git', level: 90, icon: '📦' },
    { name: 'SQL', level: 75, icon: '🗄️' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="competences" className="skills" ref={ref}>
      <div className="skills-container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Mes <span className="gradient-text">Compétences</span></h2>
          <p className="section-subtitle">Technologies et outils que je maîtrise</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar-container">
                <motion.div
                  className="skill-bar"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  <span className="skill-level">{skill.level}%</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-additional"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>Autres compétences</h3>
          <div className="tags">
            <span className="tag">DevSecOps</span>
            <span className="tag">CI/CD</span>
            <span className="tag">Kubernetes</span>
            <span className="tag">AWS</span>
            <span className="tag">MongoDB</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">REST API</span>
            <span className="tag">Agile/Scrum</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
