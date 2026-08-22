import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import './Contact.css';

export default function Contact() {
  const { lang } = useLanguage();
  const t = strings[lang].contact;

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="section-label">{t.label}</div>
        <h2>{t.heading}</h2>
        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name" className="mono">
                {t.formName}
              </label>
              <input id="name" type="text" name="name" placeholder={t.formNamePlaceholder} />
            </div>
            <div className="form-row">
              <label htmlFor="email" className="mono">
                {t.formEmail}
              </label>
              <input id="email" type="email" name="email" placeholder={t.formEmailPlaceholder} />
            </div>
            <div className="form-row">
              <label htmlFor="subject" className="mono">
                {t.formSubject}
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder={t.formSubjectPlaceholder}
              />
            </div>
            <div className="form-row">
              <label htmlFor="message" className="mono">
                {t.formMessage}
              </label>
              <textarea id="message" name="message" placeholder={t.formMessagePlaceholder} />
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              {t.submit}
            </button>
          </form>

          <div className="contact-info">
            <div className="k mono">{t.directEmail}</div>
            <a className="v mono" href="mailto:lucasvnbusiness@gmail.com">
              lucasvnbusiness@gmail.com
            </a>
            <p>{t.emailNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
