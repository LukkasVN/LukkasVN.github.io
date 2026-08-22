import { useEffect, useState } from 'react';
import { demoReels } from '../data/demoreels';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import './Hero.css';

export default function Hero() {
  const { lang } = useLanguage();
  const t = strings[lang].hero;

  return (
    <header className="hero">
      <HeroVideoBackground />
      <div className="wrap hero-inner">
        <div className="eyebrow mono">{t.eyebrow}</div>
        <h1>Lucas Varela Negro</h1>
        <p className="tagline">{t.tagline}</p>
        <div className="roles-line mono">
          {t.roles.map((role, i) => (
            <span key={role}>
              {i > 0 && <span className="dot">·</span>}
              {role}
            </span>
          ))}
        </div>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#contact">
            {t.ctaPrimary}
          </a>
          <a className="btn btn-ghost" href="#projects">
            {t.ctaGhost}
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroVideoBackground() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % demoReels.length);
    }, 14000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-video-bg" aria-hidden="true">
      {demoReels.map((reel, i) => (
        <iframe
          key={`backdrop-${reel.id}`}
          className={`hero-video-backdrop${i === active ? ' active' : ''}`}
          src={`https://www.youtube.com/embed/${reel.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${reel.youtubeId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1`}
          title=""
          tabIndex="-1"
          allow="autoplay; encrypted-media"
        />
      ))}
      {demoReels.map((reel, i) => (
        <iframe
          key={reel.id}
          className={`hero-video-frame${i === active ? ' active' : ''}`}
          src={`https://www.youtube.com/embed/${reel.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${reel.youtubeId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1`}
          title=""
          tabIndex="-1"
          allow="autoplay; encrypted-media"
        />
      ))}
      <div className="hero-video-overlay" aria-hidden="true" />
    </div>
  );
}