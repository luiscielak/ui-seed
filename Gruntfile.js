module.exports = function(grunt) {

  // Project config
  grunt.initConfig({
    jekyll: {
      serve: {
        options: {
          serve: true,
          watch: true
        }
      }
    },
    less: {
      development: {
        options: {
          paths: ['./less'],
          yuicompress: true
        },
        files: {
          'css/main.css': 'less/main.less'
        }
      }
    },
    watch: {
      less: {
        files: ['less/**/*.less'],
        tasks: ['less','reload']
      }
    },
    reload: {
      port: 5000,
      proxy : {
        host: 'localhost',
      }
    },
    concurrent: {
      all: {
        tasks: ['jekyll:serve', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-reload');

  // Default tasks
  grunt.registerTask('default', ['concurrent:all']);
  // grunt.registerTask('default', ['less','watch']);
};