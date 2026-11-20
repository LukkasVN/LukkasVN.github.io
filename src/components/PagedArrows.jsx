import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import './PagedArrows.css';

function Chevron({ flip }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}>
      <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PagedArrows({ page, totalPages, onPrev, onNext, children }) {
  const { lang } = useLanguage();
  const t = strings[lang].pagination;

  if (totalPages <= 1) return children;

  return (
    <div className="paged">
      <button
        type="button"
        className="paged-arrow paged-prev"
        onClick={onPrev}
        aria-label={t.prev}
      >
        <Chevron />
      </button>
      <div className="paged-content">{children}</div>
      <span className="paged-status mono">
        {String(page + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
      </span>
      <button
        type="button"
        className="paged-arrow paged-next"
        onClick={onNext}
        aria-label={t.next}
      >
        <Chevron flip />
      </button>
    </div>
  );
}
