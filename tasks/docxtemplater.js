/*
 * grunt-docxtemplater
 * https://github.com/linath/grunt-docxtemplater
 *
 * Copyright (c) 2015 linath
 * Licensed under the MIT license.
 */

'use strict';

var docxtemplater = require('docxtemplater');
var util = require('util');


module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('docxtemplater', 'Use docxtemplater in a grunt task.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      data: {}
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });

      src.forEach(function(file){

        var content = grunt.file.read(file, {encoding: 'binary'});

        var doc = new docxtemplater(content);
        doc.setData(options.data);
        doc.render();

        var buf = doc.getZip().generate({type: 'nodebuffer'});
        grunt.file.write(f.dest, buf, {encoding: 'binary'});

        grunt.log.writeln('File "' + f.dest + '" created.');

      });

    });

  });

};
