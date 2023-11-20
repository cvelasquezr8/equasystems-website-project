import { defineConfig } from 'astro/config';
export default defineConfig({
  routes: {
    "./company": {
      output: '/index.html',
      component: '@site/pages/company.astro',
    },
    "./contact-us": {
      output: '/index.html',
      component: '@site/pages/contact-us.astro',
    },
    "./services": {
      output: '/index.html',
      component: '@site/pages/services.astro',
    },
    "./team": {
      output: '/index.html',
      component: '@site/pages/team.astro',
    },
  }
});