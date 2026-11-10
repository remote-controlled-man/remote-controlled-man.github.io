import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://remote-controlled-man.github.io',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
