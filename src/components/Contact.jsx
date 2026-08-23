import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import './Contact.css';

const GMAIL_COMPOSE_BASE = 'https://mail.google.com/mail/?view=cm&fs=1&to=lucasvnbusiness@gmail.com';

export default function Contact() {
  const { lang } = useLanguage();
  const t = strings[lang].contact;

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name')?.trim() || '';
    const email = formData.get('email')?.trim() || '';
    const subject = formData.get('subject')?.trim() || '';
    const message = formData.get('message')?.trim() || '';

    const mailSubject = subject || `Message from ${name || 'your site'}`;
    const bodyLines = [message, '', '---', `Name: ${name}`, `Email: ${email}`];
    const mailBody = bodyLines.join('\n');

    const composeUrl = `${GMAIL_COMPOSE_BASE}&su=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;

    window.open(composeUrl, '_blank', 'noopener,noreferrer');
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
              <input
                id="name"
                type="text"
                name="name"
                placeholder={t.formNamePlaceholder}
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="email" className="mono">
                {t.formEmail}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder={t.formEmailPlaceholder}
                required
              />
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
              <textarea
                id="message"
                name="message"
                placeholder={t.formMessagePlaceholder}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              {t.submit}
            </button>
          </form>

          <div className="contact-info">
            <div className="k mono">{t.directEmail}</div>
            <a className="v mono" href={GMAIL_COMPOSE_BASE} target="_blank" rel="noreferrer">
              lucasvnbusiness@gmail.com
            </a>
            <p>{t.emailNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}