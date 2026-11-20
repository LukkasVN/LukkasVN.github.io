import { publishedGames } from '../data/publishedGames';
import { usePagination } from '../hooks/usePagination';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import PagedArrows from './PagedArrows';
import './Published.css';

export default function Published() {
  const { lang } = useLanguage();
  const t = strings[lang].published;
  const { page, totalPages, pageItems, onPrev, onNext } = usePagination(publishedGames, 1);
  const game = pageItems[0];

  return (
    <section id="published" className="section">
      <div className="wrap">
        <div className="section-label">{t.label}</div>
        <h2>{t.heading}</h2>
        <PagedArrows page={page} totalPages={totalPages} onPrev={onPrev} onNext={onNext}>
          <article key={game.id} className="published-entry">
            <a
              className="published-cover"
              href={game.href}
              target="_blank"
              rel="noreferrer"
              aria-label={game.title}
            >
              <img src={game.cover} alt={game.title} loading="lazy" />
            </a>
            <div className="published-body">
              <div className="published-meta mono">
                <span>{game.platform} · {game.year}</span>
                <span className="published-price">{game.price[lang]}</span>
              </div>
              <h3>{game.title}</h3>
              <p>{game.description[lang]}</p>
              <a
                className="published-cta mono"
                href={game.href}
                target="_blank"
                rel="noreferrer"
              >
                {t.storeCta} ↗
              </a>
            </div>
          </article>
        </PagedArrows>
      </div>
    </section>
  );
}
