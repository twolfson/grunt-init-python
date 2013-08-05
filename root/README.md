# {%= name %}

{%= description %}

## Getting Started
Install the module with: `npm install {%= name %}`

```javascript
var {%= js_safe_name %} = require('{%= name %}');
{%= js_safe_name %}.awesome(); // "awesome"
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_
{% if (gittip_username) { %}
## Donating
Donations are accepted via [Gittip][gittip].

[![Support via Gittip][gittip-badge]][gittip]

[gittip-badge]: https://rawgithub.com/twolfson/gittip-badge/0.1.0/dist/gittip.png
[gittip]: https://www.gittip.com/{%= gittip_username %}/
{% } %}
## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint via [grunt](https://github.com/gruntjs/grunt) and test via `npm test`.

## License
Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}

Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
