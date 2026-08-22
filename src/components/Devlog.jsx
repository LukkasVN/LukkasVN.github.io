import { useState } from 'react';
import { devlogEntries } from '../data/devlog';
import { usePagination } from '../hooks/usePagination';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import Modal from './Modal';
import Pagination from './Pagination';
import './Devlog.css';

export default function Devlog() {
  const { lang } = useLanguage();
  const t = strings[lang].devlog;
  const { page, totalPages, pageItems, onPrev, onNext } = usePagination(devlogEntries[lang], 3);
  const [openId, setOpenId] = useState(null);
  const openEntry = devlogEntries[lang].find((entry) => entry.id === openId) || null;

  return (
    <section id="devlog" className="section">
      <div className="wrap">
        <div className="section-label">{t.label}</div>
        <h2>{t.heading}</h2>
        {pageItems.map((entry) => (
          <DevlogEntry
            key={entry.id}
            entry={entry}
            readEntry={t.readEntry}
            onOpen={() => setOpenId(entry.id)}
          />
        ))}
        <Pagination page={page} totalPages={totalPages} onPrev={onPrev} onNext={onNext} />
      </div>

      {openEntry && (
        <Modal onClose={() => setOpenId(null)} closeLabel={t.close}>
          <div className="devlog-modal mono">
            <span className="idx">#{openEntry.id}</span>
            {openEntry.date}
          </div>
          <h3 className="devlog-modal-title">{openEntry.title}</h3>
          <div className="devlog-tags mono">
            {openEntry.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          {openEntry.content.map((paragraph, i) => (
            <p className="devlog-modal-p" key={i}>
              {paragraph}
            </p>
          ))}
        </Modal>
      )}
    </section>
  );
}

function DevlogEntry({ entry, readEntry, onOpen }) {
  return (
    <div className="devlog-entry">
      <div className="devlog-meta mono">
        <span className="idx">#{entry.id}</span>
        {entry.date}
      </div>
      <div className="devlog-body">
        <h3>{entry.title}</h3>
        <div className="devlog-tags mono">
          {entry.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p>{entry.excerpt}</p>
        <button type="button" className="read mono" onClick={onOpen}>
          {readEntry}
        </button>
      </div>
    </div>
  );
}
