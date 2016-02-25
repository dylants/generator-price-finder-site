'use strict';

const testHelper = require('./test-helper');

const priceFinder = testHelper.priceFinder;
const verifyPrice = testHelper.verifyPrice;
const verifyItemDetails = testHelper.verifyItemDetails;

describe('price-finder for <%= upperCaseSite %> Store URIs', () => {
  describe('testing [ENTER ITEM NAME HERE] item', () => {
    // TODO provide URI and contents for test here!
    const uri = '';

    it('should respond with a price for findItemPrice()', (done) => {
      priceFinder.findItemPrice(uri, (err, price) => {
        expect(err).toBeNull();
        verifyPrice(price);
        done();
      });
    });

    it('should respond with a price, and the right category and name for findItemDetails()', (done) => {
      priceFinder.findItemDetails(uri, (err, itemDetails) => {
        expect(err).toBeNull();
        verifyItemDetails(itemDetails, '', '');
        done();
      });
    });
  });
});
