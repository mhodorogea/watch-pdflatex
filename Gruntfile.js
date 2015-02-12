module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Before generating any new files, remove any previously-created files.
    clean: {
        tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    latex: {
      pdf: {
        src: [ 'src/*.tex' ],
        options: {
          outputDirectory: 'tmp'
        }
      },
      /*bib: {
        src: [ 'tmp/rapport.aux' ],
        options: {
          engine: 'bibtex',
          interaction: false
        }
      }*/
    },  

    watch: {
	scripts: {
	    files: ['src/**/*.tex'],
	    tasks: ['latex'],
	    options: {
		spawn: false,
	    },
	},
    },

    nodeunit: {
	all: ['test/**/*_test.js']
    }
  });

  // Load the plugin that provides the "clean" task.
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Load the plugin that provides the "grunt-latex" task.
  grunt.loadNpmTasks('grunt-latex');
  
  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
