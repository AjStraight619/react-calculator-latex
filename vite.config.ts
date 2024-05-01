import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'ReactCalculatorLatex',
      fileName: (format) => `react-calculator-latex.${format}`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'katex', 'react-katex'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          katex: 'Katex',
          'react-katex': 'ReactKaTeX'
        }
      }
    },
  
    emptyOutDir: false
  }
});