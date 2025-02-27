// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.transformer.babelTransformerPath = require.resolve('react-native-css-transformer');
defaultConfig.resolver.sourceExts = [
  ...defaultConfig.resolver.sourceExts,
  'css'
];

module.exports = defaultConfig;
