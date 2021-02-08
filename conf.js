exports.config = {

  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: [
      './protractor_website.js',
      './env.js'
    ],
    format: 'json:HTML-REPORT/results.json',
  },

  specs: [
    './Protractor_Website.feature'
  ],

  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options: {
      // read the options part for more options
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true
    }
  }],

  onPrepare: function () {
    browser.driver.manage().window().maximize();
  }

}