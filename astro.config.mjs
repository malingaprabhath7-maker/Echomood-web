import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://malingaprabhath7-maker.github.io',
  base: '/Echomood-web',
  vite: { plugins: [tailwindcss()] },
});
