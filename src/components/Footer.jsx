import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { openCookieSettings } from '../utils/visitorChoice';
import './Footer.css';

export default function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p className="footer-copy">
          <span className="mono">©</span> Copyright{' '}
          <span className="footer-name">Lucas Varela Negro</span>{' '}
          <span className="mono">{year}</span>
        </p>
        <button type="button" className="footer-prefs mono" onClick={openCookieSettings}>
          {strings[lang].cookies.settings}
        </button>
      </div>
    </footer>
  );
}