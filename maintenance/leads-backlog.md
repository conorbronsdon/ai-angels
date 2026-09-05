# AI Angels — Leads Backlog (unverified)

Source: live database extracted from aiangels.fund (Nutlope's dead project, Next.js RSC
payload embedded in the homepage HTML — 16 total records, ids 1-16). Names only, per the
unlicensed-source guard — no descriptions/details from the site are reused below; each
name was independently re-researched.

At the original extraction, of the 16 names on the live site, 4 were already covered in angels.json: **Ben Tossell**,
**Logan Kilpatrick**, **Jared Palmer**, **swyx (Shawn Wang)**. The remaining 12 were
candidate new leads. Of those, 1 (Elad Gil) cleared the verification bar and shipped to
`angels-additions.json`. The other 11 began as deferred leads. The dated outcomes below track later additions and remaining evidence gaps.

**Maintenance rule (added 2026-08-04):** when a lead merges to the list, convert its entry
to a MERGED tombstone (keep any research worth preserving, e.g. disambiguation warnings)
in the same pass as the merge. Automated seeding reads this file as the source of open
verification work — a stale "still deferred" entry for a merged name produces a wrong
public ask (that exact miss happened with issue #12).

## Research outcomes — activity and focus

- **Nitesh Banta** — **MERGED 2026-09-04 ([PR #29](https://github.com/conorbronsdon/ai-angels/pull/29)).** [His own site](https://www.nbanta.com/) describes ongoing angel investing. [Signal](https://signal.nfx.com/investors/nitesh-banta) and [Crunchbase](https://www.crunchbase.com/person/nitesh-banta) now record Pelgo (February 2026) and Howie (September 2025), superseding the old Chai-only freshness blocker. Check size and stage remain unspecified; profile ranges are not treated as self-stated.

- **Alana Goyal** — **Re-checked 2026-09-04: deferred for missing personally directed angel evidence outside her institutional fund.** Current evidence establishes Basecase activity, not a separate personal check or personally led syndicate/rolling fund. [Her Forbes profile](https://www.forbes.com/profile/alana-goyal/) describes the fund. Reopen #16 with a source for qualifying personal activity; this is an evidence gap, not a claim that she never angel invests.

- **Ahmad Awais — MERGED 2026-08-03 (PR #4).** Row is live on the list; this entry stays
  only for its disambiguation warning: search engines repeatedly confuse him with a
  different person, **Awais Ahmed** (Pixxel founder, India), whose well-dated 2025/2026
  investments (Alt Carbon, Aspera Industries, Pramatra Space) belong to the other person.
  Anyone re-verifying the Awais row at the 18-month bar: check name-order carefully.

- **Beyang Liu** — **Re-checked 2026-09-04: deferred for missing current investing evidence.** [His own site](https://beyang.org/) documents his developer-tools work; [CB Insights](https://www.cbinsights.com/investor/beyang-liu) still records historical Replay participation in September 2021. No investment within the last 18 months or current self-stated investing activity was found in this bounded recheck. Reopen #17 with either kind of evidence.

- **Alexander Nevedovsky** — **MERGED 2026-09-04 ([PR #28](https://github.com/conorbronsdon/ai-angels/pull/28)).** [His personal site](https://ednevsky.com/) invites AI-native founders to approach him for angel investment. This satisfies the published alternative to a dated deal; no personal portfolio companies or check sizes are inferred. Correction: the previous Artisan/Tinkoff background was unsupported and has been removed. His own site identifies Audos, No Cap and WANNA.

- **Mayo Oshin** — **Re-checked 2026-09-04: deferred for uncertain statement freshness.** [His own bio](https://www.mayooshin.com/) states an AI development-tools angel focus, but the undated page still promotes a book preorder. No dated recent investment or clearly refreshed investing invitation was found. Reopen #14 with either a current statement or a recent deal; the rules do not require both.

- **Yucheng L / Yucheng Liu** (Founder, Velocity1; co-founder, Lucius AI) — bio says he
  "worked as Angel Investor... at Artflow" (past tense), no recent activity found, thin
  public footprint (GitHub, personal site, one contact-info aggregator). Low confidence
  this clears the bar without direct outreach or a Chinese-language source search.
  **Re-checked 2026-07-08:** aggregators (LinkedIn, ContactOut, RocketReach) now give a
  firm date range for the Artflow role — "Angel Investor and CTO" Nov 2021-Apr 2023 —
  confirming it's stale (well past the window), and his current roles (Velocity1 founder
  since Oct 2023, Lucius AI interim CTO since Apr 2025) are both operating roles, not
  investing. No recent angel activity found. Still deferred.

- **Jonathan Cornelissen** (Co-founder & CEO, DataCamp) — **added 2026-07-31, not from the
  aiangels.fund extraction**; surfaced independently. Self-described "entrepreneur + angel
  investor" on jonathancornelissen.com, angel investing since 2018, with a "Why I invested
  in X" post on Medium for each check — unusually transparent for an angel. Two problems
  against the inclusion bar. **(1) AI focus is thin:** the four investments he features on
  his homepage are Clever Girl Finance (financial education), Perch.fit (connected fitness),
  Two Front (orthodontics), and inflights — none AI. His CV page adds Kyso.io, Constrafor,
  and **segments.ai** (data labeling for computer vision); Tracxn adds **NannyML** (ML model
  monitoring). So the ML-adjacent checks are a minority of a small portfolio.
  **(2) Staleness is severe:** the most recent *dated* check anywhere in public sources is
  NannyML's seed, **30 Oct 2020** (~68 months, vs. the 22-month staleness that deferred
  Nitesh Banta above). Tracxn's profile, last updated 16 Jul 2026, lists two portfolio
  companies and shows no 2025-26 investing activity; his CV page is still "© 2022." The only
  2025 event is NannyML's **acquisition exit (9 Jun 2025)** — an exit is not evidence of
  investing activity, and using it as a "last verified" source would misrepresent the field.
  **Re-check path:** Conor accepted him as a Chain of Thought guest on 2026-07-31 (open-source
  models as the production hedge; inbound via James Robinson, Weatherfield Strategies). Ask
  directly on the prep call whether he's written AI checks in 2025-26 that he hasn't published.
  A named recent check plus any public confirmation clears both problems at once, and the
  entry ships with an announcement tweet per the convention in `coverage-notes.md`.
  Reach if he clears: [jonathancornelissen.com](https://www.jonathancornelissen.com) ·
  [@CornelissenJo](https://x.com/cornelissenjo).

## Research outcomes — personal participation and source evidence

- **Paul Klein IV** — **MERGED 2026-09-04 ([PR #30](https://github.com/conorbronsdon/ai-angels/pull/30)).** [Natural's July 20, 2026 Series A announcement](https://www.natural.com/blog/natural-series-a) names Paul Klein IV individually as a participant in its AI-agent payments business. This supports individual participation under the same company-announcement standard used for other entries. It does not establish Hawk Hill's capital structure or claim that all his checks are personal; no scout or Hawk Hill portfolio checks are attributed to him here. The previous demand to prove that a vehicle has no outside LPs was too broad: the rules allow personally led syndicates and rolling funds.

- **Steven Tey** — **MERGED 2026-09-04 ([PR #27](https://github.com/conorbronsdon/ai-angels/pull/27)).** [Polar's June 17, 2025 seed announcement](https://polar.sh/blog/polar-seed-announcement) names Tey among its angels and describes infrastructure for AI usage billing and agentic payments. This is independent primary evidence; the earlier source-license blocker no longer applies.

- **Lee Robinson** — **Re-checked 2026-09-04: deferred for missing AI investment focus.** [His own site](https://leerob.com/) states that he angel invests, but the bounded recheck found no public AI investment thesis or named AI investment. His AI operating background is not evidence of his investing focus. Reopen #10 when a self-stated AI thesis or a sourced AI investment appears; a dated deal is not the only acceptable path.

- **Varun Dodla** — search results actually describe him as a **co-founder/CTO of
  Slync.io** (a logistics startup that later went bankrupt amid a fraud scandal involving
  its ex-CEO), not as an active angel investor. This looks like it may be a stale or
  inaccurate entry on the source site; no evidence of him personally angel-investing
  elsewhere. Recommend dropping unless new evidence surfaces.
  **Re-checked 2026-07-08:** exact-name search still surfaces nothing — results redirect to
  unrelated people (Varun Dua, Dalal, Laul, Alagh). No new evidence either way. Recommend
  no further re-checks absent a new lead; treat as effectively dropped.

## Not independently verifiable

- **Evil Rabbit** (Principal Brand Designer, Vercel; JWT/Passport.js design history) —
  this is a pseudonym/handle with no discoverable real name in public sources. Cannot be
  independently verified or re-contacted under a real identity from public search alone.
  **Not re-searched 2026-07-08** — no new identifying information would change the
  pseudonym problem; skipped rather than repeat the same dead-end search.

## Extraction method notes (for future maintenance passes)

The site is a Next.js App Router page. A naive WebFetch only ever returns the rendered
title ("AI Angel Investors") because the actual angel roster is streamed as RSC payload
inside `self.__next_f.push([1, "..."])` calls in the raw HTML, not in a classic
`__NEXT_DATA__` blob and not behind a separate `/api/*` route (none exists — `/api/angels`
etc. all 404/don't exist as REST endpoints; the data is inlined server-side at render
time). To re-extract: `curl -s https://www.aiangels.fund/ -o page.html`, then regex out
`self\.__next_f\.push\(\[1,"(.*?)"\]\)` bodies, JSON-decode each captured string (they're
JS string literals with escaped quotes), and the largest chunk (~12KB in this pass)
contains the full `data:[{...}]` array with id, name, email (actually holds a Twitter/X
URL, not an email), company, title, checkSize, details, site, and timestamps.
