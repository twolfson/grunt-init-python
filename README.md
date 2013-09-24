# grunt-init-node [![Build status](https://travis-ci.org/twolfson/grunt-init-node.png?branch=master)](https://travis-ci.org/twolfson/grunt-init-node)

> Create a Node.js module with [grunt-init][], including mocha unit tests.

This is a personal fork from https://github.com/gruntjs/grunt-init-node. Highlights are:

- mocha tests over nodeunit tests
- Create CHANGELOG.md
- Prompt for keywords
- Include gittip badge
- Removed Travis CI badge for now (will prob come back when I decide to start using Travis religiously)
- Added [UNLICENSE][unlicense-site] to available licenses (default)

[unlicense-site]: http://unlicense.org/
[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation
If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

```
git clone git@github.com:twolfson/grunt-init-node.git ~/.grunt-init/node
```

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init node
```

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._
