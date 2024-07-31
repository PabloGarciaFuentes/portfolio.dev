import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import reactRenderer from '@astrojs/renderer-react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    plugins: [reactRenderer()]
  },
});