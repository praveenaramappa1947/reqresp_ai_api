module.exports = {
  default: {
    paths: [
      'tests/features/**/*.feature'
    ],

    require: [
      'tests/stepDefinitions/**/*.ts',
      'tests/hooks/**/*.ts'
    ],

    requireModule: [
      'ts-node/register'
    ],

    format: [
      'progress',
      'json:reports/cucumber/cucumber-report.json'
    ],

    publishQuiet: true
  }
};
