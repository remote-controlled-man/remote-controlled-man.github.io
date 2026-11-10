(() => {
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  try {
    const stored = window.localStorage.getItem('steven-theme');
    if (stored === 'light' || stored === 'dark') preference = stored;
  } catch {
    /* Theme controls also work when browser storage is unavailable. */
  }

  let theme = preference || (system.matches ? 'dark' : 'light');
  let button;
  const apply = (value) => {
    theme = value;
    root.setAttribute('data-theme', theme);
    if (!button) return;
    button.setAttribute('aria-pressed', String(theme === 'dark'));
    button.setAttribute(
      'aria-label',
      root.lang === 'zh-CN'
        ? theme === 'dark'
          ? '切换到浅色主题'
          : '切换到深色主题'
        : theme === 'dark'
          ? 'Switch to light theme'
          : 'Switch to dark theme',
    );
  };
  apply(theme);

  const connect = () => {
    button = document.querySelector('.theme-toggle');
    if (!button) return;
    button.hidden = false;
    apply(theme);
    button.addEventListener('click', () => {
      preference = theme === 'dark' ? 'light' : 'dark';
      apply(preference);
      try {
        window.localStorage.setItem('steven-theme', preference);
      } catch {
        /* Optional persistence. */
      }
    });
  };
  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', connect, { once: true });
  else connect();
  system.addEventListener('change', (event) => {
    if (!preference) apply(event.matches ? 'dark' : 'light');
  });
})();
