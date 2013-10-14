/*
 * grunt-init-node
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

// Basic template description.
exports.description = 'Create a Node.js module, including mocha unit tests.';

// Template-specific notes to be displayed after question prompts.
exports.after = [
  'If you used Travis CI, be sure to activate it via https://travis-ci.org/profile',
  'Be sure to update your setup.py classifiers via https://pypi.python.org/pypi?%3Aaction=list_classifiers'
].join('\n');

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.prompts.download_url = {
    name: 'download_url',
    message: 'Download url',
    'default': 'none'
  };

  init.prompts.travis_username = {
    name: 'travis_username',
    message: 'Travis CI username (adds Travis CI badge)'
  };

  init.prompts.gittip_username = {
    name: 'gittip_username',
    message: 'Gittip username (adds Gittip badge)'
  };

  init.process({type: 'node'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('description'),
    init.prompt('version'),
    init.prompt('homepage'),
    init.prompt('bugs', function (defaultt, props, cb) {
      cb(null, defaultt !== 'none' ? defaultt : props.homepage + '/issues');
    }),
    init.prompt('download_url', function (defaultt, props, cb) {
      cb(null, defaultt !== 'none' ? defaultt : props.homepage + '/archive/master.zip');
    }),
    init.prompt('licenses', 'Unlicense'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
    init.prompt('travis_username'),
    init.prompt('gittip_username'),
    {
      name: 'keywords',
      message: 'What keywords relate to this plugin (comma separated)?'
    }
  ], function(err, props) {
    // Break up the keywords by commas
    var keywords = props.keywords;
    keywords = keywords ? keywords.split(',') : [];

    // Trim each keyword and save
    keywords = keywords.map(function (str) {
      return str.trim();
    });
    props.keywords = keywords;

    // Escape the name to Python package standards
    props.package_name = props.name.replace(/[ \-]/g, '_');

    // Create an underlining function

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // If the licenses contain an Unlicense, pluck it
    props.unlicense = props.licenses.filter(function (license) {
      return license.match(/^Unlicense$/i);
    })[0];

    // If an unlicense was found, add it to output
    if (props.unlicense) {
      files['UNLICENSE'] = __dirname + '/licenses/UNLICENSE';
      props.licenses = [];
    } else {
      // Add properly-named license files.
      init.addLicenseFiles(files, props.licenses);
    }

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });

};
