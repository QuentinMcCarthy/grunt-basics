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
		watch: {
			scripts: {
				files: ["css/master.css"],
				tasks: ["cssmin"]
			},
		},
	});

	// grunt.loadNpmTasks();
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks('grunt-contrib-watch');

	// grunt.registerTask();
	grunt.registerTask("minifycss", ["cssmin"]);
	grunt.registerTask("overwatch", ["watch"]);
};
