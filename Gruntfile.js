module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-jscs');


  var allJavaScriptFilePaths = ['app/js/**/*.js','models/**/*.js','routes/**/*.js','server.js'];

  grunt.initConfig({
    clean: {
      dev: {
        src: 'build/'
      }
    },
    copy: {
      dev: {
        expand: true,
        cwd: 'app/',  //current working directory
        src: ['*.html', 'css/*.css', 'views/**/*.html', 'img/*.jpg', 'img/*.png', 'fonts/*.eot', 'fonts/*.svg', 'fonts/*.ttf', 'fonts/*.woff', 'templates/**/*.html'],
        dest: 'build/',
        filter: 'isFile'
      }
    },

    browserify: {
      dev: {
        options: {
          transform: ['debowerify'],
          debug: true
        },
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js'
      },
      angulartest: {
        options: {
          transform: ['debowerify'],
          debug: true
        },
        src: ['test/*test.js'],
        dest: 'test/angular-testbundle.js'
      },
      test: {
        options: {
          transform: ['debowerify'],
          debug: true
        },
        src: ['test/mocha/**/*.js'],
        dest: 'test/testbundle.js'
      }

    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    express: {
      options: {
        port: 3000
      },
      dev: {
        options: {
          script: 'server.js'
        }
      }
    },

    watch: {
      files: ['server.js', 'routes/**/*.js', 'app/**/*'],
      tasks: ['build'],

      angulartest: {
        files: ['app/js/**/*.js', 'app/index.html', 'app/views/**/*.html'],
        tasks: ['browserify:angulartest'],
        options: {
          spawn:false
        }
      },
      express: {
        files: ['app/js/**/*.js', 'models/*.*', 'routes/*.*', 'app/index.html', 'app/views/**/*.html', 'app/css/*.css', 'app/views/**/*.html', 'server.js', 'models/*.js'],
        tasks: ['test','build'],
        options: {
          spawn: false
        }
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'app/index.html'
        }
      }
    },
    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'app/css/',
          src: ['*.css'],
          dest: 'dist/css/'
        }]
      }
    }
  });

  grunt.registerTask('build',['clean:dev','browserify:dev', 'copy:dev']);
  grunt.registerTask('test', ['browserify:angulartest','karma:unit']);
  grunt.registerTask('serve', ['express:dev','watch:express']);
  grunt.registerTask('default',['test','build','serve']);
};
