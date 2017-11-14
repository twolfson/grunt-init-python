{%= name %}
{%= underline(name, '=') %}

.. image:: https://travis-ci.org/{%= travis_username %}/{%= name %}.svg?branch=master
   :target: https://travis-ci.org/{%= travis_username %}/{%= name %}
   :alt: Build Status

{%= description %}

Getting Started
---------------
Install the module with: ``pip install {%= package_name %}``

.. code:: python

    from {%= package_name %} import run
    run()

Documentation
-------------
_(Coming soon)_

Examples
--------
_(Coming soon)_

Contributing
------------
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Test via ``nosetests``.
{% if (include_donations) { %}
Donating
--------
Support this project and `others by twolfson`_ via `donations`_.

http://twolfson.com/support-me

.. _`others by twolfson`: http://twolfson.com/projects
.. _donations: http://twolfson.com/support-me
{% } %}{% if (unlicense) { %}
Unlicense
---------
As of {%= grunt.template.today('mmm dd yyyy') %}, {%= author_name %} has released this repository and its contents to the public domain.

It has been released under the `UNLICENSE`_.

.. _UNLICENSE: {%= homepage %}/blob/master/UNLICENSE{% } else if (licenses.length) { %}
License
-------
Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}

Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.{% } %}
