{%= name %}
{%= underline(name, '=') %}

.. image:: https://travis-ci.org/{%= travis_username %}/{%= name %}.png?branch=master
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
{% if (gratipay_username) { %}
Donating
--------
Support this project and `others by {%= gratipay_username %}`_ via `gratipay`_.

.. image:: https://cdn.rawgit.com/gratipay/gratipay-badge/2.x.x/dist/gratipay.png
   :target: `gratipay`_
   :alt: Support via Gratipay

.. _`others by {%= gratipay_username %}`:
.. _gratipay: https://www.gratipay.com/{%= gratipay_username %}/
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
