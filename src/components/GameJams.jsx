import { gameJams } from '../data/gamejams';
import { usePagination } from '../hooks/usePagination';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { isVideoSrc } from '../utils/media';
import Pagination from './Pagination';
import './GameJams.css';

export default function GameJams() {
  const { lang } = useLanguage();
  const t = strings[lang].gamejams;
  const { page, totalPages, pageItems, onPrev, onNext } = usePagination(gameJams[lang], 3);

  return (
    <section id="gamejams" className="section">
      <div className="wrap">
        <div className="section-label">{t.label}</div>
        <h2>{t.heading}</h2>
        <div className="jams-grid">
          {pageItems.map((jam) => (
            <JamCard key={jam.id} jam={jam} t={t} />
          ))}
        </div>
        <Pagination page={page} totalPages={totalPages} onPrev={onPrev} onNext={onNext} />
      </div>
    </section>
  );
}

function JamCard({ jam, t }) {
  return (
    <div className="jam-card">
      <div className="jam-thumb">
        {jam.media ? (
          isVideoSrc(jam.media) ? (
            <video src={jam.media} autoPlay loop muted playsInline />
          ) : (
            <img src={jam.media} alt={jam.title} />
          )
        ) : (
          <>
            <span className="media-tag mono">{jam.mediaTag}</span>
            <span className="mono">{t.mediaFallback}</span>
          </>
        )}
      </div>
      <div className="jam-body">
        <div className="jam-meta mono">
          <span>{jam.jam}</span>
          <span>{jam.date}</span>
        </div>
        <h3>{jam.title}</h3>
        <p className="jam-theme mono">
          {t.theme}: {jam.theme}
          {jam.duration && ` · ${t.durationLabel}: ${jam.duration}`}
        </p>
        <p>{jam.description}</p>
        {jam.credits && jam.credits.length > 0 && (
          <div className="jam-credits">
            <div className="jam-credits-label mono">{t.creditsLabel}</div>
            <ul>
              {jam.credits.map((person) => (
                <li key={person.name}>
                  <span className="credit-name">{person.name}</span>
                  <span className="credit-roles mono">{person.roles.join(', ')}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="jam-links mono">
          {jam.links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}