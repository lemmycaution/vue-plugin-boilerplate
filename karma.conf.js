// Karma configuration
// Generated on Tue Sep 08 2015 19:27:24 GMT+0900 (JST)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'test/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['webpack', 'sourcemap'],
      'test/**/*.js': ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel'
        }],
        postLoaders: [{
          test: /\.json$/,
          loader: 'json'
        }, {
          test: /\.js$/,
          loader: 'webpack-espower-loader'
        }, {
          test: /\.js$/,
          exclude: /test|node_modules/,
          loader: 'istanbul-instrumenter'
        }]
      },
      espower: {
        destructive: true,
        //patterns: [
        //  'assert(value, [message])',
        //  'assert.ok(value, [message])',
        //  'assert.equal(actual, expected, [message])',
        //  'assert.notEqual(actual, expected, [message])',
        //  'assert.strictEqual(actual, expected, [message])',
        //  'assert.notStrictEqual(actual, expected, [message])',
        //  'assert.deepEqual(actual, expected, [message])',
        //  'assert.notDeepEqual(actual, expected, [message])'
        //]
      }
    },

    webpackMiddleware: {
      noInfo: true
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],


    coverageReporter: {
      reporters: [{
        type: 'html', dir: 'coverage/'
      }, {
        type: 'lcov', dir: 'coverage/'
      }]
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
}
