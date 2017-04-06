/**
 * Trigger mobile app builds
 * Targets:
 *  - grunt compressClient:compress the client files
 */

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                screwIE8: true
            },
            js: {
                files: [{
                    expand: true,
                    src: [
                        'jquery.vToggle.js'
                    ],
                    dest: './dist',
                    extDot: 'last',
                    ext: '.min.js'
                }]
            }
        },

        // compress the CSS files
        cssmin: {
            css: {
                files: [{
                    expand: true,
                    src: ['jquery.vToggle.css'],
                    dest: './dist',
                    ext: '.min.css',
                    extDot: 'last'
                }]
            }
        },


        // Runs JS hint on the specified files.
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            all: [
                '*.js'
            ]
        }
    });


    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');



    // Register the default tasks
    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);

};
