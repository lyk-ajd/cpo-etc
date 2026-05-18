import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import fs from 'node:fs'
import path from 'node:path'

const here = (p) => fileURLToPath(new URL(p, import.meta.url))
const projectRoot = here('../../..')
const imagesDir = here('../../source/images')
const swiperBase = here('./node_modules/swiper')

// Dev: serve /landing/interior/<file> from ../../source/images/<file>.
// Build: copy all source/images/* into dist/landing/interior/ so the SFC's
// BASE_URL-aware cdn() helper resolves to <base>/landing/interior/<file>.
const interiorImagesPlugin = {
  name: 'serve-interior-images',
  configureServer(server) {
    server.middlewares.use('/landing/interior', (req, res, next) => {
      const filename = decodeURIComponent(req.url.split('?')[0]).replace(/^\//, '')
      const filepath = path.join(imagesDir, filename)
      if (filepath.startsWith(imagesDir) && fs.existsSync(filepath)) {
        const ext = path.extname(filepath).slice(1).toLowerCase()
        const mime = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', svg: 'image/svg+xml', webp: 'image/webp' }[ext] || 'application/octet-stream'
        res.setHeader('Content-Type', mime)
        fs.createReadStream(filepath).pipe(res)
        return
      }
      next()
    })
  },
  closeBundle() {
    const distLandingDir = path.resolve(here('./dist'), 'landing/interior')
    if (!fs.existsSync(here('./dist'))) return
    fs.mkdirSync(distLandingDir, { recursive: true })
    for (const f of fs.readdirSync(imagesDir)) {
      fs.copyFileSync(path.join(imagesDir, f), path.join(distLandingDir, f))
    }
  },
}

export default defineConfig(({ command }) => ({
  // dev: '/' (local). build: '/cpo-etc/interior/' (GitHub Pages subpath).
  base: command === 'build' ? '/cpo-etc/interior/' : '/',
  plugins: [vue(), interiorImagesPlugin],
  resolve: {
    alias: [
      // ORDER MATTERS: more specific paths first
      { find: /^swiper\/css\/scrollbar$/, replacement: `${swiperBase}/modules/scrollbar.css` },
      { find: /^swiper\/css\/autoplay$/, replacement: `${swiperBase}/modules/autoplay.css` },
      { find: /^swiper\/css\/effect-coverflow$/, replacement: `${swiperBase}/modules/effect-coverflow.css` },
      { find: /^swiper\/css\/pagination$/, replacement: `${swiperBase}/modules/pagination.css` },
      { find: /^swiper\/css$/, replacement: `${swiperBase}/swiper.css` },
      { find: /^swiper\/vue$/, replacement: `${swiperBase}/swiper-vue.mjs` },
      { find: /^swiper\/modules$/, replacement: `${swiperBase}/modules/index.mjs` },
      { find: /^vue$/, replacement: here('./node_modules/vue/dist/vue.runtime.esm-bundler.js') },
    ],
  },
  server: {
    fs: {
      // allow serving the SFC + design-tokens.css that live outside the preview directory
      allow: [projectRoot],
    },
  },
}))
