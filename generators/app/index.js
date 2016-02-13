'use strict';

const yeoman = require('yeoman-generator');
const yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting() {
    const done = this.async();

    this.log(yosay(
      'Welcome to the price-finder site generator!'
    ));

    const prompts = [
      {
        type: 'confirm',
        name: 'someOption',
        message: 'Would you like to enable this option?',
        default: true,
      },
    ];

    this.prompt(prompts, (props) => {
      this.props = props;

      done();
    });
  },

  writing() {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  },
});
