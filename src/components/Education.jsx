import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';
import './Education.css';

const COURSEWORK = [
  'Data Structures & Algorithms',
  'Database Management Systems',
  'Operating Systems',
  'Artificial Intelligence',
  'Machine Learning',
  'Object-Oriented Programming',
  'Computer Networks',
  'Software Engineering',
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="section education" aria-label="Education section">
      <div className="bg-orb bg-orb-cyan" style={{ width: 300, height: 300, left: '10%', top: '30%', opacity: 0.1 }} />
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">04. Education</p>
          <h2 className="section-title">
            Academic <span>Background</span>
          </h2>
          <p className="section-subtitle">
            Building a strong technical foundation in AI and Machine Learning.
          </p>
        </motion.div>

        <div className="education__content">
          {/* Timeline line */}
          <div className="education__timeline-line" />

          {/* Main Education Card */}
          <motion.div
            className="education__card glass-card"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Timeline dot */}
            <div className="education__timeline-dot">
              <GraduationCap size={16} />
            </div>

            <div className="education__card-inner">
              {/* Header */}
              <div className="education__header">
                <div className="education__icon-wrap">
                  <GraduationCap size={24} />
                </div>
                <div className="education__header-text">
                  <span className="education__degree-tag">Bachelor of Engineering</span>
                  <h3 className="education__degree">
                    Artificial Intelligence & Machine Learning
                  </h3>
                  <p className="education__institute">
                    AJ Institute of Engineering and Technology
                  </p>
                </div>
              </div>

              {/* Meta info */}
              <div className="education__meta">
                <div className="education__meta-item">
                  <MapPin size={14} />
                  <span>Mangaluru, Karnataka</span>
                </div>
                <div className="education__meta-item">
                  <Calendar size={14} />
                  <span>September 2023 – August 2027</span>
                </div>
                <div className="education__meta-item education__meta-item--highlight">
                  <Award size={14} />
                  <span>CGPA: <strong>7.2 / 10</strong></span>
                </div>
              </div>

              <div className="divider" style={{ margin: '1.25rem 0' }} />

              {/* Coursework */}
              <div className="education__coursework">
                <div className="education__coursework-header">
                  <BookOpen size={16} />
                  <span>Relevant Coursework</span>
                </div>
                <div className="education__coursework-tags">
                  {COURSEWORK.map((course, i) => (
                    <motion.span
                      key={course}
                      className="tech-badge"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Status card */}
          <motion.div
            className="education__status glass-card"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="education__status-header">
              <span className="education__status-dot" />
              <span className="education__status-label">Currently Enrolled</span>
            </div>
            <p className="education__status-desc">
              4th year B.E. student actively building projects, learning new
              technologies, and seeking internship opportunities in AI/ML and
              software development.
            </p>
            <div className="education__progress">
              <div className="education__progress-header">
                <span>Program Progress</span>
                <span>~75%</span>
              </div>
              <div className="education__progress-bar">
                <motion.div
                  className="education__progress-fill"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '75%' } : {}}
                  transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
                />
              </div>
              <div className="education__progress-years">
                <span>Year 1</span>
                <span>Year 2</span>
                <span>Year 3</span>
                <span>Year 4 ✓</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
