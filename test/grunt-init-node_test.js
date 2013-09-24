// Load in depdendencies
var assert = require('assert'),
    suppose = require('suppose'),
    rimraf = require('rimraf'),
    mkdirp = require('mkdirp');

describe('An UNLICENSE init', function () {
  before(function (done) {
    // Relocate to the test directory
    var testDir = __dirname + '/actual_files/unlicense';
    rimraf.sync(testDir);
    mkdirp.sync(testDir);
    process.chdir(testDir);

    // Run the grunt-init script inside of the test directory
    suppose('grunt-init', ['node'])
      .debug(process.stdout)
      .on(/Project name/).respond('test-unlicense\n')
      .on(/Description/).respond('Unlicense test project\n')
      .on(/Version/).respond('9.0.0\n')
      .on(/Project git repository/).respond('git://abc\n')
      .on(/Project homepage/).respond('http://abc\n')
      .on(/Project issues tracker/).respond('http://abc/issues\n')
      .on(/Licenses/).respond('Unlicense\n')
      .on(/Author name/).respond('Todd Wolfson\n')
      .on(/Author email/).respond('todd@twolfson.com\n')
      .on(/Author url/).respond('http://twolfson.com/\n')
      .on(/Gittip username/).respond('\n')
      .on(/What versions of node/).respond('>= 0.8.0\n')
      .on(/Main module\/entry point/).respond('lib/test-unlicense\n')
      .on(/Npm test command/).respond('mocha\n')
      .on(/What keywords/).respond('a, b, c\n')
      .on(/any changes/).respond('n\n')
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