import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { containsEmail, focusTerms, normalizeAngel, verifiedMonth } from '../site/data-model.mjs';

const root = new URL('../', import.meta.url);
const data = JSON.parse(await readFile(new URL('data/angels.json', root), 'utf8'));
const html = await readFile(new URL('site/index.html', root), 'utf8');
const app = await readFile(new URL('site/app.js', root), 'utf8');

assert(Array.isArray(data) && data.length > 0, 'data/angels.json must be a non-empty array');
assert.equal(new Set(data.map((row) => row.name)).size, data.length, 'angel names must be unique');

for (const raw of data) {
  const row = normalizeAngel(raw, new Date('2026-08-09T00:00:00Z'));
  assert(row.name, 'every record needs a name');
  assert(row.what_they_do, `${row.name}: what_they_do is required`);
  assert(row.focus, `${row.name}: focus is required`);
  assert(row.reach, `${row.name}: public reach field is required`);
  assert(!containsEmail(raw), `${row.name}: dataset records must not expose email addresses`);
  assert(verifiedMonth(row.last_verified_activity), `${row.name}: last_verified_activity must begin YYYY or YYYY-MM`);
  assert(row.source_urls.length > 0, `${row.name}: at least one public source is required`);
  for (const source of row.source_urls) {
    const url = new URL(source);
    assert(['http:', 'https:'].includes(url.protocol), `${row.name}: source must be HTTP(S)`);
  }
  assert(row.searchText.includes(row.name.toLowerCase()), `${row.name}: normalized search must preserve the record`);
  assert.deepEqual(row.source_urls, raw.source_urls, `${row.name}: normalization must preserve all source URLs`);
}

assert(focusTerms(data).length >= 3, 'focus filter needs multiple source-derived options');
assert(html.includes('id="cards"') && html.includes('id="filters"'), 'page must expose filters and results');
assert(app.includes("fetch('./data/angels.json')"), 'explorer must load the canonical JSON, not a copied dataset');
assert(app.includes('row.source_urls.map'), 'rendering must retain every source URL');
assert(!html.match(/mailto:/i), 'explorer HTML must not publish email addresses');

console.log(`✓ Explorer contract validated for ${data.length} sourced angel records.`);
