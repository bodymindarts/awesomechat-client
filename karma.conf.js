// Karma configuration
// Generated on Sat Jun 06 2015 13:11:45 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon'],


    // list of files / patterns to load in the browser
    files: [ 'tests/**/*Test.js' ],

    // list of files to exclude
    exclude: [
    ],


    preprocessors: {
      'tests/**/*.js*': [ 'webpack' ]
    },


    webpack: {
      resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules']
      },
      module: {
        loaders: [
          { test: /\.jsx?$/,
            loaders: ['react-hot', 'babel']
          },
          {
            test: /\.json$/,
            loaders: ['json']
          }
        ]
      },
      node: {
        fs: 'empty',
        child_process: 'empty'
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
