// GitHub Actions hardening: SHA pins, top-level permissions, Dependabot.
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const gh = join(root, '.github');

function unpinnedUses(yaml) {
  const bad = [];
  for (const line of yaml.replace(/\r\n/g, '\n').split('\n')) {
    const m = line.match(/^\s*(?:-\s+)?uses:\s*["']?([^\s"'#]+)/);
    if (!m) continue;
    const ref = m[1];
    if (ref.startsWith('./') || ref.startsWith('docker://')) continue;
    if (!/@[0-9a-f]{40}$/.test(ref)) bad.push(ref);
  }
  return bad;
}

function yamlFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return yamlFiles(p);
    return /\.ya?ml$/.test(name) ? [p] : [];
  });
}

const workflows = yamlFiles(join(gh, 'workflows'));
const actionFiles = yamlFiles(join(gh, 'actions'));

test('parser flags a tag, a short SHA and a branch ref', () => {
  assert.deepEqual(unpinnedUses('      - uses: actions/checkout@v4\n'), ['actions/checkout@v4']);
  assert.deepEqual(unpinnedUses('      - uses: actions/checkout@11d5960\n'), ['actions/checkout@11d5960']);
  assert.deepEqual(unpinnedUses('        uses: actions/setup-node@main\n'), ['actions/setup-node@main']);
});

test('parser accepts a full SHA pin and local actions', () => {
  const yaml = [
    '      - uses: actions/checkout@11d5960a326750d5838078e36cf38b85af677262 # v4.4.0',
    '      - uses: ./.github/actions/local',
    '      - uses: docker://alpine:3.20',
  ].join('\n');
  assert.deepEqual(unpinnedUses(yaml), []);
});

test('every uses: in workflows and composite actions is pinned to a full commit SHA', () => {
  assert.ok(workflows.length > 0, 'no workflows found');
  for (const file of [...workflows, ...actionFiles]) {
    assert.deepEqual(unpinnedUses(readFileSync(file, 'utf8')), [], file);
  }
});

test('every workflow sets top-level permissions', () => {
  for (const file of workflows) {
    assert.match(readFileSync(file, 'utf8'), /^permissions:/m, file);
  }
});

test('dependabot watches github-actions', () => {
  const text = readFileSync(join(gh, 'dependabot.yml'), 'utf8');
  assert.match(text, /package-ecosystem:\s*["']?github-actions\b/);
});
