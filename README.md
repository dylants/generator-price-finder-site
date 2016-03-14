# generator-price-finder-site #

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]

Generates a Site for the price-finder module.  Please see the documentation on
price-finder for more information:
https://github.com/dylants/price-finder

Specifically the section on adding sites:
https://github.com/dylants/price-finder#adding-sites

## Installation ##

Assuming Node is installed, run the following command to install Yeoman and
the generator:

```bash
$ npm install -g yo
$ npm install -g generator-price-finder-site
```

## Generate Site ##

From the root of the price-finder project directory, execute the following command:

```bash
$ yo price-finder-site
```

Answer the questions, and once complete the generator will create the following files:

* `lib/sites/<site-name>.js`
* `test/unit/sites/<site-name>-test.js`
* `test/e2e/<site-name>-uris-test.js`

The attempt here is to generate not only the files, but most of the content
necessary to use the site within `price-finder`. But know that your job is not
complete! Please look through the files created and add selectors, update
any incorrect information, and add test data. Running the unit and end to end
tests should answer any questions on if the code is working correctly.

## Etc ##

- [Contributors](https://github.com/dylants/generator-price-finder-site/graphs/contributors)
- [![License][license-image]][license-url]
- [![Dependency Status][david-image]][david-url]
- [![Node Version][node-image]][node-url]

[npm-image]: https://img.shields.io/npm/v/generator-price-finder-site.svg
[npm-url]: https://npmjs.org/package/generator-price-finder-site
[downloads-image]: https://img.shields.io/npm/dm/generator-price-finder-site.svg
[downloads-url]: https://npmjs.org/package/generator-price-finder-site
[travis-image]: https://img.shields.io/travis/dylants/generator-price-finder-site/master.svg
[travis-url]: https://travis-ci.org/dylants/generator-price-finder-site
[license-image]: https://img.shields.io/github/license/dylants/generator-price-finder-site.svg
[license-url]: LICENSE
[david-image]: https://img.shields.io/david/dylants/generator-price-finder-site.svg
[david-url]: https://david-dm.org/dylants/generator-price-finder-site
[node-image]: https://img.shields.io/node/v/generator-price-finder-site.svg
[node-url]: https://npmjs.org/package/generator-price-finder-site
