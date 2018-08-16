module.exports = function(grunt){
	grunt.initConfig({
		sass: {
			dist: {
				files: {
					"css/master.css": "scss/master.scss"
				}
			}
		},
		csslint: {
			strict: {
				options: {
					import: 2
				},
				src: ["css/master.css"]
			},
			lax: {
				options: {
					import: false
				},
				src: ["css/master.css"]
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
		jshint: {
			all: ["js/script.js"]
		},
		uglify: {
			my_target: {
				files: {
					"js/script.min.js": ["js/script.js"]
				}
			}
		},
		watch: {
			sass: {
				files: ["scss/master.scss"],
				tasks: ["sass"]
			},
			css: {
				files: ["css/master.css"],
				tasks: ["csslint", "cssmin"]
			},
			js: {
				files: ["js/script.js"],
				tasks: ["jshint", "uglify"]
			}
		}
	});

	// grunt.loadNpmTasks();
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-csslint");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-sass");

	// grunt.registerTask();
};
