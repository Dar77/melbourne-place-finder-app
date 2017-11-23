//single page application project Gruntfile.js

module.exports = function(grunt) {

    grunt.initConfig({

    concat: { // concatenate css and js files
      css: {
          src: ['src/css/bootstrap.min.css', 'src/css/style.css'], // combine css files
          dest: 'src/css/main.css' // into main.css
      },

      js: {
          src: ['src/js/knockout.js', 'src/js/app.js'], // combine js files
          dest: 'src/js/main.js' // into main.js
      }
    },

    uglify: { // minify js
      options: {
        mangle: false
      },
      target: {
        files: {
          'dist/js/main-min.js': ['src/js/main.js'] // output path first, then source input path
        }
      },
    },

    cssmin: { // minify css
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: 'main.css', // all css files
          dest: 'dist/css', // destination directory
          ext: '-min.css' // add '-min' extension
        }]
      }
    },

    /* Clear out whole dist directory if it exists */
    clean: {
      dev: {
        src: ['dist/*'],
      },
    },

    // Copy all of the files and folders listed to dist /*
    copy: {
      main: {
        files: [
          {expand: true, src: 'README.md', dest: 'dist/'} // copy README.md into dist directory
        ],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  // 'clean' must run first to clear out 'dist' (distribution) directory before placing in new files
  grunt.registerTask('default', ['clean', 'concat', 'uglify:target', 'cssmin:target', 'copy']);
};


// Instructions =========================================================================================================

// below: make sure grunt is installed
// npm grunt -version

// below: if it's not, install it with:
// npm install grunt --save-dev

//1. Existing Project? (has Gruntfile.js and package.json) run in project directory:
//npm install
//skip other steps

//2. New Project? (takes you through process of setting up package.json) run in project directory:
//npm init

//3. Run through 'package.json' set up on command line

//4. Install modules below via node command line.

  // below: concat
  //npm install grunt-contrib-concat --save-dev

  // below: clean, copy
  //npm install grunt-contrib-clean --save-dev
  //npm install grunt-contrib-copy --save-dev

  //below: uglify
  //npm install grunt-contrib-uglify --save-dev

  //below: cssmin
  //npm install grunt-contrib-cssmin --save-dev

  //4. Make sure 'Gruntfile.js' is added to project root.