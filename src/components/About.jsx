import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Code2, BrainCircuit, Lightbulb, Target } from 'lucide-react';
import './About.css';

const useScrollReveal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return [ref, isInView];
};

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: 'B.E. in AI & ML',
    desc: 'AJ Institute of Engineering & Technology, Mangaluru (2023–2027)',
    color: 'purple',
  },
  {
    icon: BrainCircuit,
    title: 'AI/ML Enthusiast',
    desc: 'Passionate about intelligent systems, NLP, and machine learning applications',
    color: 'cyan',
  },
  {
    icon: Code2,
    title: 'Full-Stack Builder',
    desc: 'Experienced in Python, JavaScript, FastAPI, Node.js, and web technologies',
    color: 'blue',
  },
  {
    icon: Target,
    title: 'Problem Solver',
    desc: 'Strong foundation in DSA, OOP, and system design principles',
    color: 'purple',
  },
];

const About = () => {
  const [ref, isInView] = useScrollReveal();

  return (
    <section id="about" className="section about" aria-label="About section">
      <div className="bg-orb bg-orb-purple" style={{ width: 400, height: 400, right: -100, top: 0, opacity: 0.15 }} />
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">01. About Me</p>
          <h2 className="section-title">
            Driven by Curiosity,<br />
            <span>Powered by Code.</span>
          </h2>
        </motion.div>

        <div className="about__grid">
          {/* Text */}
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p>
              I'm <strong>Sanay N</strong>, a B.E. student in Artificial Intelligence and Machine Learning
              at AJ Institute of Engineering and Technology, Mangaluru (Batch 2023–2027), with a CGPA of <strong>7.2</strong>.
            </p>
            <p>
              My passion lies at the intersection of artificial intelligence and practical software
              development. I enjoy designing and building systems that solve real-world problems — from
              AI-powered tools that analyze and process information intelligently, to full-stack web
              applications that deliver smooth user experiences.
            </p>
            <p>
              I work primarily with <strong>Python</strong> and <strong>JavaScript</strong>, utilizing
              frameworks like <strong>FastAPI</strong>, <strong>Node.js</strong>, and <strong>Express.js</strong>.
              On the AI side, I focus on machine learning fundamentals, natural language processing,
              and building intelligent pipeline systems.
            </p>
            <p>
              I'm currently open to <strong>internship opportunities</strong>, collaborative projects, and
              research roles where I can contribute meaningfully while continuing to grow as an engineer.
            </p>

            {/* Quick info */}
            <div className="about__info-grid">
              <div className="about__info-item">
                <span className="about__info-label">Location</span>
                <span className="about__info-value">Mangaluru, India</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">CGPA</span>
                <span className="about__info-value">7.2 / 10</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Degree</span>
                <span className="about__info-value">B.E. AI & ML</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Status</span>
                <span className="about__info-value about__info-value--available">Open to Opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="about__highlights"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            {HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.title}
                className={`about__card glass-card about__card--${item.color}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.45 + i * 0.1 }}
              >
                <div className={`about__card-icon about__card-icon--${item.color}`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="about__card-title">{item.title}</h3>
                  <p className="about__card-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
