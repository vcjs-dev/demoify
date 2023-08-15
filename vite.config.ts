import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { svg4VuePlugin } from 'vite-plugin-svg4vue'

const isBuildLib = () => {
  return process.env.BUILD_TYPE === 'lib'
}

const outDir = isBuildLib() ? 'lib' : 'dist'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/demoify/',
  plugins: [vue(), svg4VuePlugin({ assetsDirName: false })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: isBuildLib()
    ? {
        outDir,
        target: 'es2015',
        lib: {
          // Could also be a dictionary or array of multiple entry points
          entry: resolve(__dirname, 'src/lib/index.ts'),
          name: 'Demoify',
          // the proper extensions will be added
          fileName: 'demoify',
          formats: ['es', 'cjs'],
        },
        rollupOptions: {
          external: ['vue', 'prismjs'],
        },
        copyPublicDir: false,
        cssTarget: ['chrome35'],
      }
    : { outDir },
})
