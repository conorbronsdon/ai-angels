import assert from 'node:assert/strict';
import test from 'node:test';
import { containsEmail, filterAngels, normalizeAngel, stageBuckets } from '../site/data-model.mjs';

test('stage buckets retain every explicitly listed stage', () => {
  assert.deepEqual(stageBuckets('pre-seed, seed, Series A'), ['pre-seed', 'seed', 'series a']);
  assert.deepEqual(stageBuckets('seed, Series A, Series B'), ['seed', 'series a', 'series b+']);
});

test('stage ranges include their intermediate stages', () => {
  assert.deepEqual(
    stageBuckets('pre-seed to Series C'),
    ['pre-seed', 'seed', 'series a', 'series b+'],
  );
});

test('unrecognized stated stages remain discoverable without guessing', () => {
  assert.deepEqual(stageBuckets('early-stage'), ['other']);
  assert.deepEqual(stageBuckets(null), ['unspecified']);
});

test('filtering matches a multi-stage investor in every applicable bucket', () => {
  const row = normalizeAngel({
    name: 'Multi-stage angel',
    stage: 'seed, Series A, Series B',
    focus: 'AI infra',
    what_they_do: 'Invests',
    reach: 'example.com',
    last_verified_activity: '2026-08',
    source_urls: ['https://example.com'],
  });
  const filters = { query: '', focus: '', stage: '', checkSize: '' };
  for (const stage of ['seed', 'series a', 'series b+']) {
    assert.equal(filterAngels([row], { ...filters, stage }).length, 1);
  }
  assert.equal(filterAngels([row], { ...filters, stage: 'pre-seed' }).length, 0);
});

test('email detection catches dataset exposure without mistaking social handles', () => {
  assert.equal(containsEmail({ reach: 'founder@example.com' }), true);
  assert.equal(containsEmail({ reach: '@founder; x.com/founder' }), false);
});
