import sourcemaps from 'rollup-plugin-sourcemaps';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: {
    exports: 'auto',
    file: 'lib/canvas-select.min.js',
    format: 'es',
    name: 'CanvasSelect',
    sourcemap: true,
  },
  plugins: [
    sourcemaps(),
    typescript(),
    babel({ babelHelpers: 'bundled' }),
    terser(),
  ],
};
