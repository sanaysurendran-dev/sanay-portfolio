import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import './Certifications.css';

const CERTIFICATIONS = [
  {
    id: 'python-fundamentals',
    title: 'Python Fundamentals',
    issuer: 'Professional Certification',
    description:
      'Certification validating proficiency in Python programming fundamentals, covering core concepts such as data types, control flow, functions, object-oriented programming, and standard libraries.',
    skills: ['Python', 'OOP', 'Data Types', 'Functions', 'Standard Libraries'],
    color: 'purple',
    icon: '🐍',
    verifyLink: null,
  },
];

const CertCard = ({ cert, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.article
      ref={ref}
      className={`cert-card glass-card cert-card--${cert.color}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1 }}
      aria-label={`Certification: ${cert.title}`}
    >
      <div className="cert-card__header">
        <div className={`cert-card__icon-wrap cert-card__icon-wrap--${cert.color}`}>
          <span className="cert-card__emoji">{cert.icon}</span>
        </div>
        <div className="cert-card__header-text">
          <p className="cert-card__issuer">{cert.issuer}</p>
          <h3 className="cert-card__title">{cert.title}</h3>
        </div>
        <div className="cert-card__badge">
          <CheckCircle size={16} />
          Certified
        </div>
      </div>

      <div className="divider" style={{ margin: '1.25rem 0' }} />

      <p className="cert-card__description">{cert.description}</p>

      <div className="cert-card__skills">
        <p className="cert-card__skills-label">Skills Covered</p>
        <div className="cert-card__skills-list">
          {cert.skills.map((skill) => (
            <span key={skill} className={`tech-badge ${cert.color === 'cyan' ? 'cyan' : ''}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {cert.verifyLink ? (
        <a
          href={cert.verifyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost cert-card__verify"
        >
          <ExternalLink size={14} />
          Verify Certificate
        </a>
      ) : (
        <p className="cert-card__no-link">
          <Award size={14} />
          Verification link not available
        </p>
      )}
    </motion.article>
  );
};

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="section certifications" aria-label="Certifications section">
      <div className="bg-orb bg-orb-purple" style={{ width: 350, height: 350, left: -80, bottom: 0, opacity: 0.1 }} />
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">05. Certifications</p>
          <h2 className="section-title">
            Verified <span>Credentials</span>
          </h2>
          <p className="section-subtitle">
            Professional certifications that complement my academic education and
            technical skills.
          </p>
        </motion.div>

        <div className="certifications__grid">
          {CERTIFICATIONS.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}

          {/* Coming soon card */}
          <motion.div
            className="cert-card cert-card--coming glass-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="cert-coming__inner">
              <div className="cert-coming__icon">🎯</div>
              <h3 className="cert-coming__title">More Coming Soon</h3>
              <p className="cert-coming__desc">
                Currently working on additional certifications in Machine
                Learning, Cloud Computing, and Web Development to further
                strengthen my profile.
              </p>
              <div className="cert-coming__tags">
                <span className="tech-badge cyan">Machine Learning</span>
                <span className="tech-badge blue">Cloud</span>
                <span className="tech-badge">Web Dev</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
