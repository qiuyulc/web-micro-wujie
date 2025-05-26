import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2015',
    outDir: 'dist',
    rollupOptions: {
      output: {
        // manualChunks: (id) => {
        //   // 自定义模块分割策略:cite[5]
        //   if (id.includes('node_modules')) {
        //     const lib = id.split('node_modules/.pnpm')[1];
        //     return ['react', 'react-dom', 'lodash'].includes(lib)
        //       ? lib
        //       : 'vendor';
        //   }
        // },
        // chunkFileNames: 'js/[name]-[hash].js',
        // // assetFileNames: 'assets/[name]-[hash][extname]',
        // assetFileNames:(assetInfo)=>{
        //   if(assetInfo.name?.includes('.svg')){
        //     return 'assets/[name]-[hash][extname]'
        //   }
        //   return 'assets/[name]-[hash][extname]';
        // }
      },
    },
  },
});
