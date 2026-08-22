import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import './Pagination.css';

export default function Pagination({ page, totalPages, onPrev, onNext }) {
  const { lang } = useLanguage();
  const t = strings[lang].pagination;

  if (totalPages <= 1) return null;

  return (
    <div className="pagination mono">
      <button
        type="button"
        className="page-btn"
        onClick={onPrev}
        disabled={page === 0}
        aria-label="Previous page"
      >
        {t.prev}
      </button>
      <span className="page-status">
        {String(page + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
      </span>
      <button
        type="button"
        className="page-btn"
        onClick={onNext}
        disabled={page === totalPages - 1}
        aria-label="Next page"
      >
        {t.next}
      </button>
    </div>
  );
}
