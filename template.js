/*
 * grunt-init-node
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

var fs = require('fs'),
    gruntInitGit = require('grunt-init/tasks/lib/git');

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
  var git = gruntInitGit.init(grunt);

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
    init.prompt('homepage', function (defaultt, props, cb) {
      if (defaultt && defaultt !== 'none') {
        return cb(null, defaultt);
      }

      // Grab the default git url and work from that
      // TODO: Figure out how to lookup default repo
      init.prompts.repository['default'](null, props, function (err, repository) {
        cb(null, git.githubUrl(repository) || 'none');
      });
    }),
    init.prompt('bugs', function (defaultt, props, cb) {
      cb(null, (defaultt && defaultt !== 'none') ? defaultt : props.homepage + '/issues');
    }),
    init.prompt('download_url', function (defaultt, props, cb) {
      cb(null, (defaultt && defaultt !== 'none') ? defaultt : props.homepage + '/archive/master.zip');
    }),
    init.prompt('licenses', 'UNLICENSE'),
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

    // Trim each keyword
    keywords = keywords.map(function (str) {
      return str.trim();
    });

    // Combine keywords for setup.py and save
    keywords = keywords.map(function (keyword) {
      return JSON.stringify(keyword).replace(/"/g, "'");
    }).join(',\n        ');
    props.keywords = keywords;

    // Escape the name to Python package standards
    props.package_name = props.name.replace(/[ \-]/g, '_');

    // Create an underlining function
    props.underline = function (sentence, underline) {
      return sentence.replace(/./g, underline);
    };

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // If the licenses contain an Unlicense, pluck it
    props.unlicense = props.licenses.filter(function (license) {
      return license.match(/^UNLICENSE$/i);
    })[0];

    // If an unlicense was found, add it to output
    if (props.unlicense) {
      files['UNLICENSE'] = __dirname + '/licenses/UNLICENSE';
    } else {
      // Add properly-named license files.
      init.addLicenseFiles(files, props.licenses);
    }

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Make test.sh executable
    fs.chmodSync('test.sh', 0755);

    // All done!
    done();
  });

};
