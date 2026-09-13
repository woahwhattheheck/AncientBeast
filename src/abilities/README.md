# Abilities

This directory contains creature-specific ability implementations. Each module registers the four ability slots for a unit into the game ability table; the shared `Ability` lifecycle and helpers live in [`../ability.ts`](../ability.ts).

## How the pieces fit

- Static names, descriptions, costs, ranges, damage/effect metadata, and upgrade text are defined in [`../data/units.ts`](../data/units.ts).
- Executable targeting, requirements, activation, animation, and trigger behavior belongs here.
- Shared combat primitives such as `Damage`, `Effect`, `Team`, matrices, and grid helpers should be reused instead of reimplemented per unit.
- Bot decision policy for the same creatures belongs in [`../bots/`](../bots/README.md), not in ability activation code.

## Adding or changing an ability

Preserve the four-slot ordering used by the unit data. Keep `require()` side-effect free: it is called by the UI and bots to determine availability. Active abilities normally finish through `Ability.end()` so costs, cooldowns, UI state, and signals stay consistent; use its existing flags when a special log/deferred-ending behavior is required.

For trigger-based abilities, make trigger conditions narrow and ensure repeated triggers are intentional. Prefer existing geometry helpers from `../utility/` for target maps and directions.

Add regression coverage under `../__tests__/` for rule changes when practical, then run `npm run lint` and the relevant Jest suite (or `npm test` for the full gate).
