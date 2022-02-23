import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [
    react(),
    ssr(),
    WindiCSS({
      scan: {
        // By default only `src/` is scanned
        dirs: ['pages'],
        // We only have to specify the file extensions we actually use.
        fileExtensions: ['vue', 'js', 'ts', 'jsx', 'tsx', 'html', 'pug'],
      },
    }),
  ],
}
