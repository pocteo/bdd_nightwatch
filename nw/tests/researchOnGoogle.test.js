module.exports = {
  'Search on google': (browser) => {
    browser
      .init()
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', ['nightwatch', browser.Keys.ENTER])
      .assert.containsText('#main', 'Night Watch')
      .end()
  },
  after: (browser) => {
    browser.end()
  }
};
