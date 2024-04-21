import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';

export default {
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
      banner: '/* LetsForm React Mantine */',
		  file: 'dist/react-mantine/main.js',
      name: 'lets-form/react-mantine',
      globals: {
        '@mantine/core': '@mantine/core',
        '@mantine/dates': '@mantine/dates',
        'react': 'React'
      },
		  format: 'umd'
	  },
    {
      banner: '/* LetsForm React Mantine */',
		  file: 'dist/esm-react-mantine/index.js',
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