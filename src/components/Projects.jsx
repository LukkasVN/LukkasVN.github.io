import { projects } from '../data/projects';
import { usePagination } from '../hooks/usePagination';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { isVideoSrc } from '../utils/media';
import Pagination from './Pagination';
import './Projects.css';

export default function Projects() {
  const { lang } = useLanguage();
  const t = strings[lang].projects;
  const { page, totalPages, pageItems, onPrev, onNext } = usePagination(projects[lang], 3);

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="section-label">{t.label}</div>
        <h2>{t.heading}</h2>
        <div className="projects-grid">
          {pageItems.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              mediaFallback={t.mediaFallback}
              openSourceLabel={t.openSourceLabel}
            />
          ))}
        </div>
        <Pagination page={page} totalPages={totalPages} onPrev={onPrev} onNext={onNext} />
      </div>
    </section>
  );
}

function ProjectCard({ project, mediaFallback, openSourceLabel }) {
  return (
    <div className="proj-card">
      <a
        className="proj-thumb"
        href={project.links[0]?.href}
        target="_blank"
        rel="noreferrer"
        aria-label={project.title}
      >
        {project.media ? (
          isVideoSrc(project.media) ? (
            <video src={project.media} autoPlay loop muted playsInline />
          ) : (
            <img src={project.media} alt={project.title} />
          )
        ) : (
          <>
            <span className="media-tag mono">{project.mediaTag}</span>
            <span className="mono">{mediaFallback}</span>
          </>
        )}
        <div className="mark tr" />
        <div className="mark br" />
      </a>
      <div className="proj-body">
        {project.date && <div className="proj-date mono">{project.date}</div>}
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="proj-links mono">
          {project.links.map((link) => {
            const isRepo = link.href.includes('github.com');
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={isRepo ? 'repo-badge' : undefined}
              >
                {isRepo ? `${openSourceLabel} \u2197` : link.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}