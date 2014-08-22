var assert = require('assert'); // or require('chai').assert
assert.deepEqualWithDifflet = require('../');

describe('test', function() {
    it('should not fail', function() {
        var a = { a: 1, b: 2 },
            b = { b: 2, a: 1 };
     assert.deepEqualWithDifflet(a, b);
    });

    it('should fail with readable output', function() {
        var a = { a: 1, b: 2 },
            b = { b: 2, a: 1, c : function() {} };
     assert.deepEqualWithDifflet(a, b); // compare to assert.deepEqual(a, b);
    });
});
