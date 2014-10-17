module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', [
    'compass',
    'jshint',
    'browserify',
    'uglify'
  ]);

  grunt.registerTask('test', [
    'jshint'
  ]);

  var vendors = ['jquery', 'backbone', 'backbone.marionette'];

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      main: {
        src: ['src/lib/app.js'],
        dest: 'src/main.js',
        options: {
          debug: true,
          require: vendors,
          preBundleCB: function (bundle) {
            var stringify = require('stringify');
            bundle.transform(stringify(['.html']));
          }
        }
      }
    },

    uglify: {
      main: {
        options: {
          sourceMap: true,
          sourceMapIncludeSources: true
        },
        src: 'src/main.js',
        dest: 'src/main.min.js'
      }
    },

    jshint: {
      files: [
        'Gruntfile.js',
        'src/lib/**/*.js',
        '!src/**/*.min.js',
      ],
      options: {
        node: true,
        globalstrict: true,
        globals: {
          jQuery: true,
          console: true
        }
      }
    },

    compass: {
      all: {
        options: {
          config: 'src/config.rb',
          sassDir: 'src/sass',
          cssDir: 'src/css'
        }
      }
    },

    watch: {
      scripts: {
        files: ['<%= jshint.files %>'],
        tasks: [
          'jshint',
          'browserify',
          'concat',
          'uglify'
        ]
      },
      styles: {
        files: ['**/*.scss'],
        tasks: ['compass']
      },
      options: {
        livereload: true
      }
    }

  });

};
