(function() {
  // Require modules
  var fs = require('fs'),
      soc = require ('./soc'),
      program = require('commander'),
      usage = '[options] <input filename>';

  program
    .usage(usage)
    .option('-o, --output [filename]', 'filename for output [output.json]', 'output.json')
    .option('-f, --format <n>', 'format output with <n> spaces', parseInt)
    .option('-v, --verbose', 'write output to console')
    .parse(process.argv);

  // Check number of arguments
  if (process.argv.length < 3) {
    console.error('Usage: cmu-soc ' + usage);
    process.exit(1);
  }

  // Assign filename variables
  var input = process.argv[2],
      output = program.output;

  // Reading files
  fs.readFile(input,'utf8', function(err, data){
    if (err) {
      console.error('Could not open file \'%s\'', input);
      process.exit(1);
    }

    // Parse courses into JSON
    var courses = soc.parse(data),
        json = JSON.stringify(courses, null, program.format);

    // Write JSON to console if specified
    if (program.verbose) {
      console.log(json);
    }

    // Write JSON to output file
    fs.writeFile(output, json, function(err) {
      if (err) {
        console.error('Error saving file \'%s\'', output);
        process.exit(1);
      }
      console.log('File \'%s\' saved!', output);
    });
  });
}).call(this)