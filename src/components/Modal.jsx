import { useEffect } from 'react';
import './Modal.css';

export default function Modal({ onClose, children, closeLabel }) {
  useEffect(() => {
    function handleKey(event) {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close mono" onClick={onClose} aria-label={closeLabel}>
          {closeLabel} ✕
        </button>
        {children}
      </div>
    </div>
  );
}
