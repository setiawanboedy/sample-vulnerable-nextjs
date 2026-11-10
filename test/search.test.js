const test = require('node:test');
const assert = require('node:assert');
const { executeSearchQuery } = require('../lib/search');

test('executeSearchQuery finds matching articles', () => {
  const results = executeSearchQuery('Next.js');
  assert.strictEqual(results.length, 1);
  assert.strictEqual(results[0].id, 1);
});

test('executeSearchQuery handles empty search keyword', () => {
  const results = executeSearchQuery('');
  assert.deepStrictEqual(results, []);
});

test('executeSearchQuery returns empty for no match', () => {
  const results = executeSearchQuery('NonExistentKeyword');
  assert.strictEqual(results.length, 0);
});
