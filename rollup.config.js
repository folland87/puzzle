import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' },
  ],
  plugins: [
    external(),
    babel({
      exclude: 'node_modules/**',
    }),
    url({
      include: ['**/*.svg', '**/*.woff2'],
    }),
    commonjs(),
    nodeResolve(),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
