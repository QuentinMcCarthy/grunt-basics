module.exports = function(grunt){
	grunt.initConfig({
		csslint: {
			strict: {
				options: {
					import: 2
				},
				src: ["css/*.css", "!*.min.css"]
			},
			lax: {
				options: {
					import: false
				},
				src: ["css/*.css", "!*.min.css"]
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['*.css', '!*.min.css'],
					dest: 'css/',
					ext: '.min.css'
				}]
			}
		},
		uglify: {
			my_target: {
				files: {
					"js/script.min.js": ["js/script.js"]
				}
			}
		},
		watch: {
			scripts: {
				files: ["css/master.css", "js/script.js"],
				tasks: ["csslint", "cssmin", "uglify"]
			},
		}
	});

	// grunt.loadNpmTasks();
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-csslint");

	// grunt.registerTask();
};
