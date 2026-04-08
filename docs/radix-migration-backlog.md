# Radix-Style Migration Backlog

This backlog turns the current migration goal into discrete implementation tickets. The target is a headless-first component library with accessible behavior primitives, compound APIs, controlled and uncontrolled state support, and styling layered on top via SCSS.

## Guiding Outcome

- Behavior-heavy components should feel closer to Radix UI in API shape and accessibility guarantees.
- Styling should remain independent from behavior primitives.
- Public APIs should be deliberate, documented, and stable enough to support deprecations instead of accidental breakage.

## Ticket CL-001: Define primitive API contract

Objective: lock down the public API conventions before migrating internals.

Scope:

- Define naming conventions for stateful components.
- Decide whether exported parts use `Root`, `Trigger`, `Content`, `Item`, `Indicator`, and similar part names.
- Decide which current exports remain as aliases during migration.
- Define controlled and uncontrolled prop conventions for stateful components.

Acceptance criteria:

- A short API spec exists for `Menu` and `Toggle` covering root props, child parts, state props, callbacks, disabled behavior, and ref behavior.
- The spec defines one standard for controlled and uncontrolled props, for example `open` and `defaultOpen` with `onOpenChange`.
- The spec defines one standard for styling hooks, including `className`, `data-state`, `data-disabled`, and part-level attributes.
- The spec identifies which current exports are preserved temporarily and which are deprecated.

Notes:

- This ticket should finish before any public API changes land.

## Ticket CL-002: Add component test foundation

Objective: create a test baseline before behavior migrations.

Scope:

- Add a test runner suitable for Vite and React.
- Add basic render and interaction tests.
- Add keyboard and dismissal tests for stateful primitives.

Acceptance criteria:

- The workspace has a repeatable test command in `package.json`.
- Tests can render React components in a DOM environment.
- There is at least one interaction test covering open and close behavior for `Menu`.
- There is at least one interaction test covering pressed or toggled behavior for `Toggle`.
- Test setup is documented in the repo.

Notes:

- Prefer adding tests before replacing custom behavior with Radix-backed wrappers.

## Ticket CL-003: Migrate Menu to Radix-backed primitive

Objective: replace the custom `Menu` behavior model with a Radix-style dropdown primitive while preserving library ownership of the API.

Scope:

- Rebuild `Menu` on top of a Radix dropdown menu primitive.
- Replace local open-state context logic with the wrapped primitive state model.
- Support item selection, outside click dismissal, escape dismissal, keyboard navigation, and focus management.
- Preserve or intentionally remap current styling classes.

Acceptance criteria:

- `Menu` supports controlled and uncontrolled open state.
- `Menu` exposes part components for trigger, content, and item.
- `Menu` is keyboard operable and dismisses correctly on outside interaction and escape.
- `Menu` forwards refs for interactive parts where appropriate.
- Styling can react to `data-state` and positioning attributes without requiring behavior forks.
- Existing example usage can be rewritten to the new API without ad hoc behavior code.

Dependencies:

- CL-001
- CL-002

## Ticket CL-004: Redesign Toggle as a semantic primitive

Objective: make `Toggle` a proper accessible primitive instead of a context wrapper around a clickable `div`.

Scope:

- Replace non-semantic click handling with button semantics.
- Support controlled and uncontrolled pressed state.
- Preserve or redesign the compound API intentionally.
- Expose styling state through attributes rather than render branching alone.

Acceptance criteria:

- Toggle interaction is based on a semantic button element.
- The root supports `pressed`, `defaultPressed`, and `onPressedChange` or an equivalent standardized contract from CL-001.
- Disabled state prevents interaction and is reflected in DOM attributes.
- The public API documents when to use `Toggle` versus a future switch or checkbox primitive.
- Existing display helpers are either preserved intentionally or replaced with a clearer API.

Dependencies:

- CL-001
- CL-002

## Ticket CL-005: Introduce shared primitive conventions

Objective: remove one-off patterns so future primitives follow the same contract.

Scope:

- Add utilities or patterns for controlled state handling.
- Add context guards where compound parts require a parent root.
- Standardize ref forwarding and prop passthrough.
- Standardize `data-*` attributes for stateful styling.

Acceptance criteria:

- Stateful components use one consistent pattern for controlled and uncontrolled state.
- Compound parts fail predictably or warn clearly when rendered outside their root.
- Interactive components forward refs to their underlying DOM or primitive element.
- New stateful primitives expose styling hooks through DOM attributes instead of implicit render behavior.

Dependencies:

- CL-001

## Ticket CL-006: Align styling with primitive state

Objective: make the SCSS layer work with headless primitives instead of fighting them.

Scope:

- Audit current SCSS selectors for behavior assumptions.
- Prefer selectors based on `data-state`, `data-side`, and disabled attributes where relevant.
- Keep CSS variables as the theming baseline.

Acceptance criteria:

- `Menu` styles no longer rely on custom open-state rendering branches.
- `Toggle` styles respond to pressed state through DOM attributes.
- Behavior primitives can be restyled without editing logic files.
- No CSS-in-JS or styling framework migration is introduced unless explicitly requested.

Dependencies:

- CL-003
- CL-004

## Ticket CL-007: Document usage and migration paths

Objective: make the new API discoverable and reduce accidental regressions by documenting intended usage.

Scope:

- Update the README or add focused documentation for the new primitives.
- Add examples for controlled and uncontrolled usage.
- Document temporary aliases and deprecations.

Acceptance criteria:

- Developers can find one canonical example for each migrated primitive.
- Docs show controlled and uncontrolled usage where supported.
- Deprecated exports or props are listed with the replacement path.
- The docs explain that behavior primitives are headless-first and SCSS provides the visual layer.

Dependencies:

- CL-003
- CL-004

## Ticket CL-008: Release and deprecation cleanup

Objective: ship the migration deliberately rather than accumulating API drift.

Scope:

- Remove temporary compatibility code once downstream usage is updated.
- Audit exports and types.
- Decide whether the migration is a minor or major version bump.

Acceptance criteria:

- Temporary aliases are either removed or tracked with a clear removal plan.
- Public exports match the documented API.
- Types, runtime behavior, and docs are aligned.
- Release notes summarize breaking changes, migration steps, and known follow-up work.

Dependencies:

- CL-007

## Suggested Execution Order

1. CL-001
2. CL-002
3. CL-003
4. CL-004
5. CL-005
6. CL-006
7. CL-007
8. CL-008

## First Milestone

Milestone name: Behavior Primitives Foundation

Included tickets:

- CL-001
- CL-002
- CL-003
- CL-004

Milestone exit criteria:

- `Menu` and `Toggle` both expose a deliberate Radix-style API.
- The library has interaction tests for behavior primitives.
- Styling remains SCSS-driven and reacts to primitive state through DOM attributes.
