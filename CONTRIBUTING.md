# Contributing

## Suggest yourself or an angel

[Open the suggestion form](https://github.com/conorbronsdon/ai-angels/issues/new?template=suggest-an-angel.yml). It creates a public GitHub issue, so you will need a GitHub account. Share the name, AI focus, public pitch channel, and a source for recent investing activity. Notable investments are helpful if you know them. The maintainer reviews the evidence and adds approved entries.

Use public information only. Self-suggestions are welcome and follow the same inclusion criteria.

## Prefer a pull request?

One entry per PR. Add the record to `data/angels.json` using the existing field structure, and add the matching row to `README.md`, keeping the table in alphabetical order by first name. Keep the README total and focus counts consistent with the data.

Example README row:

```markdown
| [Name](https://their-site.com) | AI infra, devtools | $25k–$100k | Pre-seed, seed | [@handle](https://x.com/handle) | Company A, Company B | 2026-07 ([source](https://link-to-evidence)) |
```

Field notes:

- **Name** — link to their personal site or the pitch channel they publish.
- **Focus** — 2–4 words. What they actually invest in, not aspirations.
- **Check size** — only if publicly stated by the person. Leave `—` otherwise.
- **Stage** — only if stated. Leave `—` otherwise.
- **Reach** — channels the person publishes for pitches: personal site, public form, X handle. No scraped emails, no LinkedIn DMs presented as a pitch channel.
- **Notable AI investments** — 2–4, publicly verifiable.
- **Last verified** — `YYYY-MM` plus a source link proving investing activity within the last 18 months (announced check, founder thank-you, press, or a current "actively investing" statement from the person).

If you're adding yourself, say so in the PR description — self-adds are welcome and get the same verification bar.

## What gets declined

- Entries with no public evidence of activity in the last 18 months.
- Fund partners who don't write personal checks or lead a personal syndicate.
- Contact channels the person didn't publish themselves.
- Descriptions copied from other directories.

## Removals and corrections

If you're listed and want off, open an issue (or email the maintainer) and the entry comes down without discussion. Corrections to any field: PR with a source.
