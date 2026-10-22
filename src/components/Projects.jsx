import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Info } from 'lucide-react';
import { GithubIcon } from './icons.jsx';
import './Projects.css';

const PROJECTS = [
  {
    id: 'resume-analyzer',
    number: '01',
    title: 'AI Resume Analyzer',
    subtitle: 'Intelligent Resume Evaluation System',
    description:
      'An AI-powered resume analysis application designed to evaluate resume content, identify key skills, and provide meaningful feedback. Built with a Python backend and a clean web-based interface.',
    longDescription: [
      'Resume upload and parsing interface',
      'AI-based content analysis and skill identification',
      'Automated feedback and improvement suggestions',
      'Responsive web-based user interface',
    ],
    technologies: ['Python', 'FastAPI', 'AI/ML', 'HTML', 'CSS', 'JavaScript'],
    image: '/project-resume-analyzer.jpg',
    githubLink: 'https://github.com/sanaysurendran-dev',
    liveLink: null,
    color: 'purple',
    featured: true,
  },
  {
    id: 'autocare-hub',
    number: '02',
    title: 'AutoCare Hub',
    subtitle: 'Vehicle Service Management System',
    description:
      'A comprehensive vehicle service management application designed to organize customer information, vehicle records, service bookings, track service progress, and manage billing operations efficiently.',
    longDescription: [
      'Customer and vehicle profile management',
      'Service booking and appointment scheduling',
      'Real-time service status tracking',
      'Billing and invoice management system',
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
    image: '/project-autocare-hub.jpg',
    githubLink: 'https://github.com/sanaysurendran-dev',
    liveLink: null,
    color: 'blue',
    featured: false,
  },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.article
      ref={ref}
      className={`project-card glass-card project-card--${project.color} ${project.featured ? 'project-card--featured' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      aria-label={`Project: ${project.title}`}
    >
      {/* Image */}
      <div className="project-card__image-wrap">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="project-card__image"
          loading="lazy"
        />
        <div className="project-card__image-overlay" />
        <span className="project-card__number">{project.number}</span>
      </div>

      {/* Content */}
      <div className="project-card__content">
        <div className="project-card__header">
          <div>
            <p className="project-card__subtitle">{project.subtitle}</p>
            <h3 className="project-card__title">{project.title}</h3>
          </div>
          {project.featured && (
            <span className="project-card__featured-badge">Featured</span>
          )}
        </div>

        <p className="project-card__description">{project.description}</p>

        {/* Features */}
        <ul className="project-card__features">
          {project.longDescription.map((feat) => (
            <li key={feat} className="project-card__feature">
              <span className={`project-card__feature-dot project-card__feature-dot--${project.color}`} />
              {feat}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="project-card__tech">
          {project.technologies.map((tech) => (
            <span key={tech} className={`tech-badge ${project.color === 'blue' ? 'blue' : ''}`}>
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="project-card__actions">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary project-card__btn"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary project-card__btn"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          ) : (
            <span
              className="btn btn-ghost project-card__btn project-card__btn--disabled"
              title="Live demo not available"
              aria-label="Live demo not available"
            >
              <Info size={14} />
              Demo N/A
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section projects" aria-label="Projects section">
      <div className="bg-orb bg-orb-purple" style={{ width: 450, height: 450, right: -120, bottom: 0, opacity: 0.12 }} />
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">03. Projects</p>
          <h2 className="section-title">
            What I've <span>Built</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects where I've applied my skills to solve
            real-world problems with intelligent software.
          </p>
        </motion.div>

        <div className="projects__grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          className="projects__note"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Info size={14} />
          GitHub links point to my profile. Live demos are not currently deployed.
        </motion.p>
      </div>
    </section>
  );
};

export default Projects;
