/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const __DEV__ = process.env.NODE_ENV === 'development';
const filename = __DEV__ ? '[name].js' : '[name].min.js';

const plugins = [
  new LodashModuleReplacementPlugin(),
  new webpack.SourceMapDevToolPlugin({
    filename: `${filename}.map`
  })
];

if (process.env.ANALYZE === 'true') {
  plugins.push(new BundleAnalyzerPlugin());
}


function externalMaterialUI (_, module, callback) {
  var isMaterialUIComponent = /^@mui\/([^/]+)$/;
  var match = isMaterialUIComponent.exec(module);
  if (match !== null) {
      var component = match[1];
      return callback(null, `window["material-ui"].${component}`);
  }
  callback();
}

module.exports = module.exports = (env = {}) => {
  let library = 'lets-form';
  let entryPoint = path.join(__dirname, 'index.js');
  let outputFile = 'lets-form.min.js';
  let entryPointName = 'lets-form';
  let outputPath = 'dist';
  let globalObject = undefined;

  if (env.framework === 'antd') {
    console.log('Building for Ant Design framework');
    library = 'lets-form-antd';
    entryPoint = path.join(__dirname, 'react-antd/index.js');
    outputFile = 'antd.js';
    entryPointName = 'lets-form-antd';
    outputPath = null;
    globalObject = 'this';
  } else if (env.framework === 'rsuite5') {
    console.log('Building for RSuite5 framework');
    library = 'lets-form-rsuite5';
    entryPoint = path.join(__dirname, 'react-rsuite5/index.js');
    outputFile = 'rsuite5.js';
    entryPointName = 'lets-form-rsuite5';
    outputPath = null;
    globalObject = 'this';
  } else if (env.framework === 'bootstrap') {
    console.log('Building for Bootstrap framework');
    library = 'lets-form-bootstrap';
    entryPoint = path.join(__dirname, 'react-bootstrap/index.js');
    outputFile = 'bootstrap.js';
    entryPointName = 'lets-form-bootstrap';
    outputPath = null;
    globalObject = 'this';
  } else if (env.framework === 'react') {
    console.log('Building for React framework');
    library = 'lets-form-react';
    entryPoint = path.join(__dirname, 'react/index.js');
    outputFile = 'react.js';
    entryPointName = 'lets-form-react';
    outputPath = null;
    globalObject = 'this';
  } else if (env.framework === 'material-ui') {
    console.log('Building for Material UI framework');
    library = 'lets-form-material-ui';
    entryPoint = path.join(__dirname, 'react-material-ui/index.js');
    outputFile = 'material-ui.js';
    entryPointName = 'lets-form-material-ui';
    outputPath = null;
    globalObject = 'this';
  } else if (env.framework === 'helpers') {
    console.log('Building for helpers');
    library = 'lets-form/utils';
    entryPoint = path.join(__dirname, 'helpers/index-export.js');
    outputFile = 'utils.js';
    entryPointName = 'lets-form/utils';
    outputPath = null;
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
      path: outputPath ? path.join(__dirname, outputPath) : __dirname,
      library: library,
      filename: outputFile,
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
      minimize: false
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