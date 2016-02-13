'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-generator').test;

describe('generator-price-finder-site:app', () => {
  before((done) => {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({ siteName: 'foo' })
      .withOptions({ isJSON: true })
      .withPrompts({ siteURI: 'foo.com' })
      .on('end', done);
  });

  it('creates files', () => {
    assert.file([
      'lib/sites/foo.js',
      'test/unit/sites/foo-test.js',
      'test/e2e/foo-uris-test.js',
    ]);
  });
});
