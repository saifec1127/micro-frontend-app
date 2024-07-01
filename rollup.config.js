import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';
import url from '@rollup/plugin-url';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js', // Entry point of your React app
  output: {
    file: 'dist/bundle.js',
    format: 'esm', // Use ES module format for micro frontends
    name: 'MicroFrontendApp',
  },
  plugins: [
    resolve(),
    postcss(), // Add this line to handle CSS imports
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true, // Recommended setting for replace plugin
    }),
    json(),
    url({
      limit: 10 * 1024, // Inline files < 10k, copy files > 10k
      include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.gif'],
      emitFiles: true,
    }),
  ],
};
