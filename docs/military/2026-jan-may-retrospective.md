# Military-Service Retrospective: 2026-01-02 → 2026-05-11

A look back at the first ~4 months of code I shipped (or didn't) from the unit.
Drafted from GitHub signals — 2,164 commits, 72 PRs, 108 issues across 13 repos —
plus the retro essays already living inside `umichkisa-ds/docs/history/`.
Reflections in italics are first-pass interpretations from the data; correct or
strike anything that doesn't ring true.

---

## Headline numbers

| Metric | Count |
|---|---|
| Commits (window) | **2,164** |
| PRs authored | **72** |
| Issues authored | **108** |
| Repos touched | **13** |
| Repos with >50 commits | **5** |
| Active days | spread across all 18 weeks |

Five repos absorbed ~99% of the work:

| Repo | Commits | First → Last | Status |
|---|---|---|---|
| `KISA-webpage-development-team/umichkisa-ds` | 1,147 | Mar 14 → May 10 | **Shipped & active** (npm-published, v1.0.28) — primary project of the window |
| `retz8/iris` | 483 | Jan 2 → May 11 | **Core abandoned** (no more VS Code extension); only the snippet newsletter still ships |
| `KISA-webpage-development-team/KISA-website-client` | 370 | Jan 8 → May 10 | **Shipped to prod through Phase 6** |
| `retz8/spartan-a2ui-adapter` | 95 | Mar 2 → Mar 13 | **Abandoned** — was a follow-up to learn A2UI, dropped to focus on KISA DS |
| `retz8/leetcode-cpp-to-python` | 55 | Jan 2 → Jan 4 | **Pivoted into iris** after 3 days |

Plus a cluster of single-commit drive-by contributions across A2UI repos on
Feb 27 (likely a workshop/hackathon day), and ~7 commits across the personal
portfolio + private notes scratchpad.

---

## Timeline overview

### January — solo product builder

Two things start on the **same day** (Jan 2): `leetcode-cpp-to-python` and
`iris`. They share their first nine commit messages verbatim ("first commit",
"feat: create backbone flask server & chrome extension ui", "fix: change code
extractor logic", "fix: fixing cors error") because iris is the renamed,
re-scoped continuation. The pivot is committed explicitly on Jan 4 with
`docs: pivot`, and the leetcode repo's README is amended to redirect to iris.

For the rest of January, you are heads-down on iris alone — 157 commits in 30
days. Chrome extension first, Flask backend, then a VS Code extension scaffold
appears. No KISA work this month. No outside contributions.

### February — iris peaks, A2UI enters

iris hits its all-time monthly high (302 commits) and lands its first 6 PRs,
including `merge: refactor codebase into monorepo` (#6) and the consolidated
"Track A / Track B / Track H" PRs (#7, #8) that pull in extension UX, analysis
quality testing, and a newsletter landing page — three concurrent tracks.

Late February the A2UI ecosystem appears for the first time: on **Feb 27** a
single-commit cluster lands across `google/A2UI`, `webershandwick/A2UI`,
`yourkarma6788/A2UI`, `kuku-forum/a2ui-test-hj`, `calwang414/ui`, and
`akfldk1028/A2UI`. Same calendar day, same sha pattern — looks like a workshop
or hackathon where everyone forked and committed off a shared base. PR #728 to
`google/A2UI` (the upstream) — a docs typo fix — gets merged Feb 26.

### March — the pivot away from solo product

The first week of March is a clean handoff: iris drops to 6 commits for the
month (a single newsletter cadence change on Feb 28, then nothing substantive
until late March), and `spartan-a2ui-adapter` opens with `chore: basic intro
on claude.md` on Mar 2.

The Spartan adapter ran for **12 days, 95 commits**, structured into 5
explicit phases visible in the commit log (Phase 2 library, Phase 3 catalog,
Phase 4 mock-app visual parity, Phase 5 verification). It ends Mar 13 with the
Card / CheckBox / Label / Separator wave and a parity test for HlmBadge —
a clean stopping point, not an abandonment. PR #739 to `google/A2UI` (the
sub-agent ports fix) opened Mar 1 and is still open.

Then on **Mar 14**, `umichkisa-ds` opens with `chore: initialize umichkisa-ds
package`. From here through May, KISA dominates everything else.

### April — KISA execution

April is the high-volume month: **776 commits to umichkisa-ds + 179 to
KISA-website-client**. The `[Phase 0.5 / 0.5.x]` and `[Phase 1 / 1.x]` and
`[Phase 2 / 2.x]` PR titles begin Apr 17 and don't stop. Issues file in
batches of ~12 per phase kickoff (Apr 17, Apr 20, Apr 23, Apr 26 each open
10–18 lane issues at once), and PRs close them one by one over the following
days. iris gets 8 commits this month, all newsletter-cadence chores tied to
issues #8/#9/#10.

### May (through the 11th) — ship to prod

Five "Ship phase N to prod" PRs land in 7 days:

- May 2 — `Phase 3: pocha-dashboard migration (dev → main)` (#136)
- May 4 — `Ship phase 4 (pocha-userfacing) to prod` (#153)
- May 5 — `Ship phase 5 (admin-pocha consolidation) to prod` (#162)
- May 9 — `Ship phase 6 (kisa-web) to prod` (#201)

Phase 6 alone fanned out into 17 main lanes plus 12 parallel sub-lane PRs
covering boards, info, everykisa, and the post CRUD surface. On May 10 a
retro essay lands in `umichkisa-ds`: `docs(history): add P4-6 migration retro
+ learning-to-delegate essay`. Today (May 11) this portfolio repo gets a new
`CLAUDE.md`, and an iris newsletter HTML draft for issue #13 ships.

---

## Project deep dives

### 1. `leetcode-cpp-to-python` — pivoted (Jan 2 – Jan 4, 55 commits)

A Chrome Extension overlay that converted C++ leetcode solutions to Python
via a Flask backend. The README is unusually explicit about the constraint
context: limited-access computer lab, low-spec Windows PC, VSCode tunnel to
home Mac, "development in spare moments." The two parallel experiments —
overlay-UI injection on leetcode pages, and the conversion engine itself —
started together on Jan 2 and ran 48 hours.

**Pivot moment:** Jan 4, commit `docs: pivot`. The README is updated with a
notice redirecting to iris. The pivot wasn't a failure of the leetcode angle
specifically — it was the realization that the *interesting* problem
underneath ("help a developer make sense of unfamiliar code") was much bigger
than C++ → Python translation on leetcode pages.

> *Reflection draft from signals:* The pivot is healthy and fast — 3 days from
> first commit to redirect notice is the right speed for that kind of
> realization. The fact that you reused the same first-commit messages in iris
> rather than starting clean suggests the underlying scaffolding (Flask backend,
> Chrome-extension UI patterns) was load-bearing and worth keeping. The thing
> worth probing later: did anything from the C++→Python conversion engine
> actually carry into iris's analysis backend, or was the only carryover the
> shape of the dev environment?

### 2. `iris` — core abandoned, snippet newsletter is the survivor (Jan 2 – ongoing)

The successor to leetcode-cpp-to-python, reframed around code comprehension:
"IRIS prepares developers to read code, not explains code." Two abstraction
layers (File Intent + Responsibility Blocks), VS Code extension as the client,
Python/Flask backend with an LLM cache (memory LRU + disk).

The architecture in the README is real and matches the commit log: a monorepo
refactor lands as PR #6 in February; PR #7 ships Track A (extension UX with
structured error handling, multi-file LRU, state persistence), Track B
(analysis quality testing infrastructure), and Track H (newsletter landing
page). PR #8 in mid-Feb consolidates more of the same — and is the **last
substantive feature PR**. Everything after that is newsletter-pipeline chores.

**Status today (per Jioh):** the iris core is **off the roadmap**. The VS
Code extension is no longer planned. The only thing actively running is the
**Snippet newsletter** — a HTML-draft pipeline that ships roughly weekly
(issues #7 → #13, currently on #13 dated May 8, drafted and pushed May 11).
Its automation was committed Mar 28 (`feat: automate Snippet newsletter
pipeline with phase-split skills`) and has been running mostly hands-off
since. The README's "In active development. Not yet released." line is
stale and should be updated to reflect this.

> *Reflection (corrected from signals + Jioh):* iris is best understood as
> two projects that shared a repo. The **core comprehension product**
> (extension + analysis backend) was the ambition; it ran hot through Jan–Feb,
> then got crowded out by the A2UI / KISA work and is now formally retired.
> The **Snippet newsletter** was a Track H side-quest in PR #7 that turned
> out to be the durable thing — its automation has been running on its own
> for 8 weeks, which is the actual proof that the pipeline works. The
> honest story isn't "iris stalled" — it's "the headline product was
> abandoned, but a side-feature became a working autonomous pipeline." The
> newsletter is also early evidence of the same harness-engineering instinct
> that later produced pastiche; worth naming that lineage.

### 3. A2UI — Google open-source contribution (Feb 26 – paused, **resuming now**)

A2UI is a **Google open-source project** Jioh got genuinely interested in.
Started contributing on **Feb 27**, but contribution work was paused once
umichkisa-ds took over. **As of now, this is the project Jioh is resuming.**

Two surfaces visible in the data:

- **Feb 27 cluster** across 6 A2UI-related repos (one commit each, same day) —
  the entry point into the ecosystem.
- **Upstream PRs to `google/A2UI`** — #728 (typo fix on the docs home page,
  merged Feb 26) and #739 (orchestrator sample fix wiring `--subagent_urls`
  + sub-agent ports for the demo, opened Mar 1, **still open**).

The private `future-sw-notes` repo (Mar 2–4, 4 commits) is the personal
notes-side of this thread — "future of software workspace, focus on A2UI,
and more projects."

> *Reflection (with Jioh's update):* This was a deliberate pause, not a
> drift — A2UI got crowded out by KISA, and is being picked back up now
> that the KISA migration's biggest phase has shipped. The interesting
> thing is the *shape* of how you got in: typo PR (Feb 26) → workshop
> cluster (Feb 27) → real orchestrator fix (Mar 1) → your own adapter
> (Mar 2–13). That's a credible "I am a contributor here" arc even
> truncated at 2 weeks. Worth deciding on the resume side: is the goal
> more upstream PRs, or restarting the Spartan adapter as a published
> reference for other A2UI integrators? PR #739 still being open is also
> a chance to ping it as part of the resume — re-engagement signal to the
> maintainers.

### 4. `spartan-a2ui-adapter` — abandoned (Mar 2 – Mar 13)

A 12-day, 95-commit focused build: an A2UI catalog adapter for Spartan UI
(Angular). Nx 22 monorepo, agent (Google ADK Python) + Angular client app,
adapter library `@spartan-a2ui-adapter` with a versioned catalog
(`v0.8.0/catalog.json`). The repo ships with a working end-to-end demo: type
"show me a button and badge" into the Angular app and Spartan components
render live from the agent.

The phase structure in the commits (Phase 2 library, Phase 3 catalog, Phase 4
visual parity, Phase 5 verification) is the **same shape** as the umichkisa-ds
migration that started 5 weeks later. This was the prototype for the working
style.

**Status today (per Jioh):** **abandoned**. It was a follow-up project to
*understand A2UI better* through hands-on building, not intended as a
shippable product. Worked on it for a while, then dropped it to focus on
the KISA design-system project.

> *Reflection (corrected from signals + Jioh):* Reframing this as a
> *learning project* rather than a shipped library is honest and matches the
> sequence — A2UI contribution → adapter → understanding deepens → set down
> when something more important shows up. Two things from this still earn
> their place in the larger story even though the project itself is on
> the shelf: (1) the adapter taught you the A2UI protocol from the
> integrator side, which is exactly what you need to resume contributing
> upstream; (2) the 5-phase execution structure was the **first proof of
> concept** for the methodology that later became `ds-client-constrained-
> execution` and then pastiche. Even abandoned, it's the earliest dated
> evidence that the harness pattern works on a non-trivial real-world build.

### 5. `umichkisa-ds` — the design system, built end-to-end (Mar 14 – ongoing, 1,147 commits)

**The most meaningful project of the window.** A design system **built from
scratch, like a professional** — not a component-extraction exercise but an
end-to-end DS effort: tokens, primitives, compound components, form DX layer,
docs site, versioned releases. Done while *learning UI/UX and design-system
concepts in parallel*, which is why the cadence shows the system being
re-shaped multiple times (the theme-inline / circular-tokens essay is the
clearest evidence of that learning curve being committed in real time).

Monorepo (`@umichkisa-ds/web`, `@umichkisa-ds/form`, `apps/docs`), 38
components, 62+ docs pages, OKLCH-token system on Tailwind v4, form DX layer
wrapping react-hook-form. Six retrospective essays already live under
`docs/history/`:

- `building-the-design-system.md` — 3 weeks, 497 commits, 38 components, 11 active days
- `auditing-the-docs.md`
- `theme-inline-circular-tokens.md`
- `migrating-the-client-neg1-to-2.md`
- `migrating-the-client-4-to-6.md`
- `building-pastiche.md` — extracting the general-purpose execution skill
- `learning-to-delegate.md` — the meta-essay (May 10) on shifting role

So this section won't repeat what those already cover. What the **outside**
view adds:

- The DS rolled **28 patch releases** during the migration window (web 1.0.0 → 1.0.28). That's not a one-shot package — it's a living system being driven by real consumer evidence from the client app, in a tight feedback loop.
- 5 issues + 7 PRs filed on the DS itself, but the much bigger volume — 103 issues, 53 PRs — sits on the *client* repo. The DS issues are about new components surfaced by client need (FileUpload, Sheet) and about the autonomous-routine plumbing.
- The "pastiche" pivot mid-Phase-3 (May 1) is invisible in the commit volume but visible in the PR titles — Phase 3.5 onwards stops citing the KISA-specific `ds-client-constrained-execution` skill and starts citing pastiche as the implementer.

### 6. `KISA-website-client` — phased migration shipped to prod (Jan 8 – May 10)

The actual KISA website. Phase structure runs **−1 → 6**, with each phase
sliced into lanes (e.g., Phase 1 = lanes 1.1 → 1.11; Phase 6 = lanes 6.1 →
6.17 plus 12 parallel `6.7-*` and `6.15-*` fan-out sub-lanes). Each lane
becomes a GitHub issue, then a PR, with consistent naming
(`[Phase X / X.Y] ...`).

Five sub-apps under `umichkisa.com`:

| App | Migration phase | Stakes |
|---|---|---|
| pocha-manage | Phase 2 | Seasonal, internal |
| pocha-dashboard | Phase 3 | Seasonal, internal |
| pocha-userfacing | Phase 4 | Seasonal, public |
| admin-pocha (consolidation) | Phase 5 | Internal |
| kisa-web | Phase 6 | **Always-on public** |
| jobs-curator | Phase 1 | Public |

The ordering — seasonal first, always-on last — is called out as the single
most consequential decision in `migrating-the-client-4-to-6.md`. The lower-
stakes surfaces paid for the higher-stakes surface's tooling.

> *Reflection (with Jioh's framing):* The DS + client-migration pair was
> as much a **harness-engineering project** as it was a UI-shipping project.
> Many trials on automating and improving the workflow itself — phase/lane
> decomposition, autonomous routines, DS-aware reviewer agents, two-round
> bounded loops — fed back into both surfaces simultaneously. The phase/lane
> structure is doing two things at once: a **work-breakdown structure** for
> you (so you know what's left), and an **interface contract for the
> autonomous routine** (so each lane is a self-contained spec the
> implementer can pick up cold). That dual-purpose is what makes the cadence
> sustainable inside the unit-time constraint, and is also what produced
> pastiche as a generalizable artifact rather than just KISA-specific glue.

### 7. `future-sw-notes` — private scratchpad (Mar 2 – Mar 4, 4 commits)

Private notes on the future-of-software thesis (A2UI, generative UI, agentic
software). Opened in the same week as the Spartan adapter, then went silent.
Likely the place to come back to when you want to write up what the A2UI work
actually taught you.

### 8. `retz8.github.io` — portfolio (Feb 17, May 11 — 4 commits)

This repo. Two touch-ups in February (a Codex-generated PR), no activity for
~3 months, then today's CLAUDE.md commit and this retrospective.

---

## Cross-cutting observations

### The pivot / abandonment pattern

Four moments in this window where one project gave way to another:

1. **Jan 4** — leetcode-cpp-to-python → iris (3 days in, scope expansion; explicit `docs: pivot`)
2. **late Feb** — iris core abandoned (extension + analysis backend dropped from the roadmap; only the Snippet newsletter survives, running autonomously)
3. **Mar 13** — spartan-a2ui-adapter abandoned (was a learning project; dropped to focus on KISA DS)
4. **May 1** — `ds-client-constrained-execution` → pastiche (mid-Phase-3 cutover, explicit primitive extraction)

The healthy pattern across #1, #3, and #4: the work that was set down had
already done its job (taught a thing, validated a primitive, or proved a
shape). The one to call out separately is #2 — iris was the most ambitious
solo product of the window, and abandoning the core is a real decision, not
a drift. The Snippet newsletter staying alive *despite* the core being
abandoned is itself meaningful: it's the survivor that proves the
automation-first instinct.

### The harness as the actual product

The most striking signal in the data is how much effort went into the
*system that does the work*, vs. the work itself:

- Phase/lane decomposition for KISA migration
- `ds-client-constrained-execution` skill (KISA-specific)
- pastiche (the general extraction)
- Two reviewer agents (`ds-client-review`, `toss-fe-review`)
- The newsletter pipeline on iris (`feat: automate Snippet newsletter pipeline with phase-split skills`)
- 5 explicit phases on `spartan-a2ui-adapter`

If you wrote a CV bullet from this window, the work is plausibly less
"shipped a design system + migrated a client + built an A2UI adapter" and
more "designed an autonomous-routine harness for solo-engineer agentic work
under hard time constraints, validated across three distinct projects." The
`learning-to-delegate.md` essay already says this — but the outside view
suggests it's not just the design-system project; it's been the through-line
since the Spartan adapter in early March.

### What the constraints actually shaped

The military-service environment (computer-room access, VSCode tunnel, off-
duty hours) shows up in the work in three legible ways:

1. **Low keyboard-time-per-decision**, which selects for delegated execution and
   structured handoffs over fluid pair-programming style.
2. **Burstiness** — 776 commits in April, 144 in early May, 6 in March on iris.
   Cadence tracks calendar, not methodology.
3. **No local dev**, which selects for tools that work over a tunnel — and
   coincidentally, for *autonomous* tools that don't need a human at the
   keyboard at all.

The harness work isn't unrelated to the service environment; it might be the
single most adapted-to-environment thing you've built.

---

## What's next (Jioh's stated direction)

- **Resume A2UI contributions to `google/A2UI`.** Immediate next thread.
  Genuine interest in the project; was paused only because KISA needed the
  focus. Open question: rebase + ping #739 as part of resuming?
- **Generalize and refine `pastiche` into a professional OSS project.** The
  skill that emerged from the KISA harness work is the artifact most worth
  productizing — make it project-agnostic, document it for outside users,
  ship it as a real OSS release.
- **Pick up Rust.** New language thread starting now. No repo activity yet —
  this is a fresh study direction alongside the A2UI + pastiche work.

## Open questions worth discussing

- For pastiche-as-OSS: what's the smallest first release look like? A skill
  package + docs + one external example, or a full reference implementation?
- KISA cadence is partly enabled by the unit-time pattern. What changes
  (if anything) when the constraint lifts in 2027? Does the harness shape
  still earn its keep when you can sit at a keyboard for 8 hours straight?
- A2UI: more upstream PRs, or pick the Spartan adapter back up as an
  external integration reference once it's framed as such?
- Is "harness engineer who happens to ship UIs" the resume / portfolio
  framing for this period — or do you want the design-system build to be
  the headline?

---

*Generated from gh data on 2026-05-11. Reflections in italics are first-pass
drafts from commit / PR signals; mark up freely and we'll iterate.*
