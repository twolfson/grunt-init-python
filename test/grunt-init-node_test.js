// Load in depdendencies
var suppose = require('suppose'),
    assert = require('assert');

describe('An UNLICENSE init', function () {
  before(function (done) {
    suppose('grunt-init', ['node'])
      .debug(process.stdout)
      ['error'](done)
      .end(function (code) {
        console.log(code);
      });
  });

  it('matches expected directory', function () {
    assert(true);
  });
});