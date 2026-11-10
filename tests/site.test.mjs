import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../dist/', import.meta.url);
const readPage = (path) => readFile(new URL(`${path}index.html`, root), 'utf8');

test('visitors can read every section and project in English or Chinese and switch without losing the page', async () => {
  for (const path of [
    '',
    'projects/',
    'notes/',
    'about/',
    'projects/skillfit/',
    'projects/device-agent-arena/',
  ]) {
    for (const lang of ['en', 'zh']) {
      const route = lang === 'en' ? path : `zh/${path}`;
      const html = await readPage(route);
      assert.match(
        html,
        lang === 'en' ? /<html[^>]*lang="en"/ : /<html[^>]*lang="zh-CN"/,
      );
      const counterpart = lang === 'en' ? `/zh/${path}` : `/${path}`;
      assert.ok(
        html.includes(`href="${counterpart}"`),
        `${route} needs its translated counterpart`,
      );
      assert.match(html, /<h1[\s>]/);
      assert.match(html, /<main[\s>]/);
    }
  }
});

test('the sitemap exposes both language versions at the chosen GitHub Pages origin', async () => {
  const xml = await readFile(new URL('sitemap.xml', root), 'utf8');
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (match) => match[1],
  );
  assert.equal(new Set(urls).size, 12);
  assert.ok(urls.includes('https://remote-controlled-man.github.io/'));
  assert.ok(
    urls.includes(
      'https://remote-controlled-man.github.io/zh/projects/device-agent-arena/',
    ),
  );
  for (const url of urls) {
    assert.equal(
      new URL(url).origin,
      'https://remote-controlled-man.github.io',
    );
    await readPage(new URL(url).pathname.slice(1));
  }
});
