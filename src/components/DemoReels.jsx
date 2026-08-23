import { useState } from 'react';
import { demoReels } from '../data/demoreels';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import './DemoReels.css';

export default function DemoReels() {
  const { lang } = useLanguage();
  const t = strings[lang].demoreels;

  return (
    <section id="demoreels" className="section">
      <div className="wrap">
        <div className="section-label">{t.label}</div>
        <h2>{t.heading}</h2>
        <div className="reels-grid">
          {demoReels.map((reel) => (
            <ReelCard key={reel.id} reel={reel} playLabel={t.play} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReelCard({ reel, playLabel }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="reel-card">
      <div className="reel-frame">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${reel.youtubeId}?autoplay=1`}
            title={`${reel.year} Demo Reel`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="reel-thumb"
            onClick={() => setPlaying(true)}
            aria-label={playLabel}
          >
            <img
              src={`https://img.youtube.com/vi/${reel.youtubeId}/hqdefault.jpg`}
              alt=""
              loading="lazy"
            />
            <span className="reel-play-btn">
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path fill="currentColor" d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <div className="reel-meta mono">
        <span className="reel-year">{reel.year}</span>
      </div>
    </div>
  );
}