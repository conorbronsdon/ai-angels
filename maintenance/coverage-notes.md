# Coverage Notes — AI Angel Investors Seed Dataset

Compiled 2026-07-07. 39 entries in `angels.json` / `angels.md`. Discovery leads pulled (names only, per the
legal constraint) from `swyxio/devtools-angels` (41 names, ~2020-21 vintage devtools list) and
`Nutlope/aiangels` (a Next.js/Prisma app with no static data file in the repo — its angel data lived in a
database, not git, so it yielded zero names). All other candidates came from independent web research
(2025-2026 press, aggregator profiles, personal sites/blogs, X). Every included entry has a dated,
public, ~18-month-recent activity signal and at least one source URL that is not the predecessor repos.

## Why only ~39, not the full 55

Time/effort was spent verifying each candidate individually rather than bulk-importing names from
aggregator "top AI angel" listicles (most of those blend VC fund partners, estimated check sizes, and
stale portfolios without dates — exactly the noise this dataset is trying to avoid). 39 solid, individually
verified entries beat a padded 55 with soft evidence. A future maintenance pass has a long list of
candidates below that are one good search away from being upgradeable.

## Excluded candidates and why

**Now VC fund partners, not personal angels** (their checks run through institutional LP capital, which
fails the inclusion bar unless they explicitly frame it as a personal syndicate):
- ~~**Elad Gil**~~ — UPDATE 2026-07-07: added to the list after a follow-up verification pass found he
  still writes personal angel checks that precede fund involvement (e.g., Frame Security, a $50M round he
  first backed personally before Gil Capital followed on, May 2026). Originally excluded here in the seed
  pass as a VC fund partner (Gil Ventures IV, ~$3B institutional vehicle formalized mid-2025) — both things
  are true; he clears the bar via the personal-check side of his activity. See `data/angels.json`.
- **Alessio Fanelli** — Partner/CTO-in-Residence at Decibel Ventures; his recent seed leads (Smol.ai,
  Brightwave) are attributed to the firm, not personal capital. Co-hosts Latent Space with swyx (who *is*
  included).
- **Jack Altman** — ran Alt Capital as a personal-style early-stage fund through 2025, but became a
  General Partner at Benchmark in February 2026 and wound down new Alt Capital investments.
- **Katie Jacobs Stanton** — Moxxie Ventures raised a $95M institutional third fund in 2024; strong AI
  healthcare/robotics activity but it's fund capital, not personal checks.
- **Kanjun Qiu** — GP at Outset Capital; her personal angel portfolio (2 investments) is thin and dated
  (last Oct 2024).
- **Elizabeth Yin** — Hustle Fund GP; writes checks through the fund, not personally.
- **Tikhon Bernstam** — cycling between GP roles (stepped down from Acrew Capital, now Managing Partner
  at Uncommon Capital); no dated personal-capital AI angel evidence found in the ~18-month window.
- **Aditya Agarwal** — included, but flagged: he's a Managing Partner at South Park Commons, and it's
  ambiguous from public sources how much of his activity is fund capital vs. personal allocation. Kept in
  because his own investment listings are described as blending both.

**Founders/execs with no evidence they personally write angel checks:**
- **Ivan Burazin** (Daytona CEO) — every source found is about Daytona *raising* money, not Burazin
  investing in others. Likely a mistaken inclusion in some aggregator lists that confuse "raised funding"
  with "invests."
- **Jason Warner** (Poolside CEO) — same pattern; no personal angel evidence found.
- **Shinji Kim** (Select Star CEO) — described only as an advisor to early-stage startups, not a check-writer.

**Stale (no evidence inside ~18 months):**
- **Cassidy Williams** — last dated investment found was October 2023.
- **Julie Zhuo** — most recent dated event is a portfolio *exit* (Galileo AI, May 2025), not a new check;
  only ~9 companies in her portfolio total.
- **Julia Liuson** — only 2 investments on record, no dates found.
- **Hadi Partovi** — broad historical angel (Facebook, Dropbox, Uber-era), but no AI-specific recent
  activity found; his twin brother Ali Partovi runs Neo, which is AI-talent-focused but is a fund, not
  personal angel capital — worth a closer look in a future pass.

**Unclear / moved roles that complicate "active":**
- **Beyang Liu** (Sourcegraph CTO, Amp co-founder) — only 2 angel investments found, no clear recent
  dates; spending 2025-2026 building Amp rather than angel investing.
- **Max Stoiber** — well-documented historical devtools angel (ran devtoolangels.com), but is now a
  Member of Technical Staff at OpenAI and no specific 2025-2026 investment date was found. Flag for
  re-check — OpenAI employment may or may not restrict outside angel investing.
- **Nikita Bier** — moved into a Lightspeed Ventures partner-style role and product leadership at X;
  consumer-app focus, not core AI infra/devtools.
- **Turner Novak** (Banana Capital) — active investor generally, but no AI-specific dated investment
  evidence found in the window; Banana Capital's stated focus (consumer, fintech, gaming) doesn't clearly
  clear the AI/ML/devtools/AI-infra bar.
- **Packy McCormick** — Not Boring Capital has raised institutional capital and reads as a venture fund
  now rather than a personal angel vehicle, despite Packy's personal brand.
- **Christina Cordova** — no specific AI investment evidence found at all; dropped for lack of any
  verifiable signal, not just staleness.
- **Simon Last** (Notion co-founder) — the one dated AI angel investment found (Imbue, 2023) is outside
  the recency window and no newer activity surfaced.

## Flagged-but-included (read the caveat in the entry before using)

- **Nat Friedman** and **Daniel Gross** — the two most historically significant AI angels of the last
  decade via the informal NFDG partnership. Both joined Meta Superintelligence Labs as full-time operating
  executives in mid-2025 after Meta partially acquired NFDG's portfolio. Their most recent joint personal
  investment found (Composite, October 2025) is inside the 18-month window, but it predates the point
  where their Meta roles were fully spun up — it's genuinely unclear whether either is still writing new
  personal angel checks in 2026. Included because of historical significance and one still-recent data
  point, but this pair is the highest-priority re-verification item for the next maintenance pass.
- **Anjney Midha** — left a16z in October 2025 to launch AMP, his own compute-plus-capital vehicle. Very
  recent transition; AMP's capital structure (personal vs. LP-raised) wasn't confirmed in public sources.
- **Bilawal Sidhu** — a16z venture scout + TED AI curator; scouts typically deploy some personal capital
  alongside the firm's, but no single dated, named check was found — only a general, ongoing pattern of
  activity across 2025-2026.

## Gaps for a future maintenance pass

1. **Check sizes are mostly null.** Only entries where the person (or their own fund's website) stated a
   specific range were populated — aggregator "estimated annual budget" figures (common on Tracxn/Signal/
   PitchBook profile pages) were deliberately excluded as not being the person's own statement. A future
   pass could mine founder-thank-you tweets and term sheets for more of these.
2. **X handles were only included where seen directly in a search result or extremely high-confidence
   (e.g., @naval, @balajis, @amasad, @tobi) for widely known public figures.** A dedicated verification
   pass should click through and confirm every handle before this list goes live — a stale/wrong handle is
   worse than no handle.
3. **Geographic and gender skew.** The list leans US/SF Bay Area and male, reflecting both the source
   material (devtools-angels was largely SF-centric) and search result bias. Worth a deliberate pass
   searching non-US AI angel scenes (Europe — Des Traynor and Thomas Wolf are the only two non-US-based
   entries that made the cut; India, Southeast Asia, Latin America) and prominent women AI angels beyond
   Scott Belsky's and Aditya Agarwal's portfolios (e.g., re-examine Elizabeth Yin, Katie Jacobs Stanton,
   and Ali/Hadi Partovi's Neo network for a personal-capital angle that would clear the bar).
4. **Ali Partovi / Neo** — Neo is explicitly framed as backing early AI/technical talent; worth a dedicated
   look at whether any of Neo's named scouts or Ali personally write angel checks outside the fund.
5. **Sam Altman, Guillaume Verdon, and other mega-names were deliberately not chased** — given OpenAI's
   dominance of Altman's time and lack of any specific recent personal-check evidence surfacing in the
   searches run here, he was skipped rather than force-included on reputation alone. Worth one targeted
   search in a future pass.
6. **Devtools-angels names not re-verified**: of the 41 names in the predecessor list, most (David Yang,
   Moritz Plassnig, Brian Douglas, Brianne Kimmel, Ellen Chisa, Stephanie Friedman, Michael Rybintsev,
   Manuel Weiss, Dion Almaer, Brian Lovin, Eugene Yan, Sankalp Agarwal, Tracy Lee, Patrick Thompson, Kaelig
   Deloumeau-Prigent, Chang Xu, Ilya Lyamkin, Thomas Schranz, Shinji Kim, Jack McCloy, Charlie Marsh,
   Alfonso Subiotto, Luke Michael Byrne, Ekene Eze, Desigan Chinniah, Bukky Adebayo, Kareem Kouddous, Gyan
   Kapur, Thomas Cuvelier) were not individually re-researched in this pass — the list was already a
   2020-21-era snapshot skewed toward general devtools rather than AI specifically, and time was
   prioritized on higher-probability AI-focused candidates instead. A future pass could triage these
   quickly (most likely to still be relevant: Charlie Marsh given his Astral/Ruff/uv profile, though he's
   now a founder himself and may not have personal angel evidence either).

## 2026-07-07 addendum: Luke Tucker added

Added Luke Tucker (Director of Marketing, Cisco/Outshift; Hustle Fund Angel Squad member since Oct 2023)
on Conor's direct request, verified against his self-published post
(https://luketucker.com/angel-investing-and-angel-squad/, dated 2025-11-10 — well inside the ~18-month
window) plus a corroborating search for continued 2026 activity. **Judgment call, flagged rather than
silently decided:** his stated focus is cybersecurity-primary with "agentic development companies" as a
named secondary category, not an AI-first thesis. He clears the bar here because several of his named
investments are squarely AI (CoreWeave — AI infra/GPU cloud; Kilo Code — AI coding agent; Detections.ai,
AgentSystems.ai — agentic/AI security), so his activity plausibly covers AI even though it isn't his sole
focus. A future pass could re-examine whether "AI angels" wants a stricter AI-primary bar, which would
argue for removing him.

## Legal/process note

No text, descriptions, categorizations, or ordering from `swyxio/devtools-angels` or `Nutlope/aiangels`
was copied. Names discovered there were treated purely as leads and independently re-verified through
2025-2026 primary and secondary sources before inclusion; several names from that list were in fact
excluded here for lack of current evidence (see above). `Nutlope/aiangels` contributed zero names since
its actual angel data lived in a Prisma-backed database not present in the git repository.
