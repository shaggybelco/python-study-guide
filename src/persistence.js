// ─── PERSISTENCE (localStorage) ─────────────────────────────────────────────

export function loadProgress(key, fallback) {
  try {
    const saved = localStorage.getItem('pysg_' + key);
    return saved !== null ? JSON.parse(saved) : fallback;
  } catch { return fallback; }
}

export function saveProgress(key, value) {
  try { localStorage.setItem('pysg_' + key, JSON.stringify(value)); }
  catch (e) { console.warn('Failed to save progress', e); }
}
