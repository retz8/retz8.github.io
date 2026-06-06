# Military-Service Retrospective: 2026-05-11 → 2026-06-03

The second window, picking up exactly where `2026-jan-may-retrospective.md`
left off (its last commit was the Jan–May retro itself, on May 11). Drafted
from GitHub signals — 42 default-branch commits authored across 5 repos in
the window, on top of the new `pastiche` repo whose default branch now carries
273 commits. Reflections in italics are first-pass interpretations from the
data; correct or strike anything that doesn't ring true.

---

## Headline numbers

| Metric | Count |
|---|---|
| Window | May 11 → Jun 3 (24 days) |
| Repos touched | **5** (`pastiche`, `studying-rust`, `umichkisa-ds`, `KISA-website-client`, `iris`) |
| `pastiche` commits (default branch, all-time) | **273** — repo born this window |
| `studying-rust` commits | **11** (May 13 → Jun 2) |
| New repos created | **2** (`pastiche`, `studying-rust`) |
| Headline event | `pastiche` **v1.0.0 shipped** (Jun 3) |

Where the Jan–May window was five repos absorbing 99% of the work, this window
is essentially **two threads**: the pastiche OSS extraction (dominant) and a
new Rust study track (slow burn, started fresh). Everything else is tail
activity — one KISA dogfooding PR, one umichkisa-ds spec doc, the last iris
newsletter draft.

| Thread | Repo(s) | Status |
|---|---|---|
| pastiche OSS extraction | `pastiche` (+ spec in `umichkisa-ds`, dogfood in `KISA-website-client`) | **Shipped v1.0.0** (Jun 3) |
| Rust study | `studying-rust` | **Active** — through Rust Book Ch. 4 |
| iris Snippet newsletter | `iris` | Tail only (issue #13 closed out May 11) |
| A2UI resume | — | **Not yet started** — no commits this window |

---

## Timeline overview

### May 11–16 — handoff from KISA to the extraction

The prior window closed on the KISA migration shipping through Phase 6. The
first move of this window is **not** the stated "resume A2UI" — it's writing
the delivery spec for pulling pastiche out of the KISA harness. On **May 16**,
`umichkisa-ds` gets `docs(pastiche): add OSS extract v1 delivery spec` — the
plan for lifting the KISA-specific `ds-client-constrained-execution` skill into
a standalone, project-agnostic plugin. That spec is the seed of the whole
window.

### May 13 — Rust study opens in parallel

Two days before the pastiche spec, on **May 13**, `studying-rust` is created:
`first commit`, a `claude.md` for the study, a root `.gitignore`, and the
canonical `hello_world` (direct `rustc`) + `hello_cargo` (Cargo) starter pair.
By that evening the Chapter 2 guessing-game project is scaffolded. The repo
description frames it plainly: *"personal repo to study Rust & System
engineering to expand knowledge domain in SWE."*

### May 14–27 — Rust on a slow, calendar-driven cadence

The Rust commits track the Rust Book chapter by chapter, at roughly one
sitting per active day:

- **May 14** — Ch. 2 guessing game completed; first Ch. 3 (3.1) examples
- **May 19** — Ch. 3 variables & functions projects
- **May 27** — Ch. 3 control-flow (`branch code`); Ch. 4 (ownership) base code

The burstiness pattern from the last window holds: study lands in discrete
evening sessions (May 13, 14, 19, 27), not continuously. Eleven commits over
two weeks is a study pace, not a sprint — appropriate for a from-scratch
language thread sharing time with the pastiche push.

### Mid-to-late May — pastiche built out (off default branch)

The bulk of pastiche's 273 commits don't show up in the date-windowed
default-branch search, which means the build happened the same way KISA did:
on branches / through PRs, with the public `main` only catching up near the
end. By **May 31** the default branch starts absorbing the finishing work —
the docs and packaging pass.

### May 31 — the documentation and packaging pass

A dense day of adopter-facing authoring:

- `docs: author README first pass (task 8.4)` — front-door router README:
  problem-forward hook, `/plugin` marketplace quickstart, the DESIGN.md-lineage
  "How it works" (three docs + doubt-defense loop), skill/agent catalog.
- `docs: add CONTRIBUTING.md with core/adapters architecture` — the
  maintainer-facing `core × adapter → dist` build seam, the ships-to-adopter
  line, lockstep versioning, why `dist/` is committed.
- `docs: author 8.5 format docs; make docs/ public-only; untrack _dev` —
  splits public docs from a `_dev/` staging area.
- `docs: author claude-code adapter doc (task 8.6)`; move `codex.md` to `_dev`
  (Codex is a v1 placeholder platform).

### Jun 2–3 — example app, spec polish, v1.0.0

- **Jun 2** — one more Rust commit (`chore: p4 minor code change`).
- **Jun 3 (the ship day)** — the example showcase gets filled in:
  `github-primer-react` with **149 components, 1113 tokens, 51 scenarios, 20
  rules**, 20 side-by-side screenshots (10 real GitHub / 10 pastiche), and a
  fix to load the example via `--plugin-dir` instead of a broken symlink. Then
  the release sequence: `ROADMAP.md` consolidation (9.2), a platform-agnostic
  spec pass (9.1), `prod: ship v1.0.0`, dropping the Claude-plan limitation
  messaging, README compatibility/known-limitations sections, and a
  "Shared Across the Org" note. Same day, `KISA-website-client` #212 wires
  pastiche back into the client (`add pastiche plugin support … draw UI on
  Design System without help from designer`) — the extraction's first
  dogfooding loop closed on the project it came from.

---

## Project deep dives

### 1. `pastiche` — the OSS extraction, shipped (born this window, 273 commits, v1.0.0)

**The headline of the window.** The Jan–May retro had pastiche as a primitive
*extracted mid-Phase-3* from the KISA harness but not yet a standalone product.
This window is the whole arc from spec to v1.0.0 release: a **Claude Code
plugin** for implementing frontend UI that stays faithful to an existing design
system, rather than inventing UI patterns.

The architecture, as shipped:

- **Three living documents.** `FACT.md` (auto-extracted component catalog + CSS
  tokens straight from the codebase), `KNOWLEDGE.md` (curated scenario →
  component mappings + brand identity), `WISDOM.md` (business logic and
  component rules that can't be auto-derived).
- **Bounded doubt-defense loop.** Implementer (round 1) writes against the three
  docs → reviewer raises strict objections → implementer (round 2) corrects or
  defends. This is the KISA two-round bounded review loop, generalized.
- **Skills:** `/pastiche`, `/pastiche-init`, `/pastiche-setup`, `/pastiche-sync`,
  `/pastiche-lint`.
- **`core × adapter → dist` build.** Skills converge across platforms, agents
  diverge, tools/templates are identical; `dist/` is committed. Claude Code is
  the only shipped adapter in v1; Codex/Cursor/OpenCode are placeholders.
- **Scope, stated honestly in the README:** React + TypeScript only (any
  prop-typed library — npm package or shadcn-style source); Vue/Angular planned.
  The lint binary is darwin/arm64-only — named as a known limitation rather
  than hidden. MIT © 2026 Jioh In.
- **Proof artifact:** the `github-primer-react` example reconstructs GitHub's
  own UI from Primer with pastiche and shows it side-by-side with the real
  thing — the most concrete "this actually works on a non-trivial library"
  evidence in the repo.

> *Reflection draft from signals:* This is the cleanest "primitive → product"
> arc in either window. The last retro flagged pastiche as the artifact most
> worth productizing; 24 days later it's MIT-licensed, documented for outside
> users, has a real reference example, and is already dogfooded back into KISA
> (#212). Two things stand out. First, the discipline of the docs pass — a
> public/`_dev` split, a CONTRIBUTING that explains the build seam, a ROADMAP
> that absorbs every "someday" so the spec stays purely descriptive — is the
> behavior of someone shipping for *other people*, not for themselves. That's
> the real graduation from KISA-internal glue to OSS. Second, the honesty
> markers (React-only "made loud," the darwin-only lint binary called a known
> limitation, dropping the unreliable plan-cost claim) are a credibility move:
> the README under-promises on purpose. The open question is distribution —
> v1.0.0 exists, but a release is only as real as its first external adopter;
> what's the plan to get pastiche in front of someone who isn't you?

### 2. `studying-rust` — new language thread, active (May 13 – ongoing, 11 commits)

The "pick up Rust" line from the last retro's *What's next* turned into a real
repo two days into the window. It follows the Rust Book linearly: Ch. 2
(guessing game, the canonical first project), Ch. 3 (variables, functions,
control flow), Ch. 4 (ownership — the base code is in, the chapter most people
slow down on). The repo is framed as Rust **and** systems engineering — a
domain-expansion thread, not a project with a product goal.

> *Reflection draft from signals:* This is the first deliberately
> *non-agentic, non-harness* thing in either window — you're sitting and
> learning a language by typing the book's exercises, which is the opposite of
> the delegate-and-review mode everything else runs in. That contrast is worth
> naming: the whole Jan–June story is "build the harness so you don't have to
> be at the keyboard," and Rust is the one place you chose to *be* at the
> keyboard. Cadence is honest-slow (4 active days, through Ch. 4 in three
> weeks) because pastiche owned the window — that's fine, but Ch. 4 is exactly
> where Rust gets hard, so the real test of this thread is whether it survives
> into the borrow-checker chapters once pastiche's release energy fades.

### 3. `umichkisa-ds` / `KISA-website-client` — the extraction's bookends (2 commits)

KISA isn't a project this window so much as the **source and the sink** of
pastiche. The source: `umichkisa-ds` gets the `OSS extract v1 delivery spec`
on May 16 — the plan that launched the whole window. The sink: on Jun 3,
`KISA-website-client` #212 installs the shipped plugin back into the client to
"draw UI on the Design System without help from a designer." The DS and client
that *produced* the harness in the last window are now the harness's first
**consumer** — the loop the entire harness-as-product thesis predicted.

### 4. `iris` — newsletter tail (May 11 only)

A single cluster on May 11 closing out the issue-#13 newsletter drafts
(`restore drafts.json …`). After that, silent for the rest of the window. The
autonomous pipeline keeps doing its thing; there's just nothing new to say
about it that the last retro didn't already cover.

### 5. A2UI — still paused (no commits)

The last retro's headline *What's next* was "resume A2UI contributions" —
including possibly rebasing and pinging the still-open PR #739. **It didn't
happen this window.** No A2UI-ecosystem commits between May 11 and Jun 3. The
window's energy went entirely to finishing pastiche instead.

> *Reflection draft:* Worth being honest that "resume A2UI" has now been the
> stated-next-thing across two retros without a commit behind it. That's not a
> failure — pastiche was the right thing to finish first, and shipping a v1.0.0
> beats half-resuming two threads. But it does mean A2UI is drifting from
> "paused, resuming now" toward "deprioritized," and PR #739 is sitting open
> the whole time. Next window probably has to either actually re-engage it
> (rebase + ping) or consciously retire it, rather than carry it forward as an
> intention a third time.

---

## Cross-cutting observations

### The thesis closed its own loop

The Jan–May retro's central claim was that the *harness was the actual
product* — that the through-line wasn't "shipped a DS + migrated a client" but
"designed an autonomous-routine harness, validated across three projects." This
window is that claim cashing out: the harness got **extracted, named,
documented, licensed, and reinstalled into the project it came from**. The
KISA → pastiche → KISA-client(#212) loop is the literal proof — a tool born
from one project, generalized, and then bought back by that same project as an
external dependency. You can't ask for a cleaner validation of "the harness is
the product."

### Focus over breadth

Where Jan–May was 13 repos and four pivots, this window is deliberately narrow:
one thing finished (pastiche), one thing started (Rust), everything else
tail-state. The discipline of *not* spreading — of letting A2UI stay paused
rather than juggling it — is itself the lesson the `learning-to-delegate.md`
essay was pointing at. Shipping v1.0.0 required protecting the window.

### Two modes of working, side by side

The window runs two opposite styles simultaneously: pastiche (delegate,
review, package — the harness mode) and Rust (sit and type the exercises — the
student mode). Holding both is healthy. The harness mode is for shipping under
the unit-time constraint; the student mode is the deliberate-practice
counterweight that keeps the fundamentals from atrophying while a fleet of
agents does the production work.

---

## What's next (carry-forward + open)

- **Get pastiche its first external adopter.** v1.0.0 is shipped; the next
  milestone isn't more features, it's distribution — someone who isn't Jioh
  installing it. Decide the smallest credible "launch" (a post? a Show HN? the
  Claude Code plugin marketplace listing?).
- **Push Rust past Ch. 4.** Ownership base code is in; the borrow checker,
  lifetimes, and the first non-toy program are the real test of whether the
  study thread sticks.
- **Decide A2UI's fate explicitly.** Two retros of "resuming" with zero commits
  — either re-engage (rebase + ping #739) this next window, or consciously
  shelve it instead of carrying the intention forward a third time.

## Open questions worth discussing

- **pastiche distribution:** what's the first move to get external eyes on it —
  and is the `github-primer-react` example the demo you lead with?
- **Vue/Angular on the roadmap:** is broadening framework support the v1.x
  priority, or is depth on React (more libraries, better extractor) the better
  bet before going wide?
- **Rust's purpose:** is this study aimed at a *systems* project down the line
  (the repo says "system engineering"), or is it breadth-for-its-own-sake? The
  answer changes how far to push and whether to build something real in it.
- **The constraint clock:** same question the last retro raised, now sharper —
  with pastiche shipped, how much of the next window is "use the harness" vs.
  "keep learning by hand," and which one does the remaining service time
  actually reward?

---

*Generated from gh data on 2026-06-03. Reflections in italics are first-pass
drafts from commit / PR signals; mark up freely and we'll iterate. Continues
`2026-jan-may-retrospective.md`.*
