module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@assets': './src/assets',
          '@provider': './src/provider',
          '@features': './src/features',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
