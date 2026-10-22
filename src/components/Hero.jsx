import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons.jsx';
import './Hero.css';

const TECH_BADGES = [
  { label: 'Python', color: 'cyan' },
  { label: 'JavaScript', color: '' },
  { label: 'AI / ML', color: '' },
  { label: 'FastAPI', color: 'blue' },
  { label: 'Node.js', color: 'cyan' },
];

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" aria-label="Hero section">
      {/* Background gradient orbs */}
      <div className="bg-orb bg-orb-purple hero__orb hero__orb--1" />
      <div className="bg-orb bg-orb-cyan hero__orb hero__orb--2" />
      <div className="bg-orb bg-orb-blue hero__orb hero__orb--3" />

      <div className="container hero__container">
        {/* Left: Text content */}
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p
            className="hero__greeting"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="hero__greeting-line" />
            HELLO, I'M SANAY N
          </motion.p>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            Building{' '}
            <span className="gradient-text">Intelligent</span>
            <br />
            Solutions for the
            <br />
            Real World.
          </motion.h1>

          <motion.p
            className="hero__role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            AI/ML Engineer
            <span className="hero__role-divider">|</span>
            Full-Stack Developer
          </motion.p>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            I'm a Computer Science and Engineering student specializing in
            Artificial Intelligence and Machine Learning, passionate about
            building intelligent applications and practical software solutions.
          </motion.p>

          {/* Tech badges */}
          <motion.div
            className="hero__badges"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {TECH_BADGES.map((badge) => (
              <span key={badge.label} className={`tech-badge ${badge.color}`}>
                {badge.label}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6 }}
          >
            <button
              className="btn btn-primary"
              onClick={() => scrollTo('projects')}
              id="hero-explore-btn"
              aria-label="Explore projects section"
            >
              Explore My Projects
            </button>
            <a
              href="/Sanay_N_Resume.pdf"
              download
              className="btn btn-secondary"
              id="hero-download-btn"
              aria-label="Download Sanay N's resume"
            >
              Download Resume
            </a>
            <button
              className="btn btn-ghost"
              onClick={() => scrollTo('contact')}
              id="hero-contact-btn"
              aria-label="Go to contact section"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <a
              href="https://github.com/sanaysurendran-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/sanay-n-bb416b38a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:sanaysurendran@gmail.com"
              className="hero__social-link"
              aria-label="Send email"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Visual */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        >
          {/* Avatar circle */}
          <div className="hero__avatar-wrapper animate-float">
            <div className="hero__avatar-ring hero__avatar-ring--outer animate-spin-slow" />
            <div className="hero__avatar-ring hero__avatar-ring--inner" />
            <div className="hero__avatar">
              <span className="hero__avatar-initials">SN</span>
            </div>

            {/* Floating stats */}
            <motion.div
              className="hero__stat-card hero__stat-card--top"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <span className="hero__stat-number">2</span>
              <span className="hero__stat-label">Projects</span>
            </motion.div>

            <motion.div
              className="hero__stat-card hero__stat-card--bottom"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <span className="hero__stat-number gradient-text">AI/ML</span>
              <span className="hero__stat-label">Focused</span>
            </motion.div>
          </div>

          {/* AI Network image */}
          <div className="hero__ai-image">
            <img
              src="/hero-ai.jpg"
              alt="AI neural network visualization"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="hero__scroll-indicator"
        onClick={() => scrollTo('about')}
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <ChevronDown size={22} />
      </motion.button>
    </section>
  );
};

export default Hero;
