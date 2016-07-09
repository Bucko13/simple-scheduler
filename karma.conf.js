// Karma config file:
// https://karma-runner.github.io/1.0/config/configuration-file.html
'use strict'

module.exports = (config) => {
  config.set({

    // The root path location that will be used to resolve all relative paths
    // defined in files and exclude
    basepath: '',

    browsers: ['Chrome'],

    frameworks: ['mocha', 'chai', 'browserify'],

    // list of files / patterns to load in the browser
    files: [
      'tests/**/*test.js',
      // 'public/**/*.js'
    ],

    preprocessors: {
      'tests/**/*.js': ['browserify'],
      // 'public/**/*.js': ['browserify'],
    },

    browserify: {
      debug: true,
      transform: [
          ["babelify", { presets: "es2015" }]
      ]
    },


    reporters: ['unicorn', 'nyan'],

    colors: true,

    browserNoActivityTimeout: 5000,

    // web server port
    port: 9876,

    singleRun: false,
  });
};
