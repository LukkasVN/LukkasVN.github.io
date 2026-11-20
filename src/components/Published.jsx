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
  const coverImage = <img src={game.cover} alt={game.mystery ? '' : game.title} loading="lazy" />;

  return (
    <section id="published" className="section">
      <div className="wrap">
        <div className="section-label">{t.label}</div>
        <h2>{t.heading}</h2>
        <PagedArrows page={page} totalPages={totalPages} onPrev={onPrev} onNext={onNext}>
          <article
            key={game.id}
            className={`published-entry${game.mystery ? ' is-mystery' : ''}`}
          >
            {game.href ? (
              <a
                className="published-cover"
                href={game.href}
                target="_blank"
                rel="noreferrer"
                aria-label={game.title}
              >
                {coverImage}
              </a>
            ) : (
              <div className="published-cover">{coverImage}</div>
            )}
            <div className="published-body">
              <div className="published-meta mono">
                <span>
                  {game.platform} · {game.year[lang]}
                </span>
                <span className="published-price">{game.price[lang]}</span>
              </div>
              <h3>{game.title}</h3>
              <p>{game.description[lang]}</p>
              {game.href ? (
                <a
                  className="published-cta mono"
                  href={game.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.storeCta} ↗
                </a>
              ) : (
                <div className="published-links mono">
                  {game.links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        </PagedArrows>
      </div>
    </section>
  );
}
