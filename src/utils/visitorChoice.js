import { useEffect, useState } from 'react';

const GA_ID = 'G-PDDN3JF4DM';
const STORAGE_KEY = 'lvn-portfolio-consent';
const CHANGE_EVENT = 'lvn-consent-change';
const OPEN_EVENT = 'lvn-open-cookie-settings';

export function getConsent() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed.analytics !== 'boolean') return null;
    return parsed;
  } catch {
    return null;
  }
}

let analyticsLoaded = false;

function gtag() {
  window.dataLayer.push(arguments);
}

function enableAnalytics() {
  window[`ga-disable-${GA_ID}`] = false;
  if (analyticsLoaded) {
    gtag('consent', 'update', { analytics_storage: 'granted' });
    return;
  }
  analyticsLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = gtag;
  gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  gtag('js', new Date());
  gtag('config', GA_ID);
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

function disableAnalytics() {
  window[`ga-disable-${GA_ID}`] = true;
  if (analyticsLoaded) gtag('consent', 'update', { analytics_storage: 'denied' });
  const host = window.location.hostname;
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0].trim();
    if (!name.startsWith('_ga')) return;
    const expired = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    document.cookie = expired;
    document.cookie = `${expired}; domain=${host}`;
    document.cookie = `${expired}; domain=.${host}`;
  });
}

export function initConsent() {
  if (getConsent()?.analytics) enableAnalytics();
}

function storeConsent(value) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    return false;
  }
  return true;
}

export function setConsent({ analytics }) {
  const value = { analytics, date: new Date().toISOString() };
  storeConsent(value);
  if (analytics) enableAnalytics();
  else disableAnalytics();
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: value }));
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onOpenCookieSettings(handler) {
  window.addEventListener(OPEN_EVENT, handler);
  return () => window.removeEventListener(OPEN_EVENT, handler);
}

export function useConsent() {
  const [consent, setState] = useState(getConsent);

  useEffect(() => {
    function handleChange(event) {
      setState(event.detail);
    }
    window.addEventListener(CHANGE_EVENT, handleChange);
    return () => window.removeEventListener(CHANGE_EVENT, handleChange);
  }, []);

  return consent;
}
