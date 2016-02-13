# generator-price-finder-site #

[![Build Status](https://travis-ci.org/dylants/generator-price-finder-site.svg)](https://travis-ci.org/dylants/generator-price-finder-site) [![NPM version](https://badge.fury.io/js/generator-price-finder-site.svg)](http://badge.fury.io/js/generator-price-finder-site)

[![NPM](https://nodei.co/npm/generator-price-finder-site.svg?downloads=true)](https://nodei.co/npm/generator-price-finder-site/)

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
