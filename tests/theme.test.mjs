import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';

async function browser({
  saved = null,
  systemDark = false,
  blocked = false,
  lang = 'en',
} = {}) {
  const source = await readFile(
    new URL('../public/theme.js', import.meta.url),
    'utf8',
  );
  const attributes = new Map();
  const buttonAttributes = new Map();
  const events = {};
  const button = {
    hidden: true,
    setAttribute: (key, value) => buttonAttributes.set(key, value),
    addEventListener: (name, handler) => {
      events[name] = handler;
    },
  };
  const document = {
    documentElement: {
      lang,
      setAttribute: (key, value) => attributes.set(key, value),
    },
    readyState: 'complete',
    querySelector: () => button,
  };
  const storage = {
    getItem: () => {
      if (blocked) throw new Error('Storage unavailable');
      return saved;
    },
    setItem: (_key, value) => {
      if (blocked) throw new Error('Storage unavailable');
      saved = value;
    },
  };
  runInNewContext(source, {
    document,
    window: {
      localStorage: storage,
      matchMedia: () => ({ matches: systemDark, addEventListener: () => {} }),
    },
  });
  return { attributes, buttonAttributes, button, events, stored: () => saved };
}

test('a saved theme overrides the system preference and the button persists the next choice', async () => {
  const page = await browser({ saved: 'light', systemDark: true });
  assert.equal(page.attributes.get('data-theme'), 'light');
  assert.equal(page.button.hidden, false);
  page.events.click();
  assert.equal(page.attributes.get('data-theme'), 'dark');
  assert.equal(page.stored(), 'dark');
  assert.equal(page.buttonAttributes.get('aria-pressed'), 'true');
  assert.equal(
    page.buttonAttributes.get('aria-label'),
    'Switch to light theme',
  );
});

test('theme switching remains usable when storage is blocked and labels match the page language', async () => {
  const page = await browser({
    blocked: true,
    systemDark: true,
    lang: 'zh-CN',
  });
  assert.equal(page.attributes.get('data-theme'), 'dark');
  assert.equal(page.buttonAttributes.get('aria-label'), '切换到浅色主题');
  page.events.click();
  assert.equal(page.attributes.get('data-theme'), 'light');
  assert.equal(page.buttonAttributes.get('aria-label'), '切换到深色主题');
});
