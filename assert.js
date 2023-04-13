// The node.js Assert is the most elementary way to write
// tests. It provides no feedback when running your tests
// unless one fails.
// The assert module provides a simple set of assertion
// tests that can be used in application code

import { strict as assert } from "node:assert";

function add(a, b) {
  return a + b;
}

let expected = add(1, 2);

// assert(expected === 3, "1 + 2 is equal to 3"); // paases
// it will only through an error when the test fails, that
// is when the test result is false.

// assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]); // fails

try {
    assert.strictEqual(1, 2);
} catch (err) {
    console.log(err.operator);
}
