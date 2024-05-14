import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { cleandir } from 'rollup-plugin-cleandir';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const jsonRaw = fs.readFileSync(__dirname + '/package.json', { encoding: 'utf-8' });
const packageJson = JSON.parse(jsonRaw);

const rollupConfig = ({ framework }) => ({
  input: `${framework}/index.js`,
  external: [
    'react',
    'react-dom',
    'prop-types',
    'fs',
    /^@mantine/,
    /@material-ui\/core\/.*/,
    /^@mui/,
    /^rsuite/,
    /^antd/
  ],
  output: [
    {
      banner: `/* LetsForm ${framework} v${packageJson.version} - UMD */`,
      file: `dist/${framework}-umd/main.js`,
      name: `lets-form/${framework}`,
      /*globals: (id) => {
        if (id === 'react') {
          return 'React';
        } else if (id == 'react-dom') {
          return 'ReactDOM';
        } else if (id === 'prop-types') {
          return 'PropTypes';
        }
        return id;
      },*/
      format: 'umd',
      // umd doesn't support dynamic imports in Rollup, bundle all together
      inlineDynamicImports: true
    },
    {
      banner: `/* LetsForm ${framework} v${packageJson.version} - ESM */`,
      dir: `dist/${framework}-esm`,
      name: `lets-form/${framework}`,
      format: 'esm',
      /*globals: (id) => {
        if (id === 'react') {
          return 'React';
        } else if (id == 'react-dom') {
          return 'ReactDOM';
        } else if (id === 'prop-types') {
          return 'PropTypes';
        }
        return id;
      }*/
    }
  ],
  plugins: [
    cleandir(),
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
});

const rollupConfigUtils = () => ({
  input: 'helpers/index-export.js',
  external: [
    'react',
    'react-dom',
    'prop-types',
    /^@mantine/,
    /@material-ui\/core\/.*/,
    /^@mui/,
    /^rsuite/,
    /^antd/
  ],
  output: [
    {
      banner: `/* LetsForm Utils v${packageJson.version} - UMD */`,
      file: `dist/utils-umd/main.js`,
      name: `lets-form/utils`,
      format: 'umd',
      // umd doesn't support dynamic imports in Rollup, bundle all together
      inlineDynamicImports: true
    },
    {
      banner: `/* LetsForm Utils v${packageJson.version} - ESM */`,
      file: 'dist/utils-esm/index.js',
      //dir: `dist/utils-esm`,
      name: `lets-form/utils`,
      format: 'esm'
    }
  ],
  plugins: [
    cleandir(),
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
});


export default () => {
  console.log('Building version ', packageJson.version);

  return [
    rollupConfig({ framework: 'react-mantine' }),
    rollupConfig({ framework: 'react-rsuite5' }),
    rollupConfig({ framework: 'react' }),
    rollupConfig({ framework: 'react-antd' }),
    rollupConfig({ framework: 'react-material-ui' }),
    rollupConfig({ framework: 'react-bootstrap' }),
    {
      input: `index.js`,
      external: [
        'react',
        'react-dom',
        'prop-types',
        /^@mantine/,
        /@material-ui\/core\/.*/,
        /^@mui/,
        /^rsuite/,
        /^antd/
      ],
      output: [
        {
          banner: `/* LetsForm Generator v${packageJson.version} - UMD */`,
          file: `dist/generator-umd/main.js`,
          name: `lets-form/generator`,
          format: 'umd',
          // umd doesn't support dynamic imports in Rollup, bundle all together
          inlineDynamicImports: true
        },
        {
          banner: `/* LetsForm Generator v${packageJson.version} - ESM */`,
          dir: `dist/generator-esm`,
          name: `lets-form/generator`,
          format: 'esm'
        }
      ],
      plugins: [
        cleandir(),
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
    },
    rollupConfigUtils()
  ];
};
