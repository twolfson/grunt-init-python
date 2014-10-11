// Load in depdendencies
var assert = require('assert'),
    fs = require('fs'),
    grunt = require('grunt'),
    suppose = require('suppose'),
    rimraf = require('rimraf'),
    mkdirp = require('mkdirp'),
    findit = require('findit');

describe('An UNLICENSE init', function () {
  before(function (done) {
    // Relocate to the test directory
    var actualDir = __dirname + '/actual_files/unlicense';
    rimraf.sync(actualDir);
    mkdirp.sync(actualDir);
    process.chdir(actualDir);

    // Save test dirs for later
    this.actualDir = actualDir;
    this.expectedDir = __dirname + '/expected_files/unlicense';

    // Run the grunt-init script inside of the test directory
    // TODO: Consider how to convert this to a flat file
    // TODO: Notify user about updating classifiers and activating Travis CI
    suppose('grunt-init', ['python'])
      .debug(process.stdout)
      .on(/Project name/).respond('test-unlicense\n')
      .on(/Description/).respond('Unlicense test project\n')
      .on(/Version/).respond('9.0.0\n')
      .on(/Project homepage/).respond('http://abc\n')
      .on(/Project issues tracker/).respond('\n')
      .on(/Download url/).respond('\n')
      .on(/Licenses/).respond('UNLICENSE\n')
      .on(/Author name/).respond('Todd Wolfson\n')
      .on(/Author email/).respond('todd@twolfson.com\n')
      .on(/Author url/).respond('http://twolfson.com/\n')
      .on(/Travis CI username/).respond('twolfson\n')
      .on(/Gratipay username/).respond('twolfson\n')
      // TODO: https://pypi.python.org/pypi?%3Aaction=list_classifiers
      .on(/What keywords/).respond('a, b, c\n')
      .on(/any changes/).respond('n\n')
      ['error'](done)
      .end(function (code) {
        assert.strictEqual(code, 0, 'Exited with non-zero code (' + code + ')');
        done();
      });
  });

  it('actual directory matches expected directory', function (done) {
    // Walk the actual directory
    var finder = findit(this.actualDir);
    finder.on('file', function (filepath, stats) {
      // Load in the files
      var actualFile = fs.readFileSync(filepath, 'utf8'),
          expectedFilepath = filepath.replace('/actual_files/', '/expected_files/'),
          expectedFile = fs.readFileSync(expectedFilepath, 'utf8');

      // If the file is README.rst, template out expectedFile
      if (filepath.match(/\/README.rst$/)) {
        expectedFile = grunt.template.process(expectedFile, {grunt: grunt});
      }

      // Assert their content is equal
      assert.strictEqual(actualFile, expectedFile, 'Content of "' + filepath + '" did not match as expected');
    });

    // When we are done, callback
    finder.on('end', done);
  });

  it('expected directory does not have more files than actual directory', function (done) {
    var finder = findit(this.expectedDir);
    finder.on('file', function (filepath, stats) {
      // Get the stats of the actual file (error will throw if non-existant)
      var actualFilepath = filepath.replace('/expected_files/', '/actual_files/'),
          actualStats = fs.statSync(actualFilepath);
    });
    finder.on('end', done);
  });
});
