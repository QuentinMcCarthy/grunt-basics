module.exports = function(grunt){
	grunt.initConfig({
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
				files: ["css/master.css"],
				tasks: ["cssmin"]
			},
		}
	});

	// grunt.loadNpmTasks();
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	// grunt.registerTask();
	grunt.registerTask("overwatch", ["watch"]);
};
