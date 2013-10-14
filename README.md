# grunt-init-python [![Build status](https://travis-ci.org/twolfson/grunt-init-python.png?branch=master)](https://travis-ci.org/twolfson/grunt-init-python)

Boilerplate template for [Python][] projects via [grunt-init][]. Highlights are:

- `nose` is used for testing
- Basic PyPI files are installed: `MANIFEST.in`, `setup.py`
- `requirements` are broken out into `requirements.txt` for separate installation
- Added [UNLICENSE][unlicense-site] to available licenses (default)
- Include [gittip][] badge
- Include [Travis CI][] badge

This was forked from [twolfson/grunt-init-node][].

[Python]: http://www.python.org/
[grunt-init]: http://gruntjs.com/project-scaffolding
[unlicense-site]: http://unlicense.org/
[gittip]: https://www.gittip.com/
[Travis CI]: https://travis-ci.org/
[twolfson/grunt-init-node]: https://github.com/twolfson/grunt-init-node

## Installation
If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory.

It's recommended that you use git to clone this template into that directory, as follows:

```
git clone git@github.com:twolfson/grunt-init-python.git ~/.grunt-init/python
```

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init python
```

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._
