require('dotenv').config();

const cucumberConfig = {
  default: {
    paths: ['./tests/cucumber/features/**/*.feature'], // Cucumber feature files
    requireModule: ['ts-node/register'], // Use ts-node for TypeScript
    require: ['./tests/cucumber/steps/**/*.ts'], // Step definitions directory
    format: ['progress', 'json:reports/cucumber-report.json'], // Output JSON report
    publishQuiet: true, // Suppress publishing messages
    parallel: 2, // Run tests in parallel
  },
};

module.exports = cucumberConfig;
