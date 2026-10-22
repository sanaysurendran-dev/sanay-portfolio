import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2, Brain, Globe, Database, Wrench, BookOpen
} from 'lucide-react';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    id: 'programming',
    label: 'Programming Languages',
    icon: Code2,
    color: 'purple',
    skills: ['Python', 'Java', 'JavaScript', 'C'],
  },
  {
    id: 'ai-ml',
    label: 'AI & Machine Learning',
    icon: Brain,
    color: 'cyan',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Natural Language Processing'],
  },
  {
    id: 'web',
    label: 'Web Development',
    icon: Globe,
    color: 'blue',
    skills: ['HTML', 'CSS', 'Node.js', 'Express.js', 'FastAPI'],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: Database,
    color: 'purple',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    id: 'tools',
    label: 'Tools & Environment',
    icon: Wrench,
    color: 'cyan',
    skills: ['Git', 'GitHub', 'Visual Studio Code'],
  },
  {
    id: 'concepts',
    label: 'Core Concepts',
    icon: BookOpen,
    color: 'blue',
    skills: ['Data Structures & Algorithms', 'DBMS', 'Object-Oriented Programming', 'Problem Solving'],
  },
];

const SKILL_ICONS = {
  Python: '🐍',
  Java: '☕',
  JavaScript: '🟨',
  C: '⚙️',
  'Artificial Intelligence': '🤖',
  'Machine Learning': '📊',
  'Natural Language Processing': '💬',
  HTML: '🌐',
  CSS: '🎨',
  'Node.js': '🟢',
  'Express.js': '🚂',
  FastAPI: '⚡',
  MongoDB: '🍃',
  MySQL: '🐬',
  Git: '🔀',
  GitHub: '🐱',
  'Visual Studio Code': '💙',
  'Data Structures & Algorithms': '🌲',
  DBMS: '🗃️',
  'Object-Oriented Programming': '📦',
  'Problem Solving': '🧠',
};

const SkillItem = ({ skill, color, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`skill-item skill-item--${color}`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      <span className="skill-item__icon">{SKILL_ICONS[skill] || '•'}</span>
      <span className="skill-item__label">{skill}</span>
    </motion.div>
  );
};

const CategoryCard = ({ category, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={`skill-category glass-card skill-category--${category.color}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <div className="skill-category__header">
        <div className={`skill-category__icon-wrap skill-category__icon-wrap--${category.color}`}>
          <category.icon size={18} />
        </div>
        <h3 className="skill-category__title">{category.label}</h3>
      </div>
      <div className="skill-category__items">
        {category.skills.map((skill, i) => (
          <SkillItem key={skill} skill={skill} color={category.color} index={i} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section skills" aria-label="Technical skills section">
      <div className="bg-orb bg-orb-blue" style={{ width: 350, height: 350, left: -80, top: '20%', opacity: 0.12 }} />
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">02. Technical Skills</p>
          <h2 className="section-title">
            My <span>Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            A curated set of technologies and tools I work with to build
            intelligent, performant applications.
          </p>
        </motion.div>

        <div className="skills__grid">
          {SKILL_CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
