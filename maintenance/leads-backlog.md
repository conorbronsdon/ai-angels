# AI Angels — Leads Backlog (unverified)

Source: live database extracted from aiangels.fund (Nutlope's dead project, Next.js RSC
payload embedded in the homepage HTML — 16 total records, ids 1-16). Names only, per the
unlicensed-source guard — no descriptions/details from the site are reused below; each
name was independently re-researched.

Of the 16 names on the live site, 4 were already covered in angels.json: **Ben Tossell**,
**Logan Kilpatrick**, **Jared Palmer**, **swyx (Shawn Wang)**. The remaining 12 were
candidate new leads. Of those, 1 (Elad Gil) cleared the verification bar and shipped to
`angels-additions.json`. The other 11 are listed here, unverified, with the reason each
was deferred rather than rejected outright — they may clear the bar on a future pass with
more digging (especially anyone with a Crunchbase/PitchBook paywall in the way).

**Maintenance rule (added 2026-08-04):** when a lead merges to the list, convert its entry
to a MERGED tombstone (keep any research worth preserving, e.g. disambiguation warnings)
in the same pass as the merge. Automated seeding reads this file as the source of open
verification work — a stale "still deferred" entry for a merged name produces a wrong
public ask (that exact miss happened with issue #12).

## Deferred — thin or stale evidence

- **Nitesh Banta** (B12 CEO; angel at Stellar Capital) — closest to clearing of the group.
  Confirmed personal angel investing per his own site (nbanta.com) and Crunchbase, $5K-$250K
  range, AI/SaaS focus, 91-102 recorded investments. But the most-recent *dated* investment I
  could directly confirm (via Tracxn, updated May 2026) is Chai Discovery, Sep 11 2024 — an
  AI drug-discovery company, but ~22 months old, outside the ~18-month freshness bar. A
  search-engine synthesis claimed more recent Howie (Sep 2025) and Self Protocol (Nov 2025)
  investments, but neither Tracxn nor CB Insights' own pages corroborated his name against
  those specific rounds when fetched directly — couldn't confirm primary-source, dropped.
  Worth a re-check with direct Crunchbase/PitchBook access (both paywalled the deeper list).
  **Re-checked 2026-07-08:** fetched nbanta.com and his AngelList rolling-fund page directly.
  nbanta.com names no dated investments at all (only roles/companies: B12, Rough Draft
  Ventures, Getaround, Summer Workation); the AngelList rolling-fund page is JS-rendered and
  didn't yield investment data via fetch. WebSearch synthesis still only floats the same
  Feb 2024 Stepful deal as "latest," still outside the window. No fresher primary source
  found — still deferred. Direct Crunchbase/PitchBook login remains the likely unlock.

- **Alana Goyal** (Founder & Managing Partner, Basecase Capital) — clearly active
  ($99M across 3 funds, still deploying fund III as of April 2026), but Basecase functions
  as a small institutional solo-GP fund ($250K-$5M checks) rather than personal angel
  checks, and I couldn't find a specific AI-labeled portfolio company with a recent date
  attached to her personally (only Vercel is named on the site's own portfolio page, and
  Vercel isn't a pure AI investment). Re-check by digging into Basecase's portfolio page
  or Twitter for a dated 2025/2026 AI deal.
  **Re-checked 2026-07-08:** found one dated deal — Mainframe's seed round, Dec 10 2024
  (Tracxn) — but it fails on two counts, not one: it's ~19 months old (just past the
  18-month bar as of 2026-07), and her own site now lists Mainframe-adjacent-era deals
  (Ashby, Astral, Baseten, Braintrust, Browserbase, Default, Graphite, Orb, Paper, Resend,
  Supabase, Vercel, Windsurf) explicitly as Basecase Capital partnerships, not personal
  checks. Still deferred on both the personal-capital and freshness bar.

- **Ahmad Awais — MERGED 2026-08-03 (PR #4).** Row is live on the list; this entry stays
  only for its disambiguation warning: search engines repeatedly confuse him with a
  different person, **Awais Ahmed** (Pixxel founder, India), whose well-dated 2025/2026
  investments (Alt Carbon, Aspera Industries, Pramatra Space) belong to the other person.
  Anyone re-verifying the Awais row at the 18-month bar: check name-order carefully.

- **Beyang Liu** (Sourcegraph co-founder/CTO, now building Amp) — has angel-invested (per
  PitchBook/Tracxn, in Replay and Wasmer), but the only dated investment found was Sep 1,
  2021 — well outside the freshness window, and no evidence of continued angel activity
  since (his current focus is building/running Amp as an operator, not investing).
  **Re-checked 2026-07-08:** Tracxn's own 2026 portfolio page still shows just the same 2
  historical investments, no new dates. Recent coverage of him (Software Engineering Daily
  Apr 2025, All Things Open Nov 2025, Daytona Compute 2026 speaker listing) is entirely
  about his AI-coding/Amp operator work, zero mentions of angel activity. Still deferred.

- **Alexander Nevedovsky** (Co-founder/CTO, No Cap and Artisan AI; ex-CTO Tinkoff) —
  genuinely embedded in AI investing (co-built "No Cap," an AI-driven angel investing
  platform; "Angel Investor at Raised" since 2023 per TheOrg). But the one dated, sourced
  investment found (No Cap's $100K into Wonder Family, March 2025, per Financial IT) is
  attributed to the No Cap platform/team, not to Nevedovsky personally — no personal check
  size or standalone deal confirmed. Worth a re-check of his LinkedIn/blog for a personal
  angel check with a date.
  **Re-checked 2026-07-08:** same pattern holds on re-check — his own site (ednevsky.com)
  and blog still frame him only generically as "open to advising, angel investing, and
  collaborating with AI-native founders," and the one concrete dated deal remains the No
  Cap platform's Wonder Family investment, not a personal check under his own name. Still
  deferred.

- **Mayo Oshin** (AI educator, LangChain early contributor, author) — his own site
  (mayooshin.com) states "Early-stage Angel Investor in AI development tools and
  platforms" but names no companies, no dates, no check size. Nothing more specific
  surfaced in search. Needs a named, dated deal to clear the bar.
  **Re-checked 2026-07-08:** no change — mayooshin.com and every search result still
  describe him only generically as an angel investor; still zero named company or date
  found anywhere. Still deferred.

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

## Deferred — insufficient or contradictory evidence

- **Paul Klein IV** (Founder/CEO, Browserbase; Hawk Hill Ventures) — **added 2026-08-03.**
  Fails criterion 1 on current evidence, not criterion 3. Activity is not in doubt: the
  Hawk Hill memo "Looking back at 2025" (published 2025-12-30) states "**We** made 20 angel
  investments across infrastructure, dev tools, vertical SaaS," and hawkhill.ventures/investments
  lists ~45 companies across 2021–2025 including Series A checks (Endeavor AI, Extend AI,
  TextQL, Nuon, Antimetal). AI focus is clearly present. The unresolved question is *whose
  capital*. Three fetches — hawkhill.ventures, /investments, and the memo — none state
  personal capital vs. outside LPs, the memo is written in the first-person plural with at
  least one other person involved (George), and a search result separately describes Klein
  as an a16z scout, which is explicitly someone else's money. Volume and stage look more
  institutional than personal.
  **Same shape as [Alana Goyal] and [Ali Partovi] above/below** — active investor, no
  established personal-capital angle — and both were deferred, so adding Klein would
  contradict two prior rulings.
  **Unlock:** determine whether Hawk Hill is Klein's own capital or a vehicle with outside
  LPs, and separate a16z scout checks from personal ones. A first-person statement from him
  would settle it in one line. He is reachable — PR #49 on `swyxio/devtools-angels` is his.
  **NB for future passes:** the 2026-08-02 scoping pass in `conorbronsdon/personal-context`
  issue #130 listed Klein as clearing the bar. That verdict tested criterion 3 (activity)
  and never tested criterion 1 (personal capital). Corrected here.

- **Steven Tey** (Founder/CEO, Dub.co; ex-Vercel Senior Developer Advocate) — no evidence
  found of him being an active angel investor anywhere except the aiangels.fund bio
  itself (which per the source-license guard can't be used as evidence). Likely accurate
  but unconfirmed independently — needs a direct search hit before it can be verified.
  **Re-checked 2026-07-08:** fetched steventey.com directly — no mention of angel investing
  at all. Crunchbase profile returned HTTP 403 (paywalled/bot-blocked) both times attempted.
  Still zero independent confirmation. Still deferred.

- **Lee Robinson** (VP Developer Education, Cursor; ex-VP DX, Vercel) — one secondary
  source (a podcast write-up) mentions in passing that he "does angel investing," but no
  named company, date, or check size surfaced anywhere. Too thin to write up.
  **Re-checked 2026-07-08:** fetched leerob.com directly — found a stronger, first-person
  source than the prior pass's secondhand podcast mention: his own site states "I also make
  videos, advise companies, and do angel investing." Still no named company, date, or check
  size anywhere (his Crunchbase profile 403'd both attempts). Upgraded from secondary to a
  self-published statement, but still fails the "named, dated deal" bar. Still deferred —
  this is the next-most-promising re-check after Nitesh Banta if a paywalled source becomes
  available.

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
