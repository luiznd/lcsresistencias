import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

function galleryPlugin() {
  return {
    name: 'virtual-gallery',
    resolveId(id: string) {
      if (id === 'virtual:gallery') return id
    },
    load(id: string) {
      if (id === 'virtual:gallery') {
        const galleryDir = path.resolve(__dirname, 'public', 'images', 'galeria')
        let urls: string[] = []
        try {
          const entries = fs.readdirSync(galleryDir, { withFileTypes: true })
          const allowed = new Set(['.png', '.jpg', '.jpeg', '.jfif', '.webp'])
          const files = entries
            .filter((e) => e.isFile() && allowed.has(path.extname(e.name).toLowerCase()))
            .map((e) => e.name)
            .sort((a, b) => a.localeCompare(b, 'pt-BR', { numeric: true, sensitivity: 'base' }))
          urls = files.map((name) => `/images/galeria/${name}`)
        } catch (e) {
          urls = []
        }
        return `export default ${JSON.stringify(urls)};`
      }
    },
    handleHotUpdate(ctx: any) {
      const galleryPath = path.join('public', 'images', 'galeria')
      if (ctx.file.includes(galleryPath)) {
        const mod = ctx.server.moduleGraph.getModuleById('virtual:gallery')
        if (mod) ctx.server.moduleGraph.invalidateModule(mod)
        return []
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), galleryPlugin()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8787',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})