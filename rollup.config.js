import { nodeResolve } from '@rollup/plugin-node-resolve';
import localResolve from 'rollup-plugin-local-resolve';
import typescript from '@rollup/plugin-typescript';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-import-css';
import { uglify } from "rollup-plugin-uglify";

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'hello-world-plugin',
    compact: true,
    globals: {
      'react': 'react',
    },
  },
  plugins: [
    nodeResolve({ browser: true }),
    localResolve(),
    image(),
    json(),
    css({ output: 'bundle.css' }),
    commonjs(),
    typescript(),
    uglify(),
  ],
  external: [
    'react',
  ],
  ignore: [
    'node_modules/'
  ]
};