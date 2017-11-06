module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ["models/registration.model.js"],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        jsbeautifier: {
            files: ["models/registration.model.js"],
            options: {
                js: {
                    preserve_newlines: false,
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-jsbeautifier");
    grunt.registerTask('default', ['jshint']);

};
