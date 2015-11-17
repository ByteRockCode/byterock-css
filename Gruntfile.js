module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		sass: {

			dist: {

				files: {
					'dist/byterock.css' : 'scss/byterock.scss',
				},
				options: {
					style: 'compressed',
				},

			}

		},

		watch: {

			sass: {
				files: [ 'scss/*.scss' ],
				tasks: [ 'sass' ]
			},

		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', [ 'watch', 'sass']);

};
