import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        resources: resolve(__dirname, 'resources.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
        tmd: resolve(__dirname, 'tmd.html'),
        fees: resolve(__dirname, 'fees.html'),
        complaints: resolve(__dirname, 'complaints.html'),
        'direct-debit': resolve(__dirname, 'direct-debit.html'),
        'code-of-practice': resolve(__dirname, 'code-of-practice.html'),
        hardship: resolve(__dirname, 'hardship.html'),
      },
    },
  },
})
