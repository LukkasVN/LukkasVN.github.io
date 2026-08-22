import { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'lvn-portfolio-lang';
const LanguageContext = createContext(null);

function detectDefault() {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'en' || saved === 'es') return saved;
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectDefault);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  function toggleLang() {
    setLang((current) => (current === 'en' ? 'es' : 'en'));
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
