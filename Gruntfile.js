module.exports = function(grunt) {


  // Project configuration

  grunt.initConfig({


    pkg: grunt.file.readJSON('package.json'),


  	// Compass

  	compass: {

  		compile: {

  		  options: {
      		sassDir: 'assets/sass',
      		cssDir:  'assets/styles',
      		config:  'config/config.rb'
        }

  		}

  	},


  	// Uglify

  	uglify: {

  		build: {
    		src:  ['scripts/libs/*.js', 'scripts/global.js'],
    		dest: 'scripts/global.min.js'
  		}

  	},


  	// Connect

  	connect: {

  		server: {

  			options: {
  				port: 9000,
  				open: true,
  				livereload: 35729,
  				hostname: 'localhost'
  			}

  		}

  	},


  	// Watch

  	watch: {

  		options: {
  			livereload: true
  		},

  		compass: {

  			files: ['assets/sass/**/*.scss'],
  			tasks: ['compass'],

  			options: {
  				livereload: true,
  				spawn: false
  			}

  		},

  		html: {

  			files: ['*.html'],
  			options: {
  				livereload: true
  			}

  		}


  	}


  });


  // Load plugins that provide the tasks

  [
    'grunt-contrib-compass',
    'grunt-contrib-uglify',
    'grunt-contrib-connect',
    'grunt-contrib-watch'
  ].forEach(function (task) {
    grunt.loadNpmTasks(task);
  });


  // Register task(s)

  grunt.registerTask('default', [
    'compass',
    'uglify',
    'connect',
    'watch'
  ]);


};