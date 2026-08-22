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
            <ProjectCard key={project.id} project={project} mediaFallback={t.mediaFallback} />
          ))}
        </div>
        <Pagination page={page} totalPages={totalPages} onPrev={onPrev} onNext={onNext} />
      </div>
    </section>
  );
}

function ProjectCard({ project, mediaFallback }) {
  return (
    <div className="proj-card">
      <div className="proj-thumb">
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
      </div>
      <div className="proj-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="proj-links mono">
          {project.links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
