import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { terser } from '@rollup/plugin-terser';

const packageJson = require('./package.json');

export default {
  input: 'src/index.ts', // Use the entry point file you've just created
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Prevent bundling peerDependencies
    resolve(), // Find and bundle `node_modules`
    commonjs(), // Convert CommonJS to ES6
    typescript({ tsconfig: './tsconfig.json' }), // Compile TypeScript files
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    postcss(), // To handle CSS imports in the components
    terser(), // Minify the output
  ],
  external: Object.keys(packageJson.peerDependencies || {}),
};
