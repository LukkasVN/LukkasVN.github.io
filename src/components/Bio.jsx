import headshot from '../assets/lucas-headshot.jpg';
import { coreSkills } from '../data/coreSkills';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import './Bio.css';

export default function Bio() {
  const { lang } = useLanguage();
  const t = strings[lang].bio;

  return (
    <section id="bio" className="section">
      <div className="wrap">
        <div className="section-label">{t.label}</div>
        <h2>{t.heading}</h2>
        <div className="bio-grid">
          <div className="bio-side">
            <div className="bio-photo">
              <img src={headshot} alt="Lucas Varela Negro" />
            </div>
            <div className="titleblock">
              <div className="titleblock-head mono">{t.fieldNotes}</div>
              <div className="titleblock-row">
                <span className="k mono">{t.basedIn}</span>
                <span className="v mono">{t.basedInValue}</span>
              </div>
              <div className="titleblock-row">
                <span className="k mono">{t.works}</span>
                <span className="v mono">{t.worksValue}</span>
              </div>
              <div className="titleblock-row">
                <span className="k mono">{t.engines}</span>
                <span className="v mono">{t.enginesValue}</span>
              </div>
            </div>
          </div>
          <div className="bio-text">
            {t.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="bio-stats">
              {t.stats.map((stat) => (
                <div key={stat.label} className="mono">
                  <span className="n">{stat.n}</span>
                  {stat.label}
                </div>
              ))}
            </div>
            <div className="bio-skills">
              <div className="bio-skills-label mono">{t.coreSkillsLabel}</div>
              <div className="bio-skills-chips">
                {coreSkills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
