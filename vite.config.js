import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    base: '/deploying-vite-project-example',
    plugins: [vue()]
});

module.exports = {
    apps: [
      {
        name: 'NuxtAppName',
        port: '3000',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }
  