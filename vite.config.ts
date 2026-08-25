/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**
 * GitHub Pages serves the project at https://<user>.github.io/<repo>/, so in CI
 * the base has to be "/<repo>/". GitHub Actions exposes GITHUB_REPOSITORY as
 * "owner/repo", so the name is taken from there — renaming the repository needs
 * no manual edits. Locally (and on a custom domain) the base stays "/".
 */
function resolveBase(): string {
  const override = process.env.VITE_BASE
  if (override) return override

  const repository = process.env.GITHUB_REPOSITORY
  if (!repository) return '/'

  const name = repository.split('/')[1]
  // user/organization pages (<user>.github.io) are served from the root
  return name.endsWith('.github.io') ? '/' : `/${name}/`
}

export default defineConfig({
  base: resolveBase(),
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    css: true,
  },
})
