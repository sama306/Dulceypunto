// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        webp: { effort: 6 },
        jpeg: { mozjpeg: true },
      },
    },
  },

  vite: {
    plugins: [tailwindcss()]
  }
});