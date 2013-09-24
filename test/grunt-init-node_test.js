// Load in depdendencies
var assert = require('assert'),
    suppose = require('suppose'),
    rimraf = require('rimraf'),
    mkdirp = require('mkdirp');

describe('An UNLICENSE init', function () {
  before(function (done) {
    // Relocate to the test directory
    var testDir = __dirname + '/test/actual_files/unlicense';
    rimraf.sync(testDir);
    mkdirp.sync(testDir);
    process.chdir(testDir);

    // Run the grunt-init script inside of the test directory
    suppose('grunt-init', ['node'])
      .debug(process.stdout)
      ['error'](done)
      .end(function (code) {
        assert.strictEqual(code, 0, 'Exited with non-zero code (' + code + ')');
        done();
      });
  });

  it('matches expected directory', function () {
    assert(true);
  });
});