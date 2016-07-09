// Karma config file:
// https://karma-runner.github.io/1.0/config/configuration-file.html
// Reference: http://www.roblayton.com/2015/03/a-karma-mocha-gulp-and-browserify.html

module.exports = (config) => {
  config.set({

    // The root path location that will be used to resolve all relative paths
    // defined in files and exclude
    basepath: '',

    browsers: ['Chrome', 'Firefox'],

    frameworks: ['browserify', 'mocha'],

    // list of files / patterns to load in the browser
    files: [
      'tests/**/*test.js',
    ],

    browserify: {
      debug: true,
    },

    reporters: ['nyan', 'unicorn'],

    colors: true,

    browserNoActivityTimeout: 10000,

    // web server port
    port: 9876,

  });
};
