'use strict';

const yeoman = require('yeoman-generator');
const yosay = require('yosay');
const _ = require('lodash');
const path = require('path');

module.exports = yeoman.generators.Base.extend({
  prompting() {
    const done = this.async();

    this.log(yosay(
      'Welcome to the price-finder site generator!'
    ));

    const prompts = [
      {
        type: 'input',
        name: 'siteName',
        message: 'Please enter the name of the site you want to create:',
        default: 'Some Store',
      },
      {
        type: 'confirm',
        name: 'isJSON',
        message: 'Is the page data for the site a JSON API?',
        default: false,
      },
      {
        type: 'input',
        name: 'siteURI',
        message: 'Enter in the base URI for every product found on this site:',
        default: 'somestore.com',
      },
    ];

    this.prompt(prompts, (props) => {
      this.props = props;

      // Some Store -> SomeStore
      this.upperCaseSite = _.chain(props.siteName)
        .deburr()
        .camelCase()
        .upperFirst()
        .value();

      // Some Store -> some-store
      this.kebabCaseSite = _.chain(props.siteName)
        .deburr()
        .kebabCase()
        .value();

      this.isJSON = props.isJSON;

      this.siteURI = props.siteURI;

      done();
    });
  },

  writing() {
    const options = {
      upperCaseSite: this.upperCaseSite,
      kebabCaseSite: this.kebabCaseSite,
      isJSON: this.isJSON,
      siteURI: this.siteURI,
    };

    this.fs.copyTpl(
      this.templatePath('site.js'),
      this.destinationPath(path.join('lib/sites',
        `${this.kebabCaseSite}.js`)),
      options
    );

    this.fs.copyTpl(
      this.templatePath('site-test.js'),
      this.destinationPath(path.join('test/unit/sites',
        `${this.kebabCaseSite}-test.js`)),
      options
    );

    this.fs.copyTpl(
      this.templatePath('site-uris-test.js'),
      this.destinationPath(path.join('test/e2e',
        `${this.kebabCaseSite}-uris-test.js`)),
      options
    );
  },
});
