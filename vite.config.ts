/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**
 * GitHub Pages отдаёт проект по адресу https://<user>.github.io/<repo>/,
 * поэтому в CI база должна быть «/<repo>/». В GitHub Actions доступна
 * переменная GITHUB_REPOSITORY вида «owner/repo» — берём имя оттуда,
 * чтобы ничего не приходилось править руками при переименовании репозитория.
 * Локально (и при своём домене) база остаётся «/».
 */
function resolveBase(): string {
  const override = process.env.VITE_BASE
  if (override) return override

  const repository = process.env.GITHUB_REPOSITORY
  if (!repository) return '/'

  const name = repository.split('/')[1]
  // user/organization pages (<user>.github.io) публикуются в корне
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
