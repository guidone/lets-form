import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import fs from 'fs';

// TODO check in CRA one last time
// TODO fix banner with current version

const jsonRaw = fs.readFileSync(__dirname + '/package.json', { encoding: 'utf-8' });
const packageJson = JSON.parse(jsonRaw);

export default cliArgs => {
  console.log('Building version ', packageJson.version);

  return {
    input: 'react-mantine/index.js',
    external: [
      'react',
      'react-dom',
      'prop-types',
      /^@mantine/
    ],
    output: [
      // react-mantine
      {
        banner: `/* LetsForm React-Mantine v${packageJson.version} - UMD */`,
        file: 'dist/react-mantine-umd/main.js',
        name: 'lets-form/react-mantine',
        globals: {
          '@mantine/core': '@mantine/core',
          '@mantine/dates': '@mantine/dates',
          'react': 'React'
        },
        format: 'umd',
        // umd doesn't support dynamic imports in Rollup, bundle all together
        inlineDynamicImports: true
      },
      {
        banner: `/* LetsForm React-Mantine v${packageJson.version} - ESM */`,
        dir: 'dist/react-mantine-esm',
        name: 'lets-form/react-mantine',
        globals: {
          '@mantine/core': '@mantine/core',
          '@mantine/dates': '@mantine/dates',
          'react': 'React'
        },
        format: 'esm'
      }
    ],
    plugins: [
      json(),
      postcss({
        // avoid extracting into separate files, inject css into head
        extract: false,
        inject: true,
        use: ['sass'],
      }),
      nodeResolve({
        extensions: ['.js', '.jsx']
      }),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-react'],
        extensions: ['.js', '.jsx']
      }),
      commonjs(),
      replace({
        preventAssignment: false
      })
  ]
  };
};
