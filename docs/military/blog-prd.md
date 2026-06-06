# PRD: Writing Section

## Overview

A dedicated space on the portfolio site for long-form articles. Today the site presents work as a list of projects and experiences — discrete records of *what* was built. The Writing section adds a place for the *thinking behind* the work: reflections, decisions, and lessons that don't fit inside a project card.

The goal is not to impose a single grand narrative. Each article stands on its own. Read together, they should let a reader gradually form a sense of who the author is as an engineer — but that picture is something the reader discovers, never something the section announces.

## Goals

- Give the author a home for reflective, long-form writing alongside the existing project and experience records.
- Let each article be read independently, while allowing a natural through-line to emerge for readers who read several.
- Preserve the site's existing tone: minimal, calm, prose-forward, low on visual noise.
- Make articles easy to browse, enter, read, and move between.

## Non-Goals

- This is not a high-frequency blog or a content marketing channel.
- No social features (comments, reactions, sharing widgets, follower counts).
- No tagging, categorization, or filtering system at launch. Articles are a single ordered set.
- No search at launch.
- No author-facing CMS or in-browser editing experience.

## Users

- **Primary:** recruiters, hiring managers, and fellow engineers evaluating the author. They want to understand how the author thinks, not just what they shipped.
- **Secondary:** the author, who uses writing as a way to process and record their own work.

## Requirements

### Article list (index)

- Display all articles as a browsable list.
- Articles are presented in a deliberate order controlled by the author (chronological by default).
- Each list entry shows at minimum: title, date, and a short summary.
- Selecting an entry opens the full article.
- The list should feel consistent with the existing site sections in layout and tone.

### Individual article (detail)

- Display the full article: title, date, and body.
- The body must support rich content beyond plain text — at minimum headings, code snippets, images, and diagrams — so technical ideas can be shown, not just described.
- Long articles should remain easy to navigate (e.g. the reader can orient themselves within a long piece).
- Provide a clear way to return to the article list.
- Provide a way to move between articles directly, following the author's defined order.

### Cross-cutting

- The Writing section is a top-level destination, reachable from the site's primary navigation alongside the existing sections.
- Articles are individually addressable, so a single article can be linked to and opened directly.
- The reading experience must work well on both desktop and mobile.
- Visual and typographic treatment must match the rest of the site; the section should not read as a bolt-on.

## Article Metadata

Each article carries, at minimum:

- A human-readable title.
- A date.
- A short summary used in the list view.
- A stable identifier used to address the article directly.

## Success Criteria

- A visitor can discover the Writing section from the main navigation, browse the list, open an article, read it comfortably, and move to the next one without friction.
- An individual article can be opened directly via its own link.
- Articles containing diagrams, code, and images render cleanly on desktop and mobile.
- The section feels native to the existing site rather than separate from it.

## Future Considerations

- Grouping or filtering articles once the volume grows beyond a comfortable single list.
- Search across articles.
- Surfacing related articles or a richer reading sequence.
