import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

// Path to the entry file
const input = 'src/index.ts';

export default {
  input, // The entry point of your library
  output: [
    {
      file: path.resolve(__dirname, 'dist/index.cjs.js'), // CommonJS bundle
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: path.resolve(__dirname, 'dist/index.esm.js'), // ES module bundle
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: [
    'react',
    'react-dom',
    'styled-components', // Exclude react and styled-components from the bundle
  ],
  plugins: [
    peerDepsExternal(), // Exclude peer dependencies from the bundle
    resolve(), // Resolve node modules
    commonjs(), // Convert CommonJS to ES6
    typescript(), // Use TypeScript with Rollup
    postcss(), // Process CSS (needed for styled-components)
    terser(), // Minify the bundle
  ],
};
