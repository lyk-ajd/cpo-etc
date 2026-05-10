import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import fs from 'node:fs'
import path from 'node:path'

const here = (p) => fileURLToPath(new URL(p, import.meta.url))
const projectRoot = here('../../..')
const imagesDir = here('../../source/images')

// SFC at ../SohoContent.vue lives outside this preview, map bare swiper specifiers to local node_modules.
const swiperBase = here('./node_modules/swiper')

// Dev middleware: serve /landing/soho/<file> from ../../source/images/<file>
// so the cdn() helper inside the SFC works with the placeholder base URL.
const sohoImagesPlugin = {
  name: 'serve-soho-images',
  configureServer(server) {
    server.middlewares.use('/landing/soho', (req, res, next) => {
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
}

export default defineConfig({
  plugins: [vue(), sohoImagesPlugin],
  resolve: {
    alias: [
      { find: /^swiper\/css\/scrollbar$/, replacement: `${swiperBase}/modules/scrollbar.css` },
      { find: /^swiper\/css\/autoplay$/, replacement: `${swiperBase}/modules/autoplay.css` },
      { find: /^swiper\/css\/pagination$/, replacement: `${swiperBase}/modules/pagination.css` },
      { find: /^swiper\/css$/, replacement: `${swiperBase}/swiper.css` },
      { find: /^swiper\/vue$/, replacement: `${swiperBase}/swiper-vue.mjs` },
      { find: /^swiper\/modules$/, replacement: `${swiperBase}/modules/index.mjs` },
      { find: /^vue$/, replacement: here('./node_modules/vue/dist/vue.runtime.esm-bundler.js') },
    ],
  },
  server: {
    fs: {
      allow: [projectRoot],
    },
  },
})
