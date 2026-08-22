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
            <div key={reel.id} className="reel-card">
              <div className="reel-frame">
                <iframe
                  src={`https://www.youtube.com/embed/${reel.youtubeId}`}
                  title={`${reel.year} Demo Reel`}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="reel-meta mono">
                <span className="reel-year">{reel.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
