module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-react');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      react: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/react/',
            src: ['react.js','JSXTransformer.js'],
            dest: 'lib/hn_history/public/js/'
          }
        ]
      },
      underscore: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/underscore/',
            src: ['underscore.js'],
            dest: 'lib/hn_history/public/js/'
          }
        ]
      },
      reqwest: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/reqwest/',
            src: ['reqwest.js'],
            dest: 'lib/hn_history/public/js/'
          }
        ]
      },
      purecss: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/pure/',
            src: ['pure.css'],
            dest: 'lib/hn_history/public/css/'
          }
        ]
      },
      d3: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/d3/',
            src: ['d3.js'],
            dest: 'lib/hn_history/public/js/'
          }
        ]
      },
      aviator: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/aviator/',
            src: ['aviator.js'],
            dest: 'lib/hn_history/public/js/'
          }
        ]
      },
      assets: {
        files: [
          {
            expand: true,
            cwd: 'assets/js/',
            src: ['**/*.js'],
            dest: 'tmp/js'
          }
        ]
      }
    },
    react: {
      app: {
        files: [
          {
            expand: true,
            cwd: 'assets/jsx/',
            src: ['**/*.jsx'],
            dest: 'tmp/js',
            ext: '.jsx'
          }
        ]
      }
    },
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      css: {
        src: ['assets/less/**/*.less'],
        dest: 'tmp/less/<%= pkg.name %>.less'
      },
      js: {
        src: ['tmp/js/**/*.js', 'tmp/js/**/*.jsx'],
        dest: 'lib/hn_history/public/js/hn_history.js'
      }
    },
    watch: {
      all: {
        files: ['assets/js/**/*.js', 'assets/jsx/**/*.jsx', '<%= concat.css.src %>'],
        tasks: ['copy:assets', 'react:app', 'concat:css', 'concat:js', 'recess:dist', 'recess:min', 'timestamp']
      }
    },
    recess: {
      dist: {
        options: {
          compile: true
        },
        files: {
          'lib/hn_history/public/css/<%= pkg.name %>.css': 'tmp/less/*.less'
        }
      },
      min: {
        options: {
          compress: true
        },
        files: {
          'lib/hn_history/public/css/<%= pkg.name %>.min.css': 'lib/hn_history/public/css/<%= pkg.name %>.css'
        }
      }
    }
  });

  grunt.registerTask('default', ['copy', 'react', 'concat', 'recess']);

  grunt.registerTask('timestamp', function() {
    grunt.log.subhead(Date());
  });
};

