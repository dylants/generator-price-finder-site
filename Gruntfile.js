'use strict';

module.exports = function exports(grunt) {
  grunt.initConfig({
    eslint: {
      files: [
        '**/*.js',
      ],
      options: {
        quiet: true,
      },
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
        },
        src: ['test/**/*.js'],
      },
    },
  });

  // load all the grunt tasks at once
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('test', ['eslint', 'mochaTest']);
};
