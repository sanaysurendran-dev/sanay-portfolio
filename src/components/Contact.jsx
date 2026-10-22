import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send, MapPin, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons.jsx';
import './Contact.css';

const CONTACT_LINKS = [
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    value: 'sanaysurendran@gmail.com',
    href: 'mailto:sanaysurendran@gmail.com',
    color: 'purple',
    description: 'Best way to reach me for opportunities',
  },
  {
    id: 'github',
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/sanaysurendran-dev',
    href: 'https://github.com/sanaysurendran-dev',
    color: 'cyan',
    description: 'Explore my projects and source code',
  },
  {
    id: 'linkedin',
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sanay-n',
    href: 'https://www.linkedin.com/in/sanay-n-bb416b38a/',
    color: 'blue',
    description: 'Connect with me professionally',
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="section contact" aria-label="Contact section">
      <div className="bg-orb bg-orb-purple" style={{ width: 500, height: 500, right: -150, top: '10%', opacity: 0.15 }} />
      <div className="bg-orb bg-orb-cyan" style={{ width: 350, height: 350, left: -100, bottom: '10%', opacity: 0.1 }} />

      <div className="container">
        <motion.div
          ref={ref}
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label" style={{ justifyContent: 'center' }}>06. Contact</p>
          <h2 className="section-title">
            Let's Build Something <span>Meaningful.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 3rem' }}>
            I'm interested in AI/ML, software development, internships, and
            collaborative projects. Feel free to connect with me — I'd love to
            hear from you!
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Contact links */}
          <motion.div
            className="contact__links"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {CONTACT_LINKS.map((link, i) => (
              <motion.a
                key={link.id}
                href={link.href}
                target={link.id !== 'email' ? '_blank' : undefined}
                rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                className={`contact-link glass-card contact-link--${link.color}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                aria-label={`Contact via ${link.label}`}
              >
                <div className={`contact-link__icon contact-link__icon--${link.color}`}>
                  <link.icon size={22} />
                </div>
                <div className="contact-link__content">
                  <span className="contact-link__label">{link.label}</span>
                  <span className="contact-link__value">{link.value}</span>
                  <span className="contact-link__desc">{link.description}</span>
                </div>
                <div className="contact-link__arrow">→</div>
              </motion.a>
            ))}
          </motion.div>

          {/* Info card */}
          <motion.div
            className="contact__info glass-card"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="contact__info-icon">
              <MessageCircle size={28} />
            </div>
            <h3 className="contact__info-title">Open for Opportunities</h3>
            <p className="contact__info-text">
              I'm actively looking for internships and collaborative projects
              in the domains of AI/ML and software development. Whether it's
              a full-time internship, a freelance project, or an open-source
              collaboration — I'm interested.
            </p>

            <div className="divider" style={{ margin: '1.5rem 0' }} />

            <div className="contact__interests">
              <p className="contact__interests-label">Interested in</p>
              <div className="contact__interests-tags">
                {['AI/ML Internships', 'Research Projects', 'Open Source', 'Full-Stack Dev', 'Freelance Work'].map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>

            <div className="divider" style={{ margin: '1.5rem 0' }} />

            <div className="contact__location">
              <MapPin size={15} />
              <span>Mangaluru, Karnataka, India</span>
            </div>

            <div className="contact__availability">
              <span className="contact__availability-dot" />
              <span>Available for opportunities</span>
            </div>

            {/* Quick email button */}
            <a
              href="mailto:sanaysurendran@gmail.com"
              className="btn btn-primary contact__email-btn"
              id="contact-email-btn"
              aria-label="Send email to Sanay N"
            >
              <Send size={16} />
              Send Me an Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
