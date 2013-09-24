// Load in depdendencies
var suppose = require('suppose');

describe('An UNLICENSE init', function () {
  before(function (done) {
    suppose('grunt-init', ['node'])
      .debug(process.stdout)
      ['error'](done)
      .end(function (code) {
        console.log(code);
      });
  });
});