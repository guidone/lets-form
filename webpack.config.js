/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { consola } = require('consola');

// get the latest version
let currentVersion;
try {
  const packageFile = fs.readFileSync(__dirname + '/package.json', 'utf-8');
  const packageJson = JSON.parse(packageFile);
  currentVersion = packageJson.version;
} catch (e) {
  consola.error('Error reading package version', e);
  process.exit(1);
}

//const __DEV__ = process.env.NODE_ENV === 'development';

const plugins = [
  new LodashModuleReplacementPlugin(),
  new webpack.SourceMapDevToolPlugin({
    filename: '[name]-[chunkhash].map'
  })
];

if (process.env.ANALYZE === 'true') {
  plugins.push(new BundleAnalyzerPlugin());
}


/*function externalMaterialUI (_, module, callback) {
  var isMaterialUIComponent = /^@mui\/([^/]+)$/;
  var match = isMaterialUIComponent.exec(module);
  if (match !== null) {
      var component = match[1];
      return callback(null, `window["material-ui"].${component}`);
  }
  callback();
}*/

module.exports = module.exports = (env = {}) => {
  let library = 'lets-form';
  let entryPoint = path.join(__dirname, 'index.js');
  let outputFile = 'lets-form.min.js';
  let entryPointName = 'lets-form';
  let outputPath = 'dist';
  let globalObject = undefined;
  const BASE_PUBLIC_PATH = 'https://unpkg.com/lets-form';

  consola.box(`Framework ${env.framework}`);
  consola.start(`Building version ${currentVersion}`);
  console.log('');

  if (env.framework === 'antd') {
    console.log('Building for Ant Design framework');
    library = 'lets-form-antd';
    entryPoint = path.join(__dirname, 'react-antd/index.js');
    outputFile = 'index.js';
    entryPointName = 'lets-form-antd';
    outputPath = 'dist/react-antd';
    globalObject = 'this';
  } else if (env.framework === 'rsuite5') {
    
    library = 'lets-form-rsuite5';
    entryPoint = path.join(__dirname, 'react-rsuite5/index.js');
    outputFile = 'main.js';
    entryPointName = 'lets-form-rsuite5';
    outputPath = 'dist/react-rsuite5';
    globalObject = 'this';
  } else if (env.framework === 'bootstrap') {
    console.log('Building for Bootstrap framework');
    library = 'lets-form-bootstrap';
    entryPoint = path.join(__dirname, 'react-bootstrap/index.js');
    outputFile = 'main.js';
    entryPointName = 'lets-form-bootstrap';
    outputPath = 'dist/react-bootstrap';
    globalObject = 'this';
  } else if (env.framework === 'react') {
    console.log('Building for React framework');
    library = 'lets-form-react';
    entryPoint = path.join(__dirname, 'react/index.js');
    outputFile = 'main.js';
    entryPointName = 'lets-form-react';
    outputPath = 'dist/react';
    globalObject = 'this';
  } else if (env.framework === 'material-ui') {
    console.log('Building for Material UI framework');
    library = 'lets-form-material-ui';
    entryPoint = path.join(__dirname, 'react-material-ui/index.js');
    outputFile = 'main.js';
    entryPointName = 'lets-form-material-ui';
    outputPath = 'dist/react-material-ui';
    globalObject = 'this';
  } else if (env.framework === 'helpers') {
    console.log('Building for helpers');
    library = 'lets-form/utils';
    entryPoint = path.join(__dirname, 'helpers/index-export.js');
    outputFile = 'main.js';
    entryPointName = 'lets-form/utils';
    outputPath = 'dist/utils';
    globalObject = 'this';
  } else {
    console.log('Building for ALL frameworks');
  }

  return {
    mode: 'production',
    entry: {
      [entryPointName]: entryPoint
    },
    output: {
      clean: true,
      path: outputPath ? path.join(__dirname, outputPath) : __dirname,
      library: library,
      filename: outputFile,
      chunkFilename: '[name]-[chunkhash].js',
      sourceMapFilename: 'main.map',
      publicPath: `${BASE_PUBLIC_PATH}@${currentVersion}/${outputPath}/`,
      libraryTarget: 'umd',
      globalObject
    },
    externals: [
      {
        'rsuite': 'umd rsuite',
        'rsuite/locales': 'umd rsuite/locales',
        react: 'umd react',
        'react-dom': 'umd react-dom',
        'prop-types': 'umd prop-types',
        '@mui/material': 'umd @mui/material',
        '@mui/styled-engine': 'umd @mui/styled-engine',
        '@mui/x-date-pickers':'umd @mui/x-date-pickers',
        'react-bootstrap': 'umd react-bootstrap',
        'antd': 'umd antd',
        'dayjs': 'umd dayjs'
      },
      /@material-ui\/core\/.*/,
      /^@mui/
    ],
    optimization: {
      minimize: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            /*options: {
              cacheDirectory: true,
              envName: `dist-prod`,
            },*/
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader'
          ]
        }
      ]
    },
    plugins,
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    }
  };
};