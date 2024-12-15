const testingFramework = process.env.TESTING_FRAMEWORK || 'playwright';

if (testingFramework === 'playwright') {
  module.exports = require('./playwright.config');
} else if (testingFramework === 'cucumber') {
  module.exports = require('./cucumber.config');
} else {
  throw new Error(`Unknown testing framework: ${testingFramework}`);
}
