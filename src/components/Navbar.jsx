import { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = ({ scrolled, activeSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setMobileOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
        <div className="navbar__inner">
          {/* Logo */}
          <button
            className="navbar__logo"
            onClick={() => scrollTo('home')}
            aria-label="Go to top"
          >
            <div className="navbar__logo-icon">
              <Cpu size={18} />
            </div>
            <span className="navbar__logo-text">
              <span className="gradient-text">Sanay</span> N
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="navbar__links" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
                onClick={() => scrollTo(link.id)}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
                {activeSection === link.id && <span className="navbar__link-dot" />}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="/Sanay_N_Resume.pdf"
            download
            className="btn btn-primary navbar__cta"
            aria-label="Download Resume PDF"
          >
            Resume ↓
          </a>

          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      <div
        className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        <nav>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className={`mobile-menu__link ${activeSection === link.id ? 'mobile-menu__link--active' : ''}`}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
          <a
            href="/Sanay_N_Resume.pdf"
            download
            className="btn btn-primary mobile-menu__cta"
            onClick={() => setMobileOpen(false)}
          >
            Download Resume
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
