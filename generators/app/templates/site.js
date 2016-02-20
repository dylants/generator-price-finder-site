'use strict';

const siteUtils = require('../site-utils');
const logger = require('../logger')();

class <%= upperCaseSite %>Site {
  constructor(uri) {
    if (!<%= upperCaseSite %>Site.isSite(uri)) {
      throw new Error('invalid uri for <%= upperCaseSite %>: %s', uri);
    }

    this._uri = uri;
  }

  getURIForPageData() {
    return this._uri;
  }

  isJSON() {
    return <%= isJSON %>;
  }

  findPriceOnPage($) {
    // the various ways we can find the price
    const selectors = [
      '',
    ];

    // find the price on the page
    const priceString = siteUtils.findContentOnPage($, selectors);

    // were we successful?
    if (!priceString) {
      logger.error('price not found on <%= upperCaseSite %> page, uri: %s', this._uri);
      return -1;
    }

    // process the price string
    const price = siteUtils.processPrice(priceString);

    return price;
  }

  findCategoryOnPage($) {
    // TODO find the category
    const category = siteUtils.categories.OTHER;

    logger.log('category: %s', category);

    return category;
  }

  findNameOnPage($, category) {
    // the various ways we can find the name
    const selectors = [
      '',
    ];

    // use the selectors to find the name on the page
    const name = siteUtils.findContentOnPage($, selectors);

    // were we successful?
    if (!name) {
      logger.error('name not found on <%= upperCaseSite %> page, uri: %s', this._uri);
      return null;
    }

    logger.log('name: %s', name);

    return name;
  }

  static isSite(uri) {
    if (uri.indexOf('<%= siteURI %>') > -1) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = <%= upperCaseSite %>Site;
