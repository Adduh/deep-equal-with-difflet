var assert = require('assert');
assert.deepEqualWithDifflet = require('../');
var a = { a: 1, b: 2 },
    b = { b: 2, a: 1, c : function() {} },
    c = { a: 1, b: 2 };

assert.deepEqualWithDifflet(a, c);
// expected:
// no AssertionError

assert.deepEqualWithDifflet(a, b);
// expected:
// AssertionError: deepEqual found the following diff:
// {
//   "b" : 2,
//   "a" : 1,
//   "c" : [Function] // != undefined
// }
