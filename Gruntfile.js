module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // emblem: {
        //   compile: {
        //     files: {
        //      'test.html': 'test.emblem',
        //    },
        //    options: {
        //      root: './',
        //      dependencies: {
        //          jquery: 'vendor/jquery-1.9.1.js',
        //          ember: 'vendor/ember-1.0.0-rc.1.js',
        //          emblem: 'node_modules//emblem.js',
        //          handlebars: 'vendor/handlebars-1.0.0-rc.3.js'
        //      }
        //    }
        //  }
        // }
        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: {
                    'index.html': 'app/views/index.jade'
                }
            }
        },
        compass: {
            compile: {
                options: {
                    sassDir: 'app/stylesheets/',
                    cssDir: 'public/css/'
                }
            }
        },
        uglify: {
            compile: {
                files: {
                    'public/js/backbuffer.js': 'app/scripts/*.js'
                }
            }
        },
        jshint: {
            lint_devjs: ['app/scripts/*.js'],
        }
    });

    // grunt.loadNpmTasks('grunt-emblem');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jade', 'compass', 'uglify', 'jshint']);
}
