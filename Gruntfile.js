module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['app/*.js']
    },
    watch: {
      scripts: {
        files: ['app/*.js'],
        tasks: ['eslint'],
        options: {
          spawn: false,
        },
      },
    },
    bower_concat: {
      all: {
        dest: {
          'js': 'build/_bower.js',
          'css': 'build/_bower.css'
        },
        exclude: [
          'jquery'
        ],
        dependencies: {
          'underscore': 'jquery',
          'backbone': 'underscore'
        },
        bowerOptions: {
          relative: false
        }
      }
    },
    wiredep: {
      target: {
        src: 'index.html' // point to your HTML file.
      }
    }
  });


  grunt.registerTask('default', ['watch', 'bower_concat']);
  grunt.registerTask('build', ['bower_concat']);
  // grunt.registerTask('wiredep', ['wiredep']);


};
