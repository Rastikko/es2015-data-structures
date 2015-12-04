module.exports = function (grunt) {
   grunt.initConfig({
     babel: {
       options: {
           presets: ['es2015']
       },
       dist: {
           files: {
               'dist/quick-sort.js': 'src/quick-sort.js',
               'dist/insertion-sort.js': 'src/insertion-sort.js',
               'dist/answers/insertion-sort-part-1.js': 'src/answers/insertion-sort-part-1.js',
               'dist/answers/quicksort4.js': 'src/answers/quicksort4.js'
           }
       }
   },
    watch: {
       scripts: {
          files: ["./src/*.js"],
          tasks: ["babel"]
       }
    }
   });

   grunt.loadNpmTasks("grunt-babel");
   grunt.loadNpmTasks("grunt-contrib-watch");

   grunt.registerTask("default", ["watch"]);
   grunt.registerTask("build", ["babel"]);
};
