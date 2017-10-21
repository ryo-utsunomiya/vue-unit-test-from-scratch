const webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      'test/**/*.spec.js'
    ],
    preprocessors: {
      'test/**/*.spec.js': ['webpack'],
    },
    webpack: webpackConfig,
    reporters: ['progress'],
    browsers: ['Chrome'],
  });
};
