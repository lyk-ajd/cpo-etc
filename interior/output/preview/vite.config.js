import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

const here = (p) => fileURLToPath(new URL(p, import.meta.url))
const projectRoot = here('../../..')

// The SFC at ../InteriorContent.vue lives outside this preview's project root,
// so Vite's normal node_modules walk can't find swiper/vue there.
// Map the bare specifiers to absolute paths inside this preview's node_modules.
const swiperBase = here('./node_modules/swiper')

export default defineConfig({
  plugins: [vue()],
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
})
