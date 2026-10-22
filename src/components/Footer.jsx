import { Mail, Cpu, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons.jsx';
import './Footer.css';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const NAV_LINKS = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__glow" />
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-icon">
              <Cpu size={16} />
            </div>
            <span className="footer__logo-text">
              <span className="gradient-text">Sanay</span> N
            </span>
          </div>
          <p className="footer__tagline">
            Building intelligent solutions, one line of code at a time.
          </p>
          <div className="footer__socials">
            <a
              href="https://github.com/sanaysurendran-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="GitHub"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/sanay-n-bb416b38a/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href="mailto:sanaysurendran@gmail.com"
              className="footer__social"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>

        {/* Nav */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <p className="footer__nav-title">Navigation</p>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className="footer__nav-link"
              onClick={() => scrollTo(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
        </nav>

        {/* Contact quick */}
        <div className="footer__contact">
          <p className="footer__nav-title">Connect</p>
          <a href="mailto:sanaysurendran@gmail.com" className="footer__contact-link">
            <Mail size={14} />
            sanaysurendran@gmail.com
          </a>
          <a
            href="https://github.com/sanaysurendran-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__contact-link"
          >
            <GithubIcon size={14} />
            github.com/sanaysurendran-dev
          </a>
          <a
            href="https://www.linkedin.com/in/sanay-n-bb416b38a/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__contact-link"
          >
            <LinkedinIcon size={14} />
            linkedin.com/in/sanay-n
          </a>
          <a
            href="/Sanay_N_Resume.pdf"
            download
            className="btn btn-primary footer__resume-btn"
            aria-label="Download resume"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © {year} Sanay N. All rights reserved.
          </p>
          <p className="footer__made">
            Made with <Heart size={12} style={{ color: '#f43f5e', display: 'inline' }} /> using React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
