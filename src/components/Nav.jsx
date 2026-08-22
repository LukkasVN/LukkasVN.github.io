import { useEffect, useRef, useState } from 'react';
import headshot from '../assets/lucas-headshot.jpg';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import './Nav.css';

const REVEAL_ZONE = 90;
const HIDE_DELAY = 1000;
const SCROLL_THRESHOLD = 40;

export default function Nav() {
  const { lang, toggleLang } = useLanguage();
  const t = strings[lang];
  const [scrolled, setScrolled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [autoHideEnabled, setAutoHideEnabled] = useState(false);
  const hideTimeoutRef = useRef(null);

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)');
    setAutoHideEnabled(query.matches);
    function handleChange(event) {
      setAutoHideEnabled(event.matches);
    }
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!autoHideEnabled) return undefined;

    function handleMouseMove(event) {
      if (event.clientY <= REVEAL_ZONE) {
        setHovering(true);
        if (hideTimeoutRef.current) {
          clearTimeout(hideTimeoutRef.current);
          hideTimeoutRef.current = null;
        }
      } else if (!hideTimeoutRef.current) {
        hideTimeoutRef.current = setTimeout(() => {
          setHovering(false);
          hideTimeoutRef.current = null;
        }, HIDE_DELAY);
      }
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [autoHideEnabled]);

  const visible = !autoHideEnabled || !scrolled || hovering;

  const navLinks = [
    { href: '#bio', label: t.nav.bio },
    { href: '#demoreels', label: t.nav.demoreels },
    { href: '#projects', label: t.nav.projects },
    { href: '#gamejams', label: t.nav.gamejams },
    { href: '#devlog', label: t.nav.devlog },
    { href: '#socials', label: t.nav.socials },
    { href: '#services', label: t.nav.services },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <nav className={`nav${visible ? '' : ' nav-hidden'}`}>
      <div className="wrap nav-inner">
        <a className="avatar" href="#bio" aria-label="Back to top">
          <img src={headshot} alt="" />
        </a>
        <div className="navlinks mono">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="lang-toggle mono"
          onClick={toggleLang}
          aria-label="Switch language"
        >
          <span className={lang === 'en' ? 'active' : ''}>EN</span>
          <span className="lang-sep">/</span>
          <span className={lang === 'es' ? 'active' : ''}>ES</span>
        </button>
      </div>
    </nav>
  );
}