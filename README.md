deep-equal-with-difflet
====================

deepEqual using [difflet](https://github.com/substack/difflet) to show the diff.

usage:

``` js
var assert = require('assert');
assert.deepEqualWithDifflet = require('deep-equal-with-difflet');

var a = { a: 1, b: 2 },
    b = { b: 2, a: 1, c : function() {} };

assert.deepEqualWithDifflet(a, b);
```

install
=======

With [npm](http://npmjs.org) do:

```
npm install deep-equal-with-difflet
```

examples
====
just node:
```
node example/example.js
```

with mocha:

```
mocha example/example_test.js
```

license
=======

MIT/X11
