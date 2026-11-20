import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { getConsent, onOpenCookieSettings, setConsent, useConsent } from '../utils/visitorChoice';
import './ChoiceNotice.css';

export default function ChoiceNotice() {
  const { lang } = useLanguage();
  const t = strings[lang].cookies;
  const consent = useConsent();
  const [open, setOpen] = useState(() => getConsent() === null);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(consent?.analytics ?? false);

  useEffect(
    () =>
      onOpenCookieSettings(() => {
        const current = getConsent();
        setAnalytics(current?.analytics ?? false);
        setCustomizing(true);
        setOpen(true);
      }),
    []
  );

  if (!open) return null;

  function save(choice) {
    setConsent(choice);
    setOpen(false);
    setCustomizing(false);
  }

  return (
    <div className="choice-notice" role="dialog" aria-live="polite" aria-labelledby="choice-notice-title">
      <div id="choice-notice-title" className="choice-title mono">{t.title}</div>
      <p className="choice-text">{t.text}</p>

      {customizing && (
        <div className="choice-options">
          <label className="choice-option">
            <input type="checkbox" checked disabled />
            <span>
              <strong>{t.necessary}</strong>
              <small>{t.necessaryDesc}</small>
            </span>
          </label>
          <label className="choice-option">
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
            />
            <span>
              <strong>{t.analytics}</strong>
              <small>{t.analyticsDesc}</small>
            </span>
          </label>
        </div>
      )}

      <div className="choice-actions">
        <button type="button" className="btn" onClick={() => save({ analytics: false })}>
          {t.reject}
        </button>
        <button type="button" className="btn" onClick={() => save({ analytics: true })}>
          {t.accept}
        </button>
        {customizing ? (
          <button type="button" className="choice-link mono" onClick={() => save({ analytics })}>
            {t.save}
          </button>
        ) : (
          <button type="button" className="choice-link mono" onClick={() => setCustomizing(true)}>
            {t.customize}
          </button>
        )}
      </div>
    </div>
  );
}
