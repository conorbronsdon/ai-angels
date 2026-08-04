#!/usr/bin/env node
// Build announce-tweet drafts from data/angels.json rows, per the convention in
// maintenance/coverage-notes.md. The convention doc is the spec; if this script
// and the doc disagree, the doc wins and this is the bug.
//
// Modes:
//   node scripts/announce-draft.mjs --diff old.json new.json   -> drafts for rows in new but not old
//   node scripts/announce-draft.mjs --name "Some Name" file.json -> draft for one existing row
//
// Output: JSON array on stdout, one object per draft:
//   { name, title, body }
// The "why they're worth following" line is a placeholder BY DESIGN — writing it
// by hand is the convention's last check on whether the entry clears the bar.

import { readFileSync } from "node:fs";

function loadRows(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function xHandle(reach) {
  const m = /(?:^|[\s;])(?:https?:\/\/)?(?:www\.)?x\.com\/([A-Za-z0-9_]+)/.exec(reach || "");
  return m ? `@${m[1]}` : null;
}

function firstSite(reach) {
  const part = (reach || "").split(";")[0].trim();
  return part || null;
}

function buildDraft(row, prAuthor) {
  const handle = xHandle(row.reach);
  const who = handle ? `${row.name} (${handle})` : `${row.name} (${firstSite(row.reach) || "see the row"})`;
  const invs = (row.notable_ai_investments || []).slice(0, 3).join(", ");
  const lines = [
    `New on the AI angels list: ${who}.`,
    invs ? `Recent AI checks: ${invs}.` : null,
    `[WHY THEY'RE WORTH FOLLOWING — one line, write by hand before posting]`,
    ``,
    `https://github.com/conorbronsdon/ai-angels`,
    ``,
    `Know an AI angel who belongs here? Add them (or yourself).`,
  ].filter((l) => l !== null);
  if (prAuthor && prAuthor.toLowerCase() !== "conorbronsdon") {
    lines.push(``, `Thanks @${prAuthor} for the addition.`);
  }
  const tweet = lines.join("\n");
  const body = [
    `**Platform:** X · Tweet`,
    `**Source:** ai-angels announce convention (\`maintenance/coverage-notes.md\`) — generated from the ${row.name} row in \`data/angels.json\``,
    ``,
    `---`,
    ``,
    tweet,
    ``,
    `---`,
    ``,
    `- [ ] Replace the WHY placeholder by hand (it doubles as the bar-check: if the line is hard to write from the row's sources, the entry is thin).`,
    `- [ ] Relabel \`draft\` → \`ready\` — the queue flow picks it up from there.`,
    `- [ ] Post only after the row is live on main, so the link resolves.`,
  ].join("\n");
  return { name: row.name, title: `[X · Tweet] ai-angels: ${row.name}`, body };
}

const args = process.argv.slice(2);
let drafts = [];
const prAuthor = process.env.ANNOUNCE_PR_AUTHOR || null;

if (args[0] === "--diff") {
  const oldRows = loadRows(args[1]);
  const newRows = loadRows(args[2]);
  const oldNames = new Set(oldRows.map((r) => r.name));
  drafts = newRows.filter((r) => !oldNames.has(r.name)).map((r) => buildDraft(r, prAuthor));
} else if (args[0] === "--name") {
  const rows = loadRows(args[2]);
  const row = rows.find((r) => r.name === args[1]);
  if (!row) {
    console.error(`no row named ${JSON.stringify(args[1])} in ${args[2]}`);
    process.exit(1);
  }
  drafts = [buildDraft(row, prAuthor)];
} else {
  console.error("usage: announce-draft.mjs --diff old.json new.json | --name <name> file.json");
  process.exit(1);
}

process.stdout.write(JSON.stringify(drafts));
