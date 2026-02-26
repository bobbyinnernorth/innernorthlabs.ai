# Claude Code Instructions

## Project: innernorthlabs.ai

Landing page showcase app for Inner North Labs LLC. Directory at `/` with preview routes at `/preview/[slug]`.

### Quick Start
```bash
nvm use 20
npm run dev
```

### Key Files
- `src/lib/landings.ts` — Landing page registry (add new pages here)
- `src/app/preview/[slug]/page.tsx` — Dynamic preview route
- `src/components/landings/` — Landing page components (neural-pulse, gradient-horizon, minimal-terminal)

---

## Behavioral Guidelines

Guidelines to reduce common LLM coding mistakes. Apply to all coding tasks.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

### 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it — don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

### 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

### 5. Present Options, Not Decisions

**For non-trivial choices, present 2-3 options (including "do nothing") before acting.**

When facing an architectural decision, ambiguous requirement, or multiple valid approaches:
- Present 2-3 concrete options with tradeoffs
- For each option, note: implementation effort, risk, impact on existing code, maintenance burden
- Include "do nothing" or "defer" when that's reasonable
- Give your recommended option and why
- Wait for the user to choose before proceeding

Don't silently pick an approach on non-trivial decisions. The user should see the tradeoff space.

### 6. Pace Large Changes Interactively

**For changes touching 5+ files, don't steamroll. Pause and check in.**

- Group changes into logical chunks (e.g., data layer → UI → tests)
- After each chunk, summarize what was done and what's next
- This prevents discovering a wrong assumption 12 files deep

### 7. Own the End-to-End

**Verify your changes work in production. Don't hand that off to the user.**

After deploying any change:
- Hit the production endpoint / page yourself (browser, curl, etc.) and confirm it works.
- If a change touches queries, test with real data — don't assume NULL handling, defaults, or caching behave as expected.
- Never tell the user "should be working now, can you check?" — check it yourself first.

---

## Honesty & Verification

- Do NOT claim to have verified something by watching/viewing media (video, images) when you actually only searched text. Be explicit about what verification method you used.
- Do not hallucinate data points (quotes, experts, counts) — if unsure, say so.
- When the user says to move on from a topic, MOVE ON. Do not keep revisiting or re-exploring the same approach.
- If a feature attempt is a dead end, revert cleanly and immediately pivot to the next task.

---

## Plan Self-Review

**Every plan gets a second pass.** After drafting an implementation plan, review your own plan through these lenses before presenting it:

1. **Architecture** — Does this fit the existing system design? Are there coupling concerns, unnecessary new abstractions, or changes that fight the current data flow?
2. **Code quality** — Am I introducing DRY violations? Are there existing patterns I should reuse instead of inventing new ones? Will this create tech debt hotspots?
3. **Tests** — What's the test plan? Which edge cases need coverage? Am I testing behavior or just happy paths?
4. **Performance** — Does this introduce N+1 queries, unnecessary API round-trips, or expensive re-renders? Could this be cached? Are there slow code paths on mobile?

If the second pass changes the approach, update the plan. Call out anything you caught in the review ("I originally planned X, but on review Y is better because...").

---

## Bug Fixing

- When fixing bugs, do NOT remove guards/checks entirely — narrow the fix to the specific issue.
- Always verify the fix addresses the root cause before committing.
- If a bug is reported on production, re-test on production after deploying — don't just claim it's fixed.
- Write tests assuming CORRECT behavior first, then fix the code to make them pass. Do not write tests that expect broken behavior.

---

## Before Every Commit
1. Type check (e.g., `npx tsc --noEmit`)
2. Run tests and ensure all pass
3. Verify build succeeds
4. **Self-review your diff** — Before committing, review your own changes:
   - **Code quality:** Any copy-pasted blocks that should be shared? Unused imports or dead code from your changes? Naming consistent with surrounding code?
   - **Performance:** Expensive operations inside render loops? API calls that could be combined?
   - **Test coverage:** Did you add/update tests for changed behavior? Any new edge cases uncovered?
   - If the self-review reveals issues, fix them before committing — don't ship known problems.

## After Every Commit
1. **Clean up untracked files** — `git status` and handle any temp files, debug scripts, or scratch work. Do not leave untracked files behind.
2. **Remove temp artifacts** — Delete any one-off test files, console.logs added for debugging, or throwaway scripts that aren't meant to be committed.

## Git Commits
- Do NOT include `Co-Authored-By` lines in commit messages
- Commits should be attributed solely to the user

---

## UI Craft Checklist

Before presenting UI work, verify:
1. **Text colors** — Related elements use consistent colors
2. **Icon usage** — If one button in a group has an icon, siblings should too
3. **Copy consistency** — Terminology, capitalization, verb forms match
4. **Button hierarchy** — Primary/secondary styling is deliberate and consistent
5. **Interactive states** — Hover, focus, disabled states all considered
6. **Spacing** — Similar elements get similar padding/margins
7. **Mobile-first** — Design for mobile viewport first, then scale up. Test at 375px width.

---

## SEO Requirements

**Every feature that adds or changes public routes must address SEO.** Every public-facing page must have:
1. Page-level meta tags (title, description, canonical URL)
2. H1 tag (visible or `sr-only` for layout pages)
3. Sitemap entry for static routes

---

## Component Consistency

When the same UI pattern appears in multiple places, standardize:
1. Check existing implementations for the same pattern
2. Match styling, structure, and behavior
3. Consider extracting shared code if pattern is complex
4. Keep assets (images, icons) visually consistent

**Never assume data array order equals desired sort order.** Always explicitly sort when display order matters.

---

## Performance Awareness

- **N+1 patterns:** If rendering a list of N items, don't make N separate API calls. Fetch all data upfront or via a single call.
- **Re-renders:** Memoize expensive computations (`useMemo`). Avoid creating new objects/arrays in render that trigger unnecessary child re-renders.
- **Mobile performance:** Test with throttled network. Lazy-load below-the-fold content.

---

## React Hook Pitfalls

### useState + Lazy Data = Race Conditions
`useState(!!arg)` only evaluates once on mount. If `arg` starts null (data loading) and changes later, the state stays at the initial value. Use the getDerivedStateFromProps pattern (set state during render) to detect prop changes:
```tsx
if (supplementId !== prevIdRef.current) {
  prevIdRef.current = supplementId;
  if (supplementId && !fetched) setLoading(true);
}
```

### Redirect Guards Need Loading Check
Never redirect on empty data without confirming loading is complete:
```tsx
// BAD: redirects before fetch starts
if (data.length === 0) return <Navigate to="..." />;

// GOOD: wait for loading to settle
if (loading) return <LoadingSpinner />;
if (data.length === 0) return <Navigate to="..." />;
```

---

## URL-Based State Management

Store filter/sort state in URL params for deep linking. Users can share links to specific views, and browser back/forward works naturally.

---

## Fixed Navbar and Content Spacing

If using a fixed navbar, all pages need top padding on their main container to push content below it:
```tsx
// WRONG — content hidden behind fixed navbar
<main className="container mx-auto px-4 py-8">

// CORRECT — accounts for fixed navbar
<main className="container mx-auto px-4 pt-20 pb-8">
```
Use `scroll-mt-20` on anchor targets for proper scroll-to behavior.

---

## Dependency Management

Projects scaffolded from templates often include many unused dependencies. Regular cleanup reduces bundle size, speeds installs, and clarifies dependency intent.

---

## After Completing Features
1. **Update learnings** — Jot down gotchas, patterns, decisions made, and anything that surprised you. Future sessions rely on this to avoid repeating mistakes.
2. **Check if project instructions need updating** — If the feature changed architecture, added new conventions, or introduced new workflows, update the relevant section.
3. **Analytics** — Every user-facing feature should emit tracking events. Ask: "What user behavior does this feature enable, and how would we measure its success?" Use lowercase_with_underscores naming. Consolidate related actions into one event with a `source` parameter rather than creating multiple event names.
