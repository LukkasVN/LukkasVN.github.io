import { useEffect, useState } from 'react';
import { demoReels } from '../data/demoreels';
import { socials } from '../data/socials';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import baseMobilityGif from '../assets/projects/01-base-mobility.gif';
import jumpingGif from '../assets/projects/02-jumping.gif';
import crouchingProningGif from '../assets/projects/03-crouching-proning.gif';
import slidingGif from '../assets/projects/04-sliding.gif';
import rollingGif from '../assets/projects/05-rolling.gif';
import ledgeWalkingGif from '../assets/projects/06-ledge-walking.gif';
import glidingGif from '../assets/projects/07-gliding.gif';
import ladderClimbingGif from '../assets/projects/08-ladder-climbing.gif';
import interactableSystemGif from '../assets/projects/09-interactable-system.gif';
import dialogueSystemGif from '../assets/projects/10-dialogue-system.gif';
import triggerPuzzleSystemGif from '../assets/projects/11-trigger-puzzle-system.gif';
import saveSystemGif from '../assets/projects/12-save-system.gif';
import textTranslationSystemGif from '../assets/projects/13-text-translation-system.gif';
import fpControllerInteractablesGif from '../assets/projects/14-fp-controller-interactables.gif';
import audioManagerGif from '../assets/projects/15-audio-manager.gif';
import fpFlashlightGif from '../assets/projects/16-fp-flashlight.gif';
import multifloorElevatorGif from '../assets/projects/17-multifloor-elevator.gif';
import assetGridVisualizerGif from '../assets/projects/18-asset-grid-visualizer.gif';
import radioStationManagerGif from '../assets/projects/19-radio-station-manager.gif';
import objectPlacingSystemGif from '../assets/projects/20-object-placing-system.gif';
import droppablesSystemGif from '../assets/projects/21-droppables-system.gif';
import destructiblesSystemGif from '../assets/projects/22-destructibles-system.gif';
import { socialIcons } from './SocialIcons';
import './Hero.css';

const showcaseGifs = [
  baseMobilityGif,
  jumpingGif,
  crouchingProningGif,
  slidingGif,
  rollingGif,
  ledgeWalkingGif,
  glidingGif,
  ladderClimbingGif,
  interactableSystemGif,
  dialogueSystemGif,
  triggerPuzzleSystemGif,
  saveSystemGif,
  textTranslationSystemGif,
  fpControllerInteractablesGif,
  audioManagerGif,
  fpFlashlightGif,
  multifloorElevatorGif,
  assetGridVisualizerGif,
  radioStationManagerGif,
  objectPlacingSystemGif,
  droppablesSystemGif,
  destructiblesSystemGif,
];

const reel2025 = demoReels.find((reel) => reel.year === '2025');
const reel2024 = demoReels.find((reel) => reel.year === '2024');

const heroPlaylist = [
  { id: reel2025.id, type: 'youtube', youtubeId: reel2025.youtubeId },
  ...showcaseGifs.map((src, i) => ({ id: `showcase-gif-${i + 1}`, type: 'gif', src })),
  { id: reel2024.id, type: 'youtube', youtubeId: reel2024.youtubeId },
];

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
        <div className="hero-socials">
          {socials.map((social) => {
            const Icon = socialIcons[social.id];
            return (
              <a
                key={social.id}
                className="hero-social-icon"
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                title={social.name}
              >
                <Icon />
                {social.id === 'linktree' && <span className="hero-social-tag mono">HUB</span>}
              </a>
            );
          })}
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

const GIF_SLIDE_DURATION = 14000;
const VIDEO_SLIDE_DURATION = 60000;

function HeroVideoBackground() {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const readyTimer = setTimeout(() => setReady(true), 700);
    return () => clearTimeout(readyTimer);
  }, []);

  useEffect(() => {
    const currentSlide = heroPlaylist[active];
    const duration =
      currentSlide.type === 'youtube' ? VIDEO_SLIDE_DURATION : GIF_SLIDE_DURATION;
    const id = setTimeout(() => {
      setActive((a) => (a + 1) % heroPlaylist.length);
    }, duration);
    return () => clearTimeout(id);
  }, [active]);

  return (
    <div className="hero-video-bg" aria-hidden="true">
      {heroPlaylist.map((slide, i) =>
        slide.type === 'youtube' ? (
          <iframe
            key={`backdrop-${slide.id}`}
            className={`hero-video-backdrop${ready && i === active ? ' active' : ''}`}
            src={`https://www.youtube-nocookie.com/embed/${slide.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${slide.youtubeId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1`}
            title=""
            tabIndex="-1"
            allow="autoplay; encrypted-media"
          />
        ) : (
          <img
            key={`backdrop-${slide.id}`}
            className={`hero-video-backdrop${ready && i === active ? ' active' : ''}`}
            src={slide.src}
            alt=""
          />
        )
      )}
      {heroPlaylist.map((slide, i) =>
        slide.type === 'youtube' ? (
          <iframe
            key={slide.id}
            className={`hero-video-frame${ready && i === active ? ' active' : ''}`}
            src={`https://www.youtube-nocookie.com/embed/${slide.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${slide.youtubeId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1`}
            title=""
            tabIndex="-1"
            allow="autoplay; encrypted-media"
          />
        ) : (
          <img
            key={slide.id}
            className={`hero-video-frame${ready && i === active ? ' active' : ''}`}
            src={slide.src}
            alt=""
          />
        )
      )}
      <div className="hero-video-overlay" aria-hidden="true" />
    </div>
  );
}