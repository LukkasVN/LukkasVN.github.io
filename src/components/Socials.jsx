import { socials } from '../data/socials';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import './Socials.css';

export default function Socials() {
  const { lang } = useLanguage();
  const t = strings[lang].socials;

  return (
    <section id="socials" className="section">
      <div className="wrap">
        <div className="section-label">{t.label}</div>
        <h2>{t.heading}</h2>
        <div className="socials-grid">
          {socials.map((social) => (
            <a
              key={social.id}
              className="social-card"
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="social-name">{social.name}</div>
              <p className="social-desc">{t[social.descKey]}</p>
              <span className="social-handle mono">{social.handle}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
