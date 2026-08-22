import { services } from '../data/services';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import './Services.css';

export default function Services() {
  const { lang } = useLanguage();
  const t = strings[lang].services;

  return (
    <section id="services" className="section">
      <div className="wrap">
        <div className="section-label">{t.label}</div>
        <h2>{t.heading}</h2>
        <div className="services-grid">
          {services[lang].map((service, i) => (
            <div key={service.title} className="service-card">
              <span className="service-code mono">{String(i + 1).padStart(2, '0')}</span>
              <h3>{service.title}</h3>
              <p>{service.blurb}</p>
              <div className="service-tags mono">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className="service-cta mono" href="#contact">
                {t.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
