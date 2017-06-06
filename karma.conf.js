// Karma configuration
// Generated on Thu Jun 01 2017 17:54:37 GMT+0900 (대한민국 표준시)

module.exports = function(config) {
    config.set({
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
        concurrency: Infinity,

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai', 'sinon'],

        // list of files / patterns to load in the browser
        files: [
            "tests/*.spec.js",
            "tests/**/*.spec.js"
        ],
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            "tests/*.spec.js" : ['webpack', 'sourcemap'],
            "tests/**/*.spec.js" : ['webpack', 'sourcemap']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        webpack: require("./webpack.config.js"),
        webpackMiddleware: {
            noInfo: true,
            stats: 'errors-only'
        },

        plugins: [
            'karma-chai',
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-sinon',
            'karma-sourcemap-loader',
            'karma-webpack'
        ]
    });
};
