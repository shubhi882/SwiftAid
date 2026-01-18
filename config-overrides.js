const {
  override,
  addBabelPlugin,
  addWebpackPlugin,
} = require('customize-cra');
const CompressionPlugin = require('compression-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

/**
 * Helper to configure babel-plugin-import for MUI packages
 */
const muiImportPlugin = (libraryName, name) =>
  addBabelPlugin([
    'babel-plugin-import',
    {
      libraryName,
      libraryDirectory: '',
      camel2DashComponentName: false,
    },
    name,
  ]);

module.exports = override(
  // Optimize MUI imports (tree-shaking)
  muiImportPlugin('@mui/material', 'mui-core'),
  muiImportPlugin('@mui/icons-material', 'mui-icons'),

  // Enable gzip compression only for production builds
  ...(isProd
    ? [
        addWebpackPlugin(
          new CompressionPlugin({
            filename: '[path][base].gz',
            algorithm: 'gzip',
            test: /\.(js|css|html|svg)$/,
            threshold: 10 * 1024, // 10KB
            minRatio: 0.8,
          })
        ),
      ]
    : [])
);
